/*

	@openmath/configs/tailwind.config.cjs

	This is used as the main 
	configuration file for Tailwind.

  Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '../../sites/frontend/src/**/*.{html,js,svelte,ts}',
    '../../packages/ui/**/*.{html,js,svelte,ts}'
  ],
  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Solarized color scheme.
        "solarlight-back"       : "#fdf6e3",
        "solarlight-box"        : "#eee8d5",
        "solarlight-input"       : "#edc94e",
        "solarlight-menu"       : "#ebdfb9",
        "solardark-back"        : "#002b36",
        "solardark-box"         : "#586e75",
        "solardark-input"        : "#bedbe6",
        "solardark-menu"       : "#6a868f",
        "solarwarn"             : "#b58900",
        "solarinfo"             : "#6c71c4",
        "solarerror"            : "#cb4b16"
      },
    }
  },

  plugins: [],
}
