<!--

  @openmath/ui/home/Features.svelte

  This is for homepage Features section.

  Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

  //////// IMPORTS ////////

  import { onMount } from 'svelte';
  import { themeName, themeStore } from "../themes/themer.js";

  //////// THEMES ////////

  $: theme  = "averageLight";
  $: button = "";
  $: box    = "";
  $: border = "";
  $: text   = "";

  onMount(async () => {
      themeName.subscribe((value: any) => {
          theme = value;
      });
      themeStore.subscribe((value: any) => {
          button = value['button'];
          box    = value['boxBackground'];
          border = value['border'];
          text   = value['text'];
      });
  });

</script>

<div class="px-10 w-full p-4 flex flex-col justify-center">
  <!-- Title -->
  <h1 class="m-5 font-bold text-4xl text-center {text}">Features</h1>
  <!-- Easy to Use -->
  <div class="px-10 py-2 my-2 lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col-reverse rounded-lg border-2 {border} {box}">
    <!-- Image -->
    <div>
      <img alt="preview" src=""/>
    </div>
    <!-- Description -->
    <div class=" p-2 flex flex-col">
      <h1 class="lg:text-left text-center ml-5 font-bold sm:text-3xl text-sm">Easy to Use</h1>
      <p class="text-justify mt-2 ml-5 mr-5 sm:text-md text-sm">
        OpenMath's UI is practically straightforward, user-friendly, and disability-friendly. Not only that, this website provides guided and interactive tutorials that are available to use.
      </p>
    </div>
  </div>
  <!-- Packed with Tools -->
  <div class="px-10 py-2 my-2 lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col-reverse rounded-lg border-2 {border} {box}">
    <!-- Image -->
    <div>
      <img alt="preview" src=""/>
    </div>
    <!-- Description -->
    <div class="p-2 flex flex-col">
      <h1 class="lg:text-left text-center ml-5 font-bold sm:text-3xl text-sm">Packed with Tools</h1>
      <p class="text-justify mt-2 ml-5 sm:text-md text-sm">
          OpenMath is multipurposes. You can use OpenMath for teaching, calculator, etc. OpenMath has a lot of features to begin with, such as curve calculation, probabillity, etc.
      </p>
    </div>
  </div>
  <!-- Customizable -->
  <div class="px-10 py-2 my-2 lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col-reverse rounded-lg border-2 {border} {box}">
    <!-- Image -->
    <div>
      <img alt="preview" src=""/>
    </div>
    <!-- Description -->
    <div class="p-2 flex flex-col">
      <h1 class="lg:text-left text-center ml-5 font-bold sm:text-3xl text-sm">Customizable</h1>
      <p class="text-justify ml-5 mt-2 sm:text-md text-sm">
        OpenMath is designed with one thing in mind, flexibility and customizability. You can customize everything, from appearance (Themes, line colors) to practicality (Quick actions, custom toolbars). Essentially, no more strict usages, but flexible usages.
      </p>
    </div>
  </div>
  <!-- Free and Open-Source -->
  <div class="px-10 py-2 my-2 lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col-reverse rounded-lg border-2 {border} {box}">
    <!-- Image -->
    <div>
      <img alt="preview" src=""/>
    </div>
    <!-- Description -->
    <div class="p-2 flex flex-col">
      <h1 class="lg:text-left text-center ml-5 font-bold sm:text-3xl text-sm">Free and Open-Source</h1>
      <p class="text-justify ml-5 mt-2 sm:text-md text-sm">
          OpenMath is free (Free in terms of money and free in terms of privacy), and open-source (The code is open to the public, available to view by everyone). OpenMath is licensed in MIT License, and the code is available in a <a class="underline" href="https://www.github.com/anokidev/openmath">github repository</a>.
      </p>
    </div>
  </div>
</div>