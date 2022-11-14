/*

    @openmath/ui/themes/data.ts

    This contains the color data for themes.
    Available themes:
    - Very light.
    - Average light.
    - Solarized light.
    - Solarized dark.
    - Average dark.
    - Very dark.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import { writable } from 'svelte/store';

// Data source.
const themes: any = {

    "veryLight" : {
        
        nonBoxBackgroundColor:            "bg-white",
        nonBoxTextColor:                  "text-black",
        nonBoxButtonTextColor:            "text-black",
        nonBoxButtonHoverBackgroundColor: "hover:bg-gray-300",
        nonBoxButtonHoverTextColor:       "hover:text-black",
    
        boxBackgroundColor:               "bg-gray-100",
        boxTextColor:                     "text-black",
        boxButtonTextColor:               "text-black",
        boxButtonHoverBackgroundColor:    "hover:bg-gray-200",
        boxButtonHoverTextColor:          "hover:text-black",

        menuHoverBackgroundColor:         "hover:bg-gray-400 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",

        border:                           "border-black",
        inputColor:                       "bg-gray-200"
    
    },
    
    "averageLight" : {
        
        nonBoxBackgroundColor:            "bg-gray-50",
        nonBoxTextColor:                  "text-black",
        nonBoxButtonTextColor:            "text-black",
        nonBoxButtonHoverBackgroundColor: "hover:bg-gray-300",
        nonBoxButtonHoverTextColor:       "hover:text-black",
    
        boxBackgroundColor:               "bg-gray-200",
        boxTextColor:                     "text-black",
        boxButtonTextColor:               "text-black",
        boxButtonHoverBackgroundColor:    "hover:bg-gray-300",
        boxButtonHoverTextColor:          "hover:text-black",

        menuHoverBackgroundColor:         "hover:bg-gray-400 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",

        border:                           "border-black",
        inputColor:                       "bg-gray-300",

        warn:                             "bg-solarwarn",
        info:                             "bg-solarinfo",
        error:                            "bg-solarerror"
    
    },
    
    "solarizedLight" : {
        
        nonBoxBackgroundColor:            "bg-solarlight-back",
        nonBoxTextColor:                  "text-black",
        nonBoxButtonTextColor:            "text-black",
        nonBoxButtonHoverBackgroundColor: "hover:bg-solarlight-backbutton",
        nonBoxButtonHoverTextColor:       "hover:text-black",
    
        boxBackgroundColor:               "bg-solarlight-box",
        boxTextColor:                     "text-black",
        boxButtonTextColor:               "text-black",
        boxButtonHoverBackgroundColor:    "hover:bg-solarlight-boxbutton",
        boxButtonHoverTextColor:          "hover:text-black",

        menuHoverBackgroundColor:         "hover:bg-solarlight-boxbutton hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",

        border:                           "border-black",
        inputColor:                       "bg-solarlight-menu",

        warn:                             "bg-solarwarn",
        info:                             "bg-solarinfo",
        error:                            "bg-solarerror"
    
    },
    
    "solarizedDark" : {
        
        nonBoxBackgroundColor:            "bg-solardark-back",
        nonBoxTextColor:                  "text-white",
        nonBoxButtonTextColor:            "text-white",
        nonBoxButtonHoverBackgroundColor: "hover:bg-solardark-backbutton",
        nonBoxButtonHoverTextColor:       "hover:text-white",
    
        boxBackgroundColor:               "bg-solardark-box",
        boxTextColor:                     "text-white",
        boxButtonTextColor:               "text-white",
        boxButtonHoverBackgroundColor:    "hover:bg-solardark-boxbutton",
        boxButtonHoverTextColor:          "hover:text-white",

        menuHoverBackgroundColor:         "hover:bg-solardark-boxbutton hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",


        border:                           "border-white",
        inputColor:                       "bg-solardark-menu",

        warn:                             "bg-solarwarn",
        info:                             "bg-solarinfo",
        error:                            "bg-solarerror"
    
    },
    
    "averageDark" : {
        
        nonBoxBackgroundColor:            "bg-gray-900",
        nonBoxTextColor:                  "text-white",
        nonBoxButtonTextColor:            "text-white",
        nonBoxButtonHoverBackgroundColor: "hover:bg-gray-800",
        nonBoxButtonHoverTextColor:       "hover:text-white",

        boxBackgroundColor:               "bg-gray-700",
        boxTextColor:                     "text-white",
        boxButtonTextColor:               "text-white",
        boxButtonHoverBackgroundColor:    "hover:bg-gray-600",
        boxButtonHoverTextColor:          "hover:text-white",

        menuHoverBackgroundColor:         "hover:bg-gray-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",

        border:                           "border-white",
        inputColor:                       "bg-gray-600",

        warn:                             "bg-solarwarn",
        info:                             "bg-solarinfo",
        error:                            "bg-solarerror"
    
    },
    
    "veryDark" : {
        
        nonBoxBackgroundColor:            "bg-black",
        nonBoxTextColor:                  "text-white",
        nonBoxButtonTextColor:            "text-white",
        nonBoxButtonHoverBackgroundColor: "hover:bg-gray-900",
        nonBoxButtonHoverTextColor:       "hover:text-white",
    
        boxBackgroundColor:               "bg-gray-800",
        boxTextColor:                     "text-white",
        boxButtonTextColor:               "text-white",
        boxButtonHoverBackgroundColor:    "hover:bg-gray-700",
        boxButtonHoverTextColor:          "hover:text-white",

        menuHoverBackgroundColor:         "hover:bg-gray-300 hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-25",

        border:                           "border-white",
        buttonBorder:                     "border-gray-800",

        warn:                             "bg-solarwarn",
        info:                             "bg-solarinfo",
        error:                            "bg-solarerror"
    
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