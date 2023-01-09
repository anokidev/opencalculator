<!--

  @opencalc/ui/header/dropdowns/HeaderThemes.svelte

  This is the dropdown content for configuring themes.
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
  import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons/index';
  // Theme script.
  import { themeStore, themeIndex, themeName, themes, setThemeOnMount } from "../../themes/themer.js";

  //////// THEMES ////////

  // Theme data.
  $: boxBackground = "";
  $: button        = "";
  $: border        = "";

  // Subscribe.
  onMount(async () => {
    themeStore.subscribe((value: any) => {
      boxBackground = value['boxBackground'];
      button        = value['button'];
      border        = value['border'];
    });
  });

  //////// CHANGE THEMES ////////

  // Change themes.
  function changeTheme(option: string, index: number): void {
    themeStore.set(themes[option]);
    themeIndex.set(index);
    themeName.set(option);
  };

  // Change themes with keyboard.
  function changeThemeWithKeyboard(event: any, option: string, index: number): void {
    if (event.key == "Enter") {
      changeTheme(option, index);
    };
  };

  //////// DEFAULT CHECKPOINT ////////

  // Default values:
  // 1 = Average light.
  // 4 = Average dark.
  let group: number = 1;

  // Subscribe to the index theme of the checkpoint.
  themeIndex.subscribe((value: any) => {
      group = value;
  });

  // Set themes.
  function setTheme() {

    // Dark mode.
    let darkMode: boolean = false;

    // Check prefers-color-scheme.
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

    // Set theme.
	  setThemeOnMount(darkMode);

	};

  // Set themes with keyboard.
  function setThemeWithKeyboard(event: any) {
    if (event.key == "Enter") {
      setTheme();
    };
  };

</script>

<div class="bg:w-2/5 md:w-2/5 w-full h-full m-2 flex flex-col overflow-hidden {boxBackground} rounded-2xl shadow-lg border-2 {border}">
  <!-- Title -->
  <div class="w-full m-2 flex flex-col">
    <h1 class="text-xl font-bold">Themes</h1>
    <h4 class="text-sm">Try over 6 different themes!</h4>
  </div>
  <!-- Options -->
  <div class="bg:flex md:flex grid flex-col grid-rows-1 grid-cols-2 border-t {border}">
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
    <div class="h-full m-2 p-1 flex lg:flex-row flex-col justify-center lg:border-t lg:border-l-0 md:border-t md:border-l-0 border-l border-t-0 {border}">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        class="m-1 px-3 py-2 flex flex-row rounded-xl justify-center  {button} cursor-pointer" 
        on:keypress={(event) => {changeThemeWithKeyboard(event, "averageLight", 1)}} 
        on:click={() => {changeTheme("averageLight", 1)}}
        tabindex="0"
        title="Default Light"
      >
        <Fa class="mt-1 mr-1 sm:block hidden" icon={faSun} size="md"/>
        <p class="text-md">Default Light</p>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div 
        class="m-1 px-3 py-2 flex flex-row rounded-xl justify-center  {button} cursor-pointer" 
        on:keypress={(event) => {changeThemeWithKeyboard(event, "averageDark", 4)}} 
        on:click={() => {changeTheme("averageDark", 4)}}
        tabindex="0"
        title="Default Dark"
      >
        <Fa class="mt-1 mr-1 sm:block hidden" icon={faMoon} size="md"/>
        <p class="text-md">Default Dark</p>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div 
        class="m-1 px-3 py-2 flex flex-row rounded-xl justify-center {button} cursor-pointer" 
        on:keypress={(event) => {setThemeWithKeyboard(event)}} 
        on:click={() => {setTheme()}}
        tabindex="0"
        title="System Default"
      >
        <Fa class="mt-1 mr-1 sm:block hidden" icon={faSun} size="md"/>
        <Fa class="mt-1 mr-1 sm:block hidden" icon={faMoon} size="md"/>
        <p class="text-md">System Default</p>
      </div>
    </div>
  </div>
</div>

