<!--

  @opencalc/ui/header/Header.svelte

  This is the main header component.
  Which contains:
  - Mobile menu.
  - Navbar.
  - Dark Mode toggle.
  - Etc.

  All a has href="" so that it is keyboard-focusable.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

-->

<script lang="ts">

  //////// IMPORTS ////////

  // onMount.
  import { onMount } from 'svelte';

  // FontAwesome time, for icons of course.
  import Fa from 'svelte-fa';
  import { faHouse, faCalculator, faQuestionCircle, faGlobe, faEye, faCode, faBars, faNewspaper } from '@fortawesome/free-solid-svg-icons/index';

  // Dropdown contents.
  import HeaderThemes from "./dropdowns/HeaderThemes.svelte";
  import HeaderLang from "./dropdowns/HeaderLang.svelte";
  import HeaderAccount from "./dropdowns/HeaderAccount.svelte";
  import HeaderCode from "./dropdowns/HeaderCode.svelte";

  // Mobile menu.
  import HeaderMobileMenu from "./HeaderMobileMenu.svelte";
  // Dropdown script.
  import { setDropdownContent } from "./dropdowns/states.js";
  // Theme script.
  import { themeStore } from "../themes/themer.js";

  //////// DROPDOWNS ////////

  // Dropdown content.
  $: dropdownContent = "";

  // Get the dropdown.
  setDropdownContent.subscribe(value => {
    dropdownContent = value;
  });

  // Show dropdown. If the wanted content is the same as the 
  // current dropdown content, close the dropdown menu.
  const showDropdown = (content: string) => {
    if (content == dropdownContent) {
      setDropdownContent.set("");
    } else {
      setDropdownContent.set(content);
    };
  };

  // Same thing, but with a keyboard.
  const showDropdownWithKeyboard = (event: any, content: string) => {
    if (event.key == "Enter") {
      if (content == dropdownContent) {
        setDropdownContent.set("");
      } else {
        setDropdownContent.set(content);
      };
    };
  };

  //////// THEMES ////////

  // Theme data.
  $: boxBackground = "";
  $: button        = "";
  $: border        = "";
  $: menu          = "";

  // Subscribe.
  onMount(async () => {
    themeStore.subscribe((value: any) => {
      boxBackground = value['boxBackground'];
      button        = value['button'];
      border        = value['border'];
      menu          = value['menu'];
    });
  });

</script>

<div class="z-50 fixed top-0 h-auto w-full flex flex-col">
  <!-- Navbar -->
  <div class="top-0 h-12 w-full grid grid-cols-2 grid-rows-1 lg:grid-cols-3 {boxBackground} {border} border-b-2">
    <!-- Navbar Logo -->
    <div class="pl-10 flex justify-start items-center cursor-pointer" title="OpenCalc">
      <a class="h-full items-center p-3 font-mono text-xl font-semibold {menu} cursor-pointer" href="/">OpenCalc</a>
    </div>
    <!-- Menus -->
    <div class="hidden lg:flex justify-center items-center">
      <a class="h-full m-0 p-3 flex flex-row justify-center align-center {menu} cursor-pointer" title="Home" href="/home">
        <Fa class="mt-1 mr-1" icon={faHouse} size="md"/>
        <p class="m-0">Home</p>
      </a>
      <a class="h-full m-0 p-3 flex flex-row justify-center align-center {menu} cursor-pointer" title="Calculators" href="/calculators">
        <Fa class="mt-1 mr-1" icon={faCalculator} size="md"/>
        <p class="m-0">Calculators</p>
      </a>
      <a class="h-full m-0 p-3 flex flex-row justify-center align-center {menu} cursor-pointer" title="Help" href="/help">
        <Fa class="mt-1 mr-1" icon={faQuestionCircle} size="md"/>
        <p class="m-0">Help</p>
      </a>
    </div>
    <!-- Theme button, language button -->
    <div class="pt-1 pb-1 pr-10 flex justify-end items-center">
      <!-- Theme -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        on:keypress={(event) => showDropdownWithKeyboard(event, 'themes')} 
        on:click={() => showDropdown('themes')}
        class="hidden lg:flex h-full items-center rounded-full {menu} cursor-pointer"
        title="Themes"
        tabindex="0"
      >
        <Fa class="ml-2 mr-2" icon={faEye} size="lg"/>
      </div>
      <!-- Language (DISABLED) -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!--
        <div 
          on:keypress={(event) => showDropdownWithKeyboard(event, 'lang')} 
          on:click={() => showDropdown('lang')}
          class="hidden lg:flex h-full items-center rounded-full {menu} cursor-pointer"
          title="Language"
          tabindex="0"
        >
          <Fa class="ml-2 mr-2" icon={faGlobe} size="lg"/>
        </div>
      -->
      <!-- Source Code -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        on:keypress={(event) => showDropdownWithKeyboard(event, 'code')} 
        on:click={() => showDropdown('code')}
        class="hidden lg:flex h-full items-center rounded-full {menu} cursor-pointer"
        title="Code"
        tabindex="0"
      >
        <Fa class="ml-2 mr-2" icon={faCode} size="lg"/>
      </div>
      <!-- Account Picture -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div 
        on:keypress={(event) => showDropdownWithKeyboard(event, 'account')} 
        on:click={() => showDropdown('account')}
        class="hidden lg:flex h-full items-center overflow-hidden rounded-full {menu} cursor-pointer"
        title="Account"
        tabindex="0"
      >
        <img class="ml-2 mr-2" alt="a">
      </div>
      <!-- Hamburger Menu (Hidden on Desktop) -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div 
        on:keypress={(event) => showDropdownWithKeyboard(event, 'menu')} 
        on:click={() => showDropdown('menu')}
        class="flex lg:hidden h-9 w-9 items-center rounded-full {menu} cursor-pointer"
        title="Menu"
        tabindex="0"
      >
        <Fa class="ml-2 mr-2" icon={faBars} size="lg"/>
      </div>
    </div>
  </div>
  <!-- Dropdown -->
  <div class="hidden lg:flex justify-end">
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
  <div class="flex lg:hidden justify-end">
    {#if dropdownContent == "menu"}
      <HeaderMobileMenu />
    {:else if dropdownContent == ""}
      <div></div>
    {/if}
  </div>
</div>