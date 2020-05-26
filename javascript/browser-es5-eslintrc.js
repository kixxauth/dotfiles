module.exports = {
	env: {
		browser: true,
		commonjs: false,
		es6: false,
	},
	extends: 'eslint:recommended',
	globals: {
		'Atomics': 'readonly',
		'SharedAlrayBuffer': 'readonly'
	},
	parserOptions: {
		ecmaVersion: 5,
	},
	rules: {
		'arrow-parens': [
			'off',
		],
		'arrow-spacing': [
			'off',
		],
		'no-console': [
			'error',
		],
		'no-var': [
			'off',
		],
		'prefer-const': [
			'off',
		],
		'prefer-destructuring': [
			'off',
		],
	},
};