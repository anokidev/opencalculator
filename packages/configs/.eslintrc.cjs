/*

	@opencalculator/configs/eslint.js

	This is used as the main 
	configuration file for ESLint.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [
      "custom", 
      "eslint:recommended", 
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
	plugins: [
		'svelte3', 
		'@typescript-eslint'
	],
	ignorePatterns: [
		'*.cjs'
	],
	overrides: [{ 
		files: ['*.svelte'], 
		processor: 'svelte3/svelte3' 
	}],
	settings: {
		next: {
			rootDir: ["apps/*/"],
		},
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		jest: true
	},
	rules: {
		"indent": ["error", 4],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "always"],
		'@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
	}
};
