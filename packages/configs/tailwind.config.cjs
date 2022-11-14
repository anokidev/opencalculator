/*

	./tailwind.config.cjs

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
                "solarlight-backbutton" : "#ded7c5",
                "solarlight-boxbutton"  : "#ccc7b6",
                "solarlight-menu"       : "#edc94e",
                "solardark-back"        : "#002b36",
                "solardark-box"         : "#586e75",
                "solardark-backbutton"  : "#586e75",
                "solardark-boxbutton"   : "#657b83",
                "solardark-menu"        : "#bedbe6",
                "solarwarn"             : "#b58900",
                "solarinfo"             : "#6c71c4",
                "solarerror"            : "#cb4b16",
                "averagedarkbox"        : "#06377c"
            },
        }
    },
    plugins: [],
}
