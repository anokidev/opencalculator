<!--

  @opencalculator/ui/home/Explore.svelte

  This is for homepage Explore section.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

-->

<script lang="ts">

  //////// IMPORTS ////////

  // onMount.
  import { onMount } from 'svelte';
  // FontAwesome.
  import Fa from 'svelte-fa';
  import { faCheck, faGraduationCap, faRocket } from '@fortawesome/free-solid-svg-icons/index';
  // Themes.
  import { themeName, themeStore } from "../themes/themer.js";

  //////// THEMES ////////

  $: theme  = "averageLight";
  $: box    = "";
  $: border = "";
  $: text   = "";
  onMount(async () => {
      themeName.subscribe((value: any) => {
          theme = value;
      });
      themeStore.subscribe((value: any) => {
          box    = value['boxBackground'];
          border = value['border'];
          text   = value['text'];
      });
  });

</script>

<style lang="scss">

  .center {
      justify-content: center;
      align-items: center;
      margin-top: 0px;
  };

  @media (max-width: 462px) {
      .center {
          margin-top: 5px;
      };
  };

</style>

<div class="px-10 p-4 flex flex-col justify-center break-normal text-justify">
  <!--  Title --->
  <h1 class="m-5 font-bold text-4xl text-center {text}">Explore</h1>
  <!-- Get Started -->
  <div class="px-10 py-2 my-2 w-auto flex flex-row rounded-lg {box} {border} border-2 cursor-pointer">
    <div class="flex center m-4 w-1/5">
      <Fa class="mt-1 mr-1" icon={faCheck} size="4x"/>
    </div>
    <div class="m-4 w-4/5">
      <h1 class="font-bold sm:text-3xl text-md">Get Started</h1>
      <p class="sm:text-md text-sm">OpenCalculator is fully free-for-all (No premium plans!), so that you can access all the features without any limitations. Go ahead by clicking this button to get started immediately.</p>
    </div>
  </div>
  <!-- Learn -->
  <div class="px-10 py-2 my-2 w-auto flex flex-row rounded-lg {box} {border} border-2 cursor-pointer">
    <div class="flex center m-4 w-1/5">
      <Fa class="mt-1 mr-1" icon={faGraduationCap} size="4x"/>
    </div>
    <div class="m-4 w-4/5">
      <h1 class="font-bold sm:text-3xl text-md">Learn</h1>
      <p class="sm:text-md text-sm">OpenCalculator provides an interactive tutorial mode that is available to use. The tutorial provides guides that highlights each element of the page, you can also try to use OpenCalculator's while learning OpenCalculator.</p>
    </div>
  </div>
  <!-- Explore -->
  <div class="px-10 py-2 my-2 w-auto flex flex-row rounded-lg {box} {border} border-2 cursor-pointer">
    <div class="flex center m-4 w-1/5">
      <Fa class="mt-1 mr-1" icon={faRocket} size="4x"/>
    </div>
    <div class="m-4 w-4/5">
      <h1 class="font-bold sm:text-3xl text-md">Discover</h1>
      <p class="sm:text-md text-sm">Try and discover more of OpenCalculator's features. Such as variants of graphical calculators, colloboration tools to work and discuss together, sharing your works, and more!</p>
    </div>
  </div>
</div>