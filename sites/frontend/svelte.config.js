/*

	@opencalculator/frontend/svelte.config.js

	This is used as the main 
	configuration file for Svelte.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			// Alias for you.
			"$internals": resolve("./src/internals/"),
			"$apps": resolve("./src/apps/"),
			"$ui": resolve("./src/ui/")
		}
	}

};

export default config;