/*

	@opencalc/frontend/vite.config.js

	This is used as the main 
	configuration file for Vite.
	
	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()]
};

export default config;

