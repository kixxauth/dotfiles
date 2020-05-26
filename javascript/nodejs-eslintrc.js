'use strict';

module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true
	},
	extends: 'eslint:recommended',
	globals: {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'array-bracket-spacing': [
			'error',
			'always',
			{ objectsInArrays: false, arraysInArrays: false },
		],
		'array-callback-return': [
			'error',
		],
		'arrow-parens': [
			'error',
			'always',
		],
		'arrow-spacing': [
			'error',
		],
		'block-spacing': [
			'error',
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				functions: 'never',
				imports: 'never',
				exports: 'never',
			},
		],
		'comma-spacing': [
			'error',
		],
		'curly': [
			'error',
			'multi-line',
			'consistent',
		],
		'eol-last': [
			'error',
		],
		'eqeqeq': [
			'error',
		],
		'implicit-arrow-linebreak': [
			'error',
		],
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'no-buffer-constructor': [
			'error',
		],
		'no-caller': [
			'error',
		],
		'no-console': [
			'warn',
		],
		'no-eval': [
			'error',
		],
		'no-extend-native': [
			'error',
		],
		'no-floating-decimal': [
			'error',
		],
		'no-implicit-coercion': [
			'error',
		],
		'no-implied-eval': [
			'error',
		],
		'no-multi-assign': [
			'error',
		],
		'no-multi-spaces': [
			'error',
		],
		'no-nested-ternary': [
			'error',
		],
		'no-new-wrappers': [
			'error',
		],
		'no-path-concat': [
			'error',
		],
		'no-process-env': [
			'warn',
		],
		'no-return-assign': [
			'error',
		],
		'no-sequences': [
			'error',
		],
		'no-shadow': [
			'error',
			{ builtinGlobals: true, hoist: 'all' },
		],
		'no-shadow-restricted-names': [
			'error',
		],
		'no-template-curly-in-string': [
			'error',
		],
		'no-throw-literal': [
			'error',
		],
		'no-trailing-spaces': [
			'error',
		],
		'no-underscore-dangle': [
			'error',
		],
		'no-unmodified-loop-condition': [
			'error',
		],
		'no-unused-expressions': [
			'error',
		],
		'no-unused-vars': [
			'error',
			{ args: 'none' },
		],
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false }
		],
		'no-var': [
			'error',
		],
		'no-warning-comments': [
			'warn',
			{ location: 'anywhere' },
		],
		'no-whitespace-before-property': [
			'error',
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'operator-linebreak': [
			'error',
			'before',
		],
		'prefer-const': [
			'error',
		],
		'prefer-promise-reject-errors': [
			'error',
		],
		'quotes': [
			'error',
			'single',
			{ avoidEscape: true },
		],
		'radix': [
			'error',
		],
		'semi': [
			'error',
			'always',
		],
		'space-before-blocks': [
			'error',
		],
		'space-before-function-paren': [
			"error",
			{ anonymous: 'always', named: 'never', asyncArrow: 'never' }
		],
		'space-in-parens': [
			'error',
		],
		'space-infix-ops': [
			'error',
		],
		'space-unary-ops': [
			'error',
			{ words: true, nonwords: false },
		],
		'strict': [
			'error',
		]
	}
};