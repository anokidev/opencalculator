<!--

  @opencalc/frontend/src/routes/home/+page.svelte

  This is the main homepage.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

-->

<script lang="ts">

  //////// IMPORTS ////////

  // Tool for runnning a block of code when the mounting a component.
  import { onMount } from 'svelte';

  // Home component.
  import Header from "@opencalc/ui/header/HeaderBar.svelte";
  import Features from "@opencalc/ui/home/Features.svelte";
  import Explore from "@opencalc/ui/home/Explore.svelte";
  import News from "@opencalc/ui/home/News.svelte";

  // Theming.
  import { themeName, themeStore } from "@opencalc/ui/themes/themer.js";

  //////// THEMES ////////

  $: theme  = "averageLight";
  $: button = "";
  $: box    = "";
  $: border = "";

  onMount(async () => {
    themeName.subscribe((value: any) => {
      theme = value;
    });
    themeStore.subscribe((value: any) => {
      button = value['button'];
      box    = value['boxBackground'];
      border = value['border'];
    });
  });

</script>

<style lang="scss">
  .negative-z {
    z-index: -1;
  };
</style>

<!-- Head. -->
<svelte:head>
  <title>Home | OpenCalc</title>
</svelte:head>

<!-- Header -->
<Header/>

<div class="w-full break-normal">
  <div class="w-full h-screen flex justify-center items-center flex-col" style="background-image: url(/svgs/banner/{theme}.svg); background-size: cover;">
    <div class="lg:w-3/4 w-full flex flex-col lg:align-middle lg:justify-start justify-center text-center m-0">
      <h1 class="m-5 font-bold lg:text-4xl sm:text-4xl text-xl">OpenCalc</h1>
      <p class="m-5 sm:text-md text-lg">An easy-to-use, completely free, and open-source collection of graphical calculator apps made for everyone to use.</p>
      <!-- Buttons -->
      <div class="m-5 flex lg:flex-row flex-col lg:justify-start justify-center">
        <a class="w-full flex justify-center content-center {button} lg:mr-5 lg:mb-0 mr-0 mb-5 p-2 rounded-xl" href="/help/getstarted">
          <p>Get Started</p>
        </a>
        <a class="w-full flex justify-center content-center {button} p-2 rounded-xl" href="/help/learnmore">
          <p>Learn More</p>
        </a>
      </div>
    </div>
  </div>
  <div class="bg-transparent z-30 shadow-xl border-t-2 {border}" style="background-image: url(/svgs/banner/{theme}.svg); background-size: cover;">
    <Explore />
    <Features />
    <News />
  </div>
</div>

