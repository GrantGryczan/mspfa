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
								storyID: {
									type: 'string'
								}
							},
							required: [
								'storyID'
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
						body: {
							$ref: '#/definitions/RecursivePartial%3C(alias-731470504-70254-70395-731470504-0-212312%3Cdef-alias--998-1322--0-26561904767254%2Calias--795-1150--0-53581840202528%3E%26structure--1323-1470--1285-1470--1267-1471--1259-1471--1240-1474--1216-1474--1214-1476--1178-1476--1166-1570--1157-5332--1150-5332--1150-5333--0-5358)%3E'
						},
						query: {
							type: 'object',
							properties: {
								storyID: {
									type: 'string'
								}
							},
							required: [
								'storyID'
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
		'RecursivePartial<(alias-731470504-70254-70395-731470504-0-212312<def-alias--998-1322--0-26561904767254,alias--795-1150--0-53581840202528>&structure--1323-1470--1285-1470--1267-1471--1259-1471--1240-1474--1216-1474--1214-1476--1178-1476--1166-1570--1157-5332--1150-5332--1150-5333--0-5358)>': {
			type: 'object',
			properties: {
				title: {
					type: 'string',
					minLength: 1,
					maxLength: 50
				},
				status: {
					$ref: '#/definitions/StoryStatus'
				},
				privacy: {
					$ref: '#/definitions/StoryPrivacy'
				},
				owner: {
					type: 'string'
				},
				editors: {
					type: 'array',
					items: {
						type: 'string'
					}
				},
				author: {
					$ref: '#/definitions/RecursivePartial%3C(structure--2558-2602--2548-2603--1599-3280--1570-3281--0-8262%7Cundefined)%3E'
				},
				description: {
					type: 'string',
					maxLength: 2000
				},
				blurb: {
					type: 'string',
					maxLength: 500
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
				banner: {
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
				style: {
					type: 'string'
				},
				disableUserTheme: {
					type: 'boolean',
					description: 'Whether the story should ignore the reader\'s theme setting.'
				},
				tags: {
					type: 'array',
					items: {
						$ref: '#/definitions/TagString'
					},
					uniqueItems: true,
					maxItems: 50
				},
				commentsEnabled: {
					type: 'boolean'
				},
				editorSettings: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3134-3237--3044-3238--1599-3280--1570-3281--0-8262281038569%3E'
				},
				colors: {
					type: 'array',
					items: {
						$ref: '#/definitions/StoryColor'
					}
				},
				quirks: {
					type: 'array',
					items: {
						$ref: '#/definitions/Quirk'
					}
				},
				willDelete: {
					type: 'boolean'
				},
				anniversary: {
					$ref: '#/definitions/RecursivePartial%3Cindexed-type-731470504-70368-70394-731470504-70254-70395-731470504-0-212312%3Cstructure--1910-2253--1772-2254--1599-3280--1570-3281--0-8262%2Calias-731470504-70528-70643-731470504-0-212312%3C(%22year%22%7C%22month%22%7C%22day%22%7C%22changed%22)%2C%22changed%22%3E%3E%3E'
				},
				script: {
					$ref: '#/definitions/RecursivePartial%3Cindexed-type-731470504-70368-70394-731470504-70254-70395-731470504-0-212312%3Cstructure--2901-2947--2892-2948--1599-3280--1570-3281--0-8262%2C%22unverified%22%3E%3E'
				}
			},
			additionalProperties: false
		},
		'StoryStatus': {
			type: 'number',
			enum: [
				0,
				1,
				2,
				3
			]
		},
		'StoryPrivacy': {
			type: 'number',
			enum: [
				0,
				1,
				2
			]
		},
		'RecursivePartial<(structure--2558-2602--2548-2603--1599-3280--1570-3281--0-8262|undefined)>': {
			type: 'object',
			properties: {
				name: {
					type: 'string'
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
				}
			},
			additionalProperties: false
		},
		'URLString': {
			type: 'string',
			pattern: '^https?://'
		},
		'TagString': {
			type: 'string',
			minLength: 1,
			maxLength: 50,
			pattern: '^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$'
		},
		'RecursivePartial<structure--3134-3237--3044-3238--1599-3280--1570-3281--0-8262281038569>': {
			type: 'object',
			properties: {
				defaultPageTitle: {
					type: 'string',
					maxLength: 500
				},
				defaultSpoiler: {
					$ref: '#/definitions/RecursivePartial%3Cstructure--3194-3234--3176-3234--3134-3237--3044-3238--1599-3280--1570-3281--0-8262%3E'
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<structure--3194-3234--3176-3234--3134-3237--3044-3238--1599-3280--1570-3281--0-8262>': {
			type: 'object',
			properties: {
				open: {
					type: 'string'
				},
				close: {
					type: 'string'
				}
			},
			additionalProperties: false
		},
		'StoryColor': {
			type: 'object',
			properties: {
				value: {
					type: 'string'
				},
				name: {
					type: 'string'
				}
			},
			required: [
				'value',
				'name'
			],
			additionalProperties: false
		},
		'Quirk': {
			type: 'object',
			properties: {
				name: {
					type: 'string'
				},
				replacements: {
					type: 'array',
					items: {
						$ref: '#/definitions/QuirkReplacement'
					}
				}
			},
			required: [
				'name',
				'replacements'
			],
			additionalProperties: false
		},
		'QuirkReplacement': {
			type: 'object',
			properties: {
				from: {
					type: 'string'
				},
				fromFlags: {
					type: 'string'
				},
				to: {
					type: 'string'
				}
			},
			required: [
				'from',
				'fromFlags',
				'to'
			],
			additionalProperties: false
		},
		'RecursivePartial<indexed-type-731470504-70368-70394-731470504-70254-70395-731470504-0-212312<structure--1910-2253--1772-2254--1599-3280--1570-3281--0-8262,alias-731470504-70528-70643-731470504-0-212312<("year"|"month"|"day"|"changed"),"changed">>>': {
			type: 'object',
			properties: {
				year: {
					type: 'number'
				},
				month: {
					type: 'number',
					minimum: 0,
					maximum: 11
				},
				day: {
					type: 'number',
					description: 'The anniversary\'s day of the month.',
					minimum: 1
				}
			},
			additionalProperties: false
		},
		'RecursivePartial<indexed-type-731470504-70368-70394-731470504-70254-70395-731470504-0-212312<structure--2901-2947--2892-2948--1599-3280--1570-3281--0-8262,"unverified">>': {
			type: 'object',
			properties: {
				unverified: {
					type: 'string'
				}
			},
			additionalProperties: false
		}
	}
});