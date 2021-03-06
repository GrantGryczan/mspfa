import validate from './index.validate';
import type { APIHandler } from 'modules/server/api';
import type { StoryDocument } from 'modules/server/stories';
import stories, { getStoryByUnsafeID } from 'modules/server/stories';
import { authenticate } from 'modules/server/auth';
import { Perm } from 'modules/client/perms';
import type { MatchKeysAndValues, UpdateQuery } from 'mongodb';
import type { Mutable } from 'modules/types';

const Handler: APIHandler<{
	query: {
		storyID: string,
		pageID: string
	},
	method: 'DELETE'
}> = async (req, res) => {
	await validate(req, res);

	const { user } = await authenticate(req, res);

	if (!user) {
		res.status(403).send({
			message: 'You must be signed in to edit an adventure.'
		});
		return;
	}

	const story = await getStoryByUnsafeID(req.query.storyID, res);

	if (!(
		story.owner.equals(user._id)
		|| story.editors.some(userID => userID.equals(user._id))
		|| user.perms & Perm.sudoWrite
	)) {
		res.status(403).send({
			message: 'You do not have permission to edit the specified adventure.'
		});
		return;
	}

	/** The ID of the page to delete. */
	const deletedPageID = +req.query.pageID;

	if (!(deletedPageID in story.pages)) {
		res.status(404).send({
			message: 'The specified page does not exist.'
		});
		return;
	}

	const pageValues = Object.values(story.pages);

	const $set: Mutable<MatchKeysAndValues<StoryDocument>> = {};

	const updateQuery: UpdateQuery<StoryDocument> = {
		// Remove the last page.
		$unset: {
			[`pages.${pageValues[pageValues.length - 1].id}`]: true
		}
	};

	for (const page of pageValues) {
		if (page.id === deletedPageID) {
			// Skip the page being deleted.
			continue;
		}

		let nextPagesChanged = false;

		// Adjust `nextPages` IDs of pages after the deleted page.
		for (let i = 0; i < page.nextPages.length; i++) {
			if (page.nextPages[i] > deletedPageID) {
				page.nextPages[i]--;
				nextPagesChanged = true;
			}
		}

		// Adjust IDs of pages after the deleted page.
		if (page.id > deletedPageID) {
			page.id--;

			// Set this page (with its `id` decremented and `nextPages` adjusted) into the previous page.
			$set[`pages.${page.id}`] = page;
		} else if (nextPagesChanged) {
			// If this page isn't already being added to `$set` due to an ID adjustment but still has a changed `nextPages`, add this page's changed `nextPages` to `$set`.
			$set[`pages.${page.id}.nextPages`] = page.nextPages;
		}
	}

	if (Object.values($set).length) {
		updateQuery.$set = $set;
	}

	await stories.updateOne({
		_id: story._id
	}, updateQuery);

	// TODO: Adjust IDs of pages in users' gave saves.

	res.status(200).end();
};

export default Handler;