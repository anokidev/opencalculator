/*

	/playwright.config.ts

	This is used as the main 
	configuration file for Playwright.

	Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run b$uild && npm run preview',
		port: 4173
	}
};

export default config;
