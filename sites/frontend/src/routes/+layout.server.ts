/*

	@opencalculator/frontend/src/routes/+layout.server.ts

	This is used as to redirect to /home
  if you try to access the website from /.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { redirect } from '@sveltejs/kit';

// Redirect to /home.
export function load({url}: any) {
  if (url.pathname == "/") {
    throw redirect(307, '/home');
  };
};