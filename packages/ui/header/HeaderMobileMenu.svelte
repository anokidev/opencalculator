<!--

    @openmath/ui/header/HeaderMobileMenu.svelte

    This is the dropdown content for mobile menu.
    All a has href="" so that it is keyboard-focusable.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    import { onMount } from 'svelte';

    // FontAwesome time, for icons of course.
    import Fa from 'svelte-fa';
    import { faHouse, faCalculator, faNewspaper, faQuestionCircle, faGlobe, faEye, faCode, faUser } from '@fortawesome/free-solid-svg-icons/index';

    // Dropdown contents.
    import HeaderThemes from "./dropdowns/HeaderThemes.svelte";
    import HeaderLang from "./dropdowns/HeaderLang.svelte";
    import HeaderAccount from "./dropdowns/HeaderAccount.svelte";
    import HeaderCode from "./dropdowns/HeaderCode.svelte"

    // Dropdown script.
    import { setMobileDropdownContent } from "./dropdowns/states.js";
    // Theme script.
    import { themeStore } from "../themes/themer.js";

    //////// DROPDOWNS ////////

    // Dropdown content.
    $: dropdownContent = "";

    // Get the dropdown.
    setMobileDropdownContent.subscribe(value => {
        dropdownContent = value;
    });

    const showDropdown = (content: string) => {

        if (content == dropdownContent) {
            setMobileDropdownContent.set("");
        } else {
            setMobileDropdownContent.set(content)
        };

    };

    const showDropdownWithKeyboard = (event: any, content: string) => {

        if (event.key == "Enter") {
            if (content == dropdownContent) {
                setMobileDropdownContent.set("");
            } else {
                setMobileDropdownContent.set(content);
            };
        };

    };

     //////// THEMES ////////

    // Theme data.
    $: boxBackgroundColor               = "";
    $: boxTextColor                     = "";
    $: boxButtonTextColor               = "";
    $: boxButtonHoverTextColor          = "";

    $: menu                             = "";

    // Subscribe.
    onMount(async () => {
        themeStore.subscribe((value: any) => {
            boxBackgroundColor               = value['boxBackgroundColor'];
            boxTextColor                     = value['boxTextColor'];
            boxButtonTextColor               = value['boxButtonTextColor'];
            boxButtonHoverTextColor          = value['boxButtonHoverTextColor'];
            menu                             = value['menuHoverBackgroundColor'];
        });
    });

</script>

<style lang="scss">

    .toolbar-text {
        display: flex;
    }

    @media (max-width: 280px) {
        .toolbar-text {
            display: none;
        };
    };

</style>

<div class="w-full flex flex-col">
    <!-- Mobile Menu -->
    <div class="w-full flex flex-col {boxBackgroundColor} {boxTextColor} backdrop-filter backdrop-blur-lg bg-opacity-25 border-black border-t border-b">
        <a href="/home" class="m-0 p-2 flex flex-row justify-center align-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" title="Home">
            <Fa class="mt-1 mr-1" icon={faHouse} size="md"/>
            <p>Home</p>
        </a>
        <a href="/calculators" class="m-0 p-3 flex flex-row justify-center align-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" title="Calculators">
            <Fa class="mt-1 mr-1" icon={faCalculator} size="md"/>
            <p>Calculators</p>
        </a>
        <a href="/calculators" class="m-0 p-3 flex flex-row justify-center align-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" title="Calculators">
            <Fa class="mt-1 mr-1" icon={faNewspaper} size="md"/>
            <p>Blog</p>
        </a>
        <a href="/help" class="m-0 p-3 flex flex-row justify-center align-center {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" title="Help">
            <Fa class="mt-1 mr-1" icon={faQuestionCircle} size="md"/>
            <p>Help</p>
        </a>
        <!-- Toolbar (Themes, language, etc) -->
        <div class="m-0 p-2 grid grid-rows-1 grid-cols-4 items-center">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div 
                on:keypress={(event) => showDropdownWithKeyboard(event, 'themes')} 
                on:click={() => showDropdown('themes')}
                class="h-full p-2 flex flex-row justify-center align-center rounded-full {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" title="Themes"
                href=""
            >
                <Fa class="sm:block hidden mt-1 mr-1" icon={faEye} size="md"/>
                <p class="toolbar-text">Themes</p>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div
                on:keypress={(event) => showDropdownWithKeyboard(event, 'lang')} 
                on:click={() => showDropdown('lang')} 
                class="h-full p-2 flex flex-row justify-center align-center rounded-full {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                title="Language"
                href=""
            >
                <Fa class="sm:block hidden mt-1 mr-1" icon={faGlobe} size="md"/>
                <p class="toolbar-text">Language</p>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div 
                on:keypress={(event) => showDropdownWithKeyboard(event, 'code')} 
                on:click={() => showDropdown('code')}
                class="h-full p-2 flex flex-row justify-center align-center rounded-full {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                title="Code"
                href=""
            >
                <Fa class="sm:block hidden mt-1 mr-1" icon={faCode} size="md"/>
                <p class="toolbar-text">Code</p>
            </div>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <div 
                on:keypress={(event) => showDropdownWithKeyboard(event, 'account')} 
                on:click={() => showDropdown('account')} 
                class="h-full p-2 flex flex-row justify-center align-center rounded-full {menu} {boxButtonTextColor} {boxButtonHoverTextColor} cursor-pointer" 
                title="Account"
                href=""
            >
                <Fa class="sm:block hidden mt-1 mr-1" icon={faUser} size="md"/>
                <p class="toolbar-text">Account</p>
            </div>
        </div>
    </div>
    <div class="flex justify-end">
        <!-- Dropdown -->
        {#if dropdownContent == "themes"}
            <HeaderThemes />
        {:else if dropdownContent == "lang"}
            <HeaderLang />
        {:else if dropdownContent == "account"}
            <HeaderAccount />
        {:else if dropdownContent == "code"}
            <HeaderCode />
        {:else if dropdownContent == ""}
            <div></div>
        {/if}
    </div>
</div>
