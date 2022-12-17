<!--

  @openmath/ui/header/dropdowns/HeaderLang.svelte

  This is the dropdown content for configuring language.

  Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

  //////// IMPORTS ////////

  // onMount
  import { onMount } from 'svelte';

  // Theme script.
  import { themeStore } from "../../themes/themer.js";

  //////// DEFAULT CHECK POINT ////////
  
  let group: number = 0;

  //////// THEMES ////////

  // Theme data.
  $: boxBackground = "";
  $: border        = "";

  onMount(async () => {
      // Subscribe.
      themeStore.subscribe((value: any) => {
          boxBackground = value['boxBackground'];
          border        = value['border']
      });
  });

</script>

<div class="bg:w-2/5 md:w-2/5 w-full m-2 flex flex-col overflow-hidden {boxBackground} rounded-2xl shadow-lg  border-2 {border}">
  <!-- Title -->
  <div class="w-full m-2 flex flex-col">
    <h1 class="text-xl font-bold">Language</h1>
    <h4 class="text-sm">Over 2 languages are available.</h4>
  </div>
  <!-- Options -->
  <div class="flex flex-col border-t {border}">
    <div class="h-full m-1 p-1">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <input bind:group value={0} type="radio" id="english" name="language">
      <label for="english">English Language</label>
    </div>
    <div class="h-full m-1 p-1">
      <input bind:group  value={1} type="radio" id="indonesia" name="language">
      <label for="indonesia">Bahasa Indonesia</label>
    </div>
  </div>
</div>