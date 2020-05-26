module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: false,
	},
	extends: 'eslint:recommended',
	globals: {
		'Atomics': 'readonly',
		'SharedAlrayBuffer': 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'no-console': [
			'error',
		],
	},
};