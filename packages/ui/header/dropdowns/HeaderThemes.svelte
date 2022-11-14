<!--

    @openmath/ui/header/dropdowns/HeaderThemes.svelte

    This is the dropdown content for configuring themes.
    All a has href="" so that it is keyboard-focusable.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    // onMount
    import { onMount } from 'svelte';

    // FontAwesome time, for icons of course.
    import Fa from 'svelte-fa';
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons/index';

    // Theme script.
    import { themeStore, themeIndex, themeName, themes, setThemeOnMount } from "../../themes/themer.js";

    //////// THEMES ////////

    // Theme data.
    $: boxBackgroundColor               = "";
    $: boxTextColor                     = "";
    $: boxButtonBackgroundColor         = "";
    $: boxButtonTextColor               = "";
    $: menu    = "";
    $: boxButtonHoverTextColor          = "";
    $: border                           = "";


    // Subscribe.
    onMount(async () => {
        themeStore.subscribe((value: any) => {
            boxBackgroundColor               = value['boxBackgroundColor'];
            boxTextColor                     = value['boxTextColor'];
            boxButtonBackgroundColor         = value['boxButtonBackgroundColor'];
            boxButtonTextColor               = value['boxButtonTextColor'];
            menu                             = value['menuHoverBackgroundColor'];
            boxButtonHoverTextColor          = value['boxButtonHoverTextColor'];
            border                           = value['border'];
        });
    });

    //////// CHANGE THEMES ////////

    function changeTheme(option: string, index: number): void {
        themeStore.set(themes[option])
        themeIndex.set(index);
        themeName.set(option);
    };

    function changeThemeWithKeyboard(event: any, option: string, index: number): void {
        if (event.key == "Enter") {
            changeTheme(option, index);
        };
    };

    console.log("AAA")

    //////// DEFAULT CHECK POINT ////////

    // Default values:
    // 1 = Average light.
    // 4 = Average dark.
    let group: number = 1;

    themeIndex.subscribe((value: any) => {
        group = value;
    });

    function setSystemTheme() {

		let darkMode: boolean = false;

    	if (window.matchMedia) {
    	    if (
    	        window.matchMedia('(prefers-color-scheme: dark)').matches || 
    	        window.matchMedia('(prefers-color-interface: dark)').matches
    	    ) {
    	        darkMode = true;
    	    } else {
    	        darkMode = false;
    	    };
    	};

		setThemeOnMount(darkMode);

	};

    function setSystemThemeWithKeyboard(event: any) {
        if (event.key == "Enter") {
            setSystemTheme();
        };
    };

</script>

<div class="bg:w-2/5 md:w-2/5 w-full h-full m-2 flex flex-col overflow-hidden {boxBackgroundColor} {boxTextColor} rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-lg">
    <!-- Title -->
    <div class="w-full m-2 flex flex-col">
        <h1 class="text-xl font-bold">Themes</h1>
        <h4 class="text-sm">Try over 6 different themes!</h4>
    </div>
    <!-- Options -->
    <div class="bg:flex md:flex grid flex-col grid-rows-1 grid-cols-2 border-t {border} {boxTextColor}">
        <div class="flex flex-col justify-center">
            <div class="h-full m-1 p-1">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <input bind:group value={0} type="radio" on:change={() => changeTheme("veryLight", 0)} name="themes" id="very-light">
                <label for="very-light">Very Light</label>
            </div>
            <div class="h-full m-1 p-1">
                <input bind:group value={1} type="radio" on:change={() => changeTheme("averageLight", 1)} name="themes" id="average-light">
                <label for="average-light">Average Light</label>
            </div>
            <div class="h-full m-1 p-1">
                <input bind:group value={2} type="radio" on:change={() => changeTheme("solarizedLight", 2)} name="themes" id="solarized-light">
                <label for="solarized-light">Solarized Light</label>
            </div>
            <div class="h-full m-1 p-1">
                <input bind:group value={3} type="radio" on:change={() => changeTheme("solarizedDark", 3)} name="themes" id="solarized-dark">
                <label for="solarized-dark">Solarized Dark</label>
            </div>
            <div class="h-full m-1 p-1">
                <input bind:group value={4} type="radio" on:change={() => changeTheme("averageDark", 4)} name="themes" id="average-dark">
                <label for="average-dark">Average Dark</label>
            </div>
            <div class="h-full m-1 p-1">
                <input bind:group value={5} type="radio" on:change={() => changeTheme("veryDark", 5)} name="themes" id="very-dark">
                <label for="very-dark">Very Dark</label>
            </div>
        </div>
        <div class="h-full m-2 p-1 flex flex-col justify-center bg:border-t bg:border-l-0 md:border-t md:border-l-0 border-l border-t-0 {border}">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div
                class="m-1 px-3 py-2 flex flex-row rounded-full justify-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                on:keypress={(event) => {changeThemeWithKeyboard(event, "averageLight", 1)}} 
                on:click={() => {changeTheme("averageLight", 1)}}
                href=""
                title="Default Light"
            >
                <Fa class="mt-1 mr-1 sm:block hidden" icon={faSun} size="md"/>
                <p class="text-md">Default Light</p>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div 
                class="m-1 px-3 py-2 flex flex-row rounded-full justify-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                on:keypress={(event) => {changeThemeWithKeyboard(event, "averageDark", 4)}} 
                on:click={() => {changeTheme("averageDark", 4)}}
                href=""
                title="Default Dark"
            >
                <Fa class="mt-1 mr-1 sm:block hidden" icon={faMoon} size="md"/>
                <p class="text-md">Default Dark</p>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div 
                class="m-1 px-3 py-2 flex flex-row rounded-full justify-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                on:keypress={(event) => {setSystemThemeWithKeyboard(event)}} 
                on:click={() => {setSystemTheme()}}
                href=""
                title="System Default"
            >
                <Fa class="mt-1 mr-1 sm:block hidden" icon={faSun} size="md"/>
                <Fa class="mt-1 mr-1 sm:block hidden" icon={faMoon} size="md"/>
                <p class="text-md">System Default</p>
            </div>
        </div>
    </div>
</div>

