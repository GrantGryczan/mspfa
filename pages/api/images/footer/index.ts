import type { APIHandler } from 'modules/server/api';
import fs from 'fs-extra';
import path from 'path';
import validate from './index.validate';

/** The array of footer image filenames. */
const footers = (fs.readdirSync(
	path.join(process.cwd(), 'public/images/footers')
)).filter(footer => /\.(?:png|gif)$/i.test(footer));

const Handler: APIHandler<{
	method: 'GET'
}, {
	body: { name: string }
}> = async (req, res) => {
	await validate(req, res);

	res.send({
		name: footers[Math.floor(Math.random() * footers.length)]
	});
};

export default Handler;