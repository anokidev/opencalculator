/*

	@openmath/frontend/vite.config.js

	This is used as the main 
	configuration file for Tailwind.

  Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()]
};

export default config;

