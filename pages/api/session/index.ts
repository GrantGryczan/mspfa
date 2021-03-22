import type { APIHandler } from 'modules/server/api';
import type { ExternalAuthMethod, InternalAuthMethod } from 'modules/server/auth';
import { checkExternalAuthMethod } from 'modules/server/auth';
import Cookies from 'cookies';
import validate from './index.validate';

export type SessionBody = {
	authMethod: ExternalAuthMethod
} | {
	email: string,
	authMethod: Omit<InternalAuthMethod, 'legacy'>
};

export type Request = { method: 'DELETE' } | {
	method: 'POST',
	body: SessionBody
};

export default (async (req, res) => {
	await validate(req, res);
	const cookies = new Cookies(req, res);
	
	if (req.method === 'POST') {
		if (req.body.authMethod.type === 'password') {
			
		} else {
			const data = await checkExternalAuthMethod(req, res);
			
		}
	}
}) as APIHandler<Request>;