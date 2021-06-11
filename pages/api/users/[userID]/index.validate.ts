// This file is automatically generated by `scripts/generate-validators`. Do not edit directly.

import { createValidator } from 'modules/server/api';

export default createValidator({
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/RequestMethod',
	definitions: {
		RequestMethod: {
			type: 'string',
			enum: [
				'GET',
				'DELETE',
				'PUT'
			]
		}
	}
}, {
	$schema: 'http://json-schema.org/draft-07/schema#',
	$ref: '#/definitions/Request',
	definitions: {
		'Request': {
			anyOf: [
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {},
						query: {
							type: 'object',
							properties: {
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'GET'
						}
					},
					required: [
						'method',
						'query'
					]
				},
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {},
						query: {
							type: 'object',
							properties: {
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'DELETE'
						}
					},
					required: [
						'method',
						'query'
					]
				},
				{
					type: 'object',
					additionalProperties: false,
					properties: {
						body: {
							$ref: '#/definitions/RecursivePartial%3Calias-731470504-70254-70395-731470504-0-212312%3Cdef-alias--767-1064--0-47551776781619%2Calias--719-955--0-2539308207794%3E%3E'
						},
						query: {
							type: 'object',
							properties: {
								userID: {
									type: 'string'
								}
							},
							required: [
								'userID'
							],
							additionalProperties: false
						},
						method: {
							type: 'string',
							const: 'PUT'
						}
					},
					required: [
						'body',
						'method',
						'query'
					]
				}
			]
		},
		'RecursivePartial<alias-731470504-70254-70395-731470504-0-212312<def-alias--767-1064--0-47551776781619,alias--719-955--0-2539308207794>>': {
			type: 'object',
			properties: {
				birthdate: {
					type: 'number'
				},
				name: {
					type: 'string',
					minLength: 1,
					maxLength: 32
				},
				email: {
					$ref: '#/definitions/EmailString',
					description: 'The user\'s verified email address.'
				},
				description: {
					type: 'string',
					maxLength: 2000
				},
				icon: {
					anyOf: [
						{
							type: 'string',
							const: ''
						},
						{
							$ref: '#/definitions/URLString'
						}
					]
				},
				site: {
					anyOf: [
						{
							type: 'string',
							const: ''
						},
						{
							$ref: '#/definitions/URLString'
						}
					]
				},
				profileStyle: {
					type: 'string'
				},
				settings: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--2989-4025--2978-4026--2128-4608--2100-4609--0-7814%3E'
				}
			},
			additionalProperties: false
		},
		'EmailString': {
			type: 'string',
			description: 'The following regular expression is copied directly from https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.',
			pattern: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
		},
		'URLString': {
			type: 'string',
			pattern: '^https?://'
		},
		'RecursivePartial<structure--2989-4025--2978-4026--2128-4608--2100-4609--0-7814>': {
			type: 'object',
			properties: {
				emailPublic: {
					type: 'boolean'
				},
				birthdatePublic: {
					type: 'boolean'
				},
				favsPublic: {
					type: 'boolean'
				},
				ads: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3073-3124--3066-3125--2989-4025--2978-4026--2128-4608--2100-4609--0-7814%3E'
				},
				autoOpenSpoilers: {
					type: 'boolean'
				},
				preloadImages: {
					type: 'boolean',
					description: 'This makes images on adjacent pages always preload when a user visits a story page.'
				},
				stickyNav: {
					type: 'boolean',
					description: 'This makes the nav bar always stay at the top of the screen when scrolling below it.'
				},
				imageAliasing: {
					type: 'boolean',
					description: 'This sets the image rendering style to nearest-neighbor on images which the user might want that on (such as story panels).'
				},
				theme: {
					$ref: '#/definitions/Theme'
				},
				style: {
					type: 'string'
				},
				controls: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3593-3662--3581-3663--2989-4025--2978-4026--2128-4608--2100-4609--0-7814%3E'
				},
				notifications: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3680-4022--3663-4022--2989-4025--2978-4026--2128-4608--2100-4609--0-7814%3E'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<structure--3073-3124--3066-3125--2989-4025--2978-4026--2128-4608--2100-4609--0-7814>': {
			type: 'object',
			properties: {
				side: {
					type: 'boolean'
				},
				matchedContent: {
					type: 'boolean'
				}
			},
			additionalProperties: false
		},
		'Theme': {
			type: 'string',
			enum: [
				'standard',
				'dark',
				'felt',
				'sbahj',
				'trickster'
			]
		},
		'RecursivePartial<structure--3593-3662--3581-3663--2989-4025--2978-4026--2128-4608--2100-4609--0-7814>': {
			type: 'object',
			properties: {
				back: {
					type: 'string'
				},
				forward: {
					type: 'string'
				},
				toggleSpoilers: {
					type: 'string'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<structure--3680-4022--3663-4022--2989-4025--2978-4026--2128-4608--2100-4609--0-7814>': {
			type: 'object',
			properties: {
				messages: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				userTags: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				commentReplies: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				storyDefaults: {
					$ref: '#/definitions/RecursivePartial%3Cdef-alias--1612-1804--0-78142047801771%3E'
				},
				stories: {
					$ref: '#/definitions/RecursivePartial%3Cdef-alias--1804-2100--0-7814127147939%5B%5D%3E'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<NotificationSetting>': {
			type: 'object',
			properties: {
				email: {
					type: 'boolean'
				},
				site: {
					type: 'boolean'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<def-alias--1612-1804--0-78142047801771>': {
			type: 'object',
			additionalProperties: {
				$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
			}
		},
		'RecursivePartial<def-alias--1804-2100--0-7814127147939[]>': {
			type: 'array',
			items: {
				$ref: '#/definitions/RecursivePartial%3CStoryNotificationSettings%3E'
			}
		},
		'RecursivePartial<StoryNotificationSettings>': {
			type: 'object',
			properties: {
				updates: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				news: {
					$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
				},
				comments: {
					$ref: '#/definitions/RecursivePartial%3C(undefined%7CNotificationSetting)%3E'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<(undefined|NotificationSetting)>': {
			type: 'object',
			properties: {
				email: {
					type: 'boolean'
				},
				site: {
					type: 'boolean'
				}
			},
			additionalProperties: false
		}
	}
});