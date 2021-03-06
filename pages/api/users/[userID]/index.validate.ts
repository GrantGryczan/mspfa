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
							$ref: '#/definitions/RecursivePartial%3Calias-731470504-70254-70395-731470504-0-212312%3Cdef-alias--788-1085--0-47761776781619%2Calias--719-955--0-3054308207794%3E%3E'
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
		'RecursivePartial<alias-731470504-70254-70395-731470504-0-212312<def-alias--788-1085--0-47761776781619,alias--719-955--0-3054308207794>>': {
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
					$ref: '#/definitions/RecursivePartial%3Cstructure--3105-4141--3094-4142--2128-4724--2100-4725--0-7998%3E'
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
		'RecursivePartial<structure--3105-4141--3094-4142--2128-4724--2100-4725--0-7998>': {
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
					$ref: '#/definitions/RecursivePartial%3Cstructure--3189-3240--3182-3241--3105-4141--3094-4142--2128-4724--2100-4725--0-7998%3E'
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
					$ref: '#/definitions/RecursivePartial%3Cstructure--3709-3778--3697-3779--3105-4141--3094-4142--2128-4724--2100-4725--0-7998%3E'
				},
				notifications: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3796-4138--3779-4138--3105-4141--3094-4142--2128-4724--2100-4725--0-7998%3E'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<structure--3189-3240--3182-3241--3105-4141--3094-4142--2128-4724--2100-4725--0-7998>': {
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
		'RecursivePartial<structure--3709-3778--3697-3779--3105-4141--3094-4142--2128-4724--2100-4725--0-7998>': {
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
		'RecursivePartial<structure--3796-4138--3779-4138--3105-4141--3094-4142--2128-4724--2100-4725--0-7998>': {
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
					$ref: '#/definitions/RecursivePartial%3Cdef-alias--1612-1804--0-79982047801771%3E'
				},
				stories: {
					type: 'array',
					items: {
						$ref: '#/definitions/StoryNotificationSettings'
					}
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
		'RecursivePartial<def-alias--1612-1804--0-79982047801771>': {
			type: 'object',
			additionalProperties: {
				$ref: '#/definitions/RecursivePartial%3CNotificationSetting%3E'
			}
		},
		'StoryNotificationSettings': {
			anyOf: [
				{
					type: 'boolean',
					const: true
				},
				{
					$ref: '#/definitions/StoryReaderNotificationSettings'
				},
				{
					$ref: '#/definitions/StoryEditorNotificationSettings'
				}
			],
			description: '`true` if the setting should inherit the user\'s default story notification settings.\n\n`StoryReaderNotificationSettings | StoryEditorNotificationSettings` otherwise.'
		},
		'StoryReaderNotificationSettings': {
			type: 'object',
			additionalProperties: false,
			properties: {
				comments: {
					not: {}
				},
				updates: {
					$ref: '#/definitions/NotificationSetting'
				},
				news: {
					$ref: '#/definitions/NotificationSetting'
				}
			},
			required: [
				'news',
				'updates'
			]
		},
		'NotificationSetting': {
			type: 'object',
			properties: {
				email: {
					type: 'boolean'
				},
				site: {
					type: 'boolean'
				}
			},
			required: [
				'email',
				'site'
			],
			additionalProperties: false
		},
		'StoryEditorNotificationSettings': {
			type: 'object',
			additionalProperties: {
				$ref: '#/definitions/NotificationSetting'
			}
		}
	}
});