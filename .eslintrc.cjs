/*

	/eslint.js

	This is used as the main 
	configuration file for ESLint.

	Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: [
        "custom", 
        "eslint:recommended", 
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    settings: {
        next: {
            rootDir: ["apps/*/"],
        },
    },
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
		'svelte3/typescript': () => req$uire('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"indent": ["error", 4],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
	}
};
