 let consoleAndDebugger = 'off';

if (process.env.NODE_ENV === 'production') {
	consoleAndDebugger = 'error';
}

module.exports = {
	root: true,

	env: {
		node: true,
	},

	rules: {
		'no-tabs': 0,
		'no-param-reassign': 0,
		'no-shadow': [
			2,
			{
				allow: ['state'],
			},
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'prefer-destructuring': [
			'error',
			{ object: true, array: false },
		],
		'no-cycle': 0,
		'arrow-parens': [
			0,
			'as-needed',
		],
		'no-console': consoleAndDebugger,
		'no-debugger': consoleAndDebugger,
	},

	overrides: [{
		files: [
			'layouts/**/*.vue',
			'components/**/*.vue',
			'pages/**/*.vue',
			'src/**/*.vue',
			'centiva-design-system/src/**/*.vue',
		],
		rules: {
			'eol-last': 0,
			'no-trailing-spaces': 1,
			'object-shorthand': 0,
			'vue/no-v-html': 0,
			'vue/html-indent': ['error', 'tab', {
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			}],
		},
	}],

	parserOptions: {
		parser: 'babel-eslint',
	},

	extends: [
		'@vue/airbnb',
		'plugin:vue/recommended',
	],
};

