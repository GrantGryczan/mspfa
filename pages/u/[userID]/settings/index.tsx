import Page from 'components/Page';
import type { MyGetServerSideProps } from 'modules/server/pages';
import type { PrivateUser } from 'modules/client/users';
import { getUserByUnsafeID, getPrivateUser } from 'modules/server/users';
import ErrorPage from 'pages/_error';
import { Form, Formik, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import Grid from 'components/Grid';
import SettingGroup from 'components/Setting/SettingGroup';
import Setting from 'components/Setting';
import NotificationSettingGroup from 'components/Setting/NotificationSettingGroup';
import { themeNames } from 'modules/client/themes';
import type { Theme } from 'modules/client/themes';
import './styles.module.scss';

const getSettingsValuesFromUser = ({ settings }: PrivateUser) => ({
	ads: settings.ads,
	autoOpenSpoilers: settings.autoOpenSpoilers,
	preloadImages: settings.preloadImages,
	stickyNav: settings.stickyNav,
	imageSharpening: settings.imageSharpening,
	theme: settings.theme,
	style: settings.style, // TODO
	keybinds: settings.keybinds, // TODO
	notifications: {
		messages: settings.notifications.messages, // TODO
		userTags: settings.notifications.userTags, // TODO
		commentReplies: settings.notifications.commentReplies, // TODO
		comicDefaults: settings.notifications.comicDefaults // TODO
	}
});

type Values = ReturnType<typeof getSettingsValuesFromUser>;

const submitSettings = (values: Values, formikHelpers: FormikHelpers<Values>) => {

};

type ServerSideProps = {
	user?: PrivateUser,
	statusCode?: number
};

const Component = ({ user, statusCode }: ServerSideProps) => (
	user ? (
		<Page heading="Settings">
			<Formik
				initialValues={getSettingsValuesFromUser(user)}
				onSubmit={submitSettings}
			>
				<Form>
					<Grid id="settings">
						<SettingGroup heading="Display">
							<Setting label="Theme" as="select" name="theme">
								{(Object.keys(themeNames) as Theme[]).map(theme => (
									<option key={theme} value={theme}>
										{themeNames[theme]}
									</option>
								))}
							</Setting>
							<Setting label="Sticky nav bar" name="stickyNav" />
							<Setting label="Image sharpening" name="imageSharpening" />
							<Setting label="Side ad" name="ads.side" />
							<Setting label="Matched content ad" name="ads.matchedContent" />
						</SettingGroup>
						<SettingGroup heading="Utility">
							<Setting label="Auto-open spoilers" name="autoOpenSpoilers" />
							<Setting label="Preload images" name="preloadImages" />
						</SettingGroup>
						<Grid id="notification-settings">
							<NotificationSettingGroup heading="General Notifications">
								<label className="setting-label">Messages</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<label className="setting-label">User tags</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<label className="setting-label">Comment replies</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
							</NotificationSettingGroup>
							<NotificationSettingGroup heading="Default Adventure Notifications">
								<label className="setting-label">Updates</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<label className="setting-label">News</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<label className="setting-label">Comments</label>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
								<div className="setting-input">
									<Field
										id="setting-notifications-"
										name="notifications."
										type="checkbox"
									/>
								</div>
							</NotificationSettingGroup>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Page>
	) : <ErrorPage statusCode={statusCode} />
);

export default Component;

export const getServerSideProps: MyGetServerSideProps = async context => {
	const props: ServerSideProps = {};

	if (context.req.user) {
		const userFromParams = await getUserByUnsafeID(context.params.userID);
		if (userFromParams) {
			// Check if `context.req.user` has permission to access `userFromParams`.
			if (
				userFromParams._id.equals(context.req.user._id)
				|| context.req.user.perms.unrestrictedAccess
			) {
				props.user = getPrivateUser(userFromParams);
			} else {
				props.statusCode = 403;
			}
		} else {
			props.statusCode = 404;
		}
	} else {
		props.statusCode = 403;
	}

	return { props };
};