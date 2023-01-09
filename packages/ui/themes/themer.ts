/*

  @opencalculator/ui/themes/data.ts
  
  This contains the color data for themes.
  Available themes:
  - Very light.
  - Average light.
  - Solarized light.
  - Solarized dark.
  - Average dark.
  - Very dark.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { writable } from 'svelte/store';

// Data source.
const themes: any = {
  "veryLight" : {
    nonBoxBackground: "bg-white text-black",
    boxBackground:    "bg-gray-100 text-black",
    border:           "border-black",
    button:           "bg-black text-white hover:bg-inherit border-2 border-black hover:text-black",
    menu:             "text-black bg-inherit hover:bg-gray-300",
    text:             "text-black",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  },

  "averageLight" : {
    nonBoxBackground: "bg-gray-50 text-black",
    boxBackground:    "bg-gray-200 text-black",
    border:           "border-black",
    button:           "bg-black text-white hover:bg-inherit border-2 border-black hover:text-black",
    menu:             "text-black bg-inherit hover:bg-gray-300",
    text:             "text-black",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  },

  "solarizedLight" : {
    nonBoxBackground: "bg-solarlight-back text-black",
    boxBackground:    "bg-solarlight-box text-black",
    border:           "border-black",
    button:           "bg-black text-white hover:bg-inherit border-2 border-black hover:text-black",
    menu:             "text-black bg-inherit hover:bg-solarlight-menu",
    text:             "text-black",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  },

  "solarizedDark" : {
    nonBoxBackground: "bg-solardark-back text-white",
    boxBackground:    "bg-solardark-box text-white",
    border:           "border-white",
    button:           "bg-white text-black hover:bg-inherit border-2 border-white hover:text-white",
    menu:             "text-white bg-inherit hover:bg-solardark-menu",
    text:             "text-white",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  },

  "averageDark" : {
    nonBoxBackground: "bg-gray-800 text-white",
    boxBackground:    "bg-gray-700 text-white",
    border:           "border-white",
    button:           "bg-white text-black hover:bg-inherit border-2 border-white hover:text-white",
    menu:             "text-white bg-inherit hover:bg-gray-500",
    text:             "text-white",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  },

  "veryDark" : {
    nonBoxBackground: "bg-gray-900 text-white",
    boxBackground:    "bg-gray-900 text-white",
    border:           "border-white",
    button:           "bg-white text-black hover:bg-inherit border-2 border-white hover:text-white",
    menu:             "text-white bg-inherit hover:bg-gray-500",
    text:             "text-white",
    warn:             "bg-solarwarn",
    info:             "bg-solarinfo",
    error:            "bg-solarerror"
  }
};

// Store theme.
const themeStore = writable(themes["averageLight"]);

// Store theme index.
const themeIndex = writable(1);

// Store theme name.
const themeName = writable("averageLight");

// Set theme on load.
function setThemeOnMount(darkMode: boolean): void {
  if (darkMode == false) {
    themeStore.set(themes["averageLight"]);
    themeIndex.set(1);
    themeName.set("averageLight");
  } else {
    themeStore.set(themes["averageDark"]);
    themeIndex.set(4);
    themeName.set("averageDark");
  };
};

export { themeStore, themeIndex, themeName, themes, setThemeOnMount }