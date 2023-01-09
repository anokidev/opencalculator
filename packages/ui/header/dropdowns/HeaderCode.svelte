<!--

  @opencalculator/ui/header/dropdowns/HeaderCode.svelte

  This is the dropdown content for showing the
  source code and license that is used in the project.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

-->

<script lang="ts">

  //////// IMPORTS ////////

  // onMount
  import { onMount } from 'svelte';

  // FontAwesome time, for icons of course.
  import Fa from 'svelte-fa';
  import { faCode } from "@fortawesome/free-solid-svg-icons/index";
  import { faOsi } from '@fortawesome/free-brands-svg-icons/index';

  // Theme script.
  import { themeStore } from "../../themes/themer.js";

  //////// THEMES ////////

  $: boxBackground = "";
  $: button        = "";
  $: border        = "";

  // Subscribe.
  onMount( async () => {
      themeStore.subscribe((value: any) => {
          boxBackground = value['boxBackground'];
          button        = value['button'];
          border        = value['border'];
      });
  });

</script>

<div class="bg:w-2/5 md:w-2/5 w-full m-2 flex flex-col overflow-hidden {boxBackground}  shadow-lg rounded-2xl  border-2 {border}">
  <!-- Title -->
  <div class="w-full flex flex-col border-b border-gray">
    <h1 class="pl-2 pt-1 text-xl font-bold">Code</h1>
    <h4 class="pl-2 text-sm">The good thing is that OpenCalculator is free and open source.</h4>
    <h4 class="pl-2 pb-1 text-sm">The entire source code is licensed in MIT License.</h4>
  </div>
  <!-- Options -->
  <div class="w-full m-0 p-2 flex flex-row border-t border-black">
    <a href="https://www.github.com/anokidev/OpenCalculator" class="w-1/2 m-1 px-3 py-2 flex flex-row justify-center rounded-xl {button} cursor-pointer">
      <Fa icon={faCode} size="sm" class="mt-1 mr-1"/>
      <p>Source</p>
    </a>
    <a href="https://opensource.org/licenses/MIT" class="w-1/2 m-1 px-3 py-2 flex flex-row justify-center rounded-xl {button} cursor-pointer">
      <Fa icon={faOsi} size="sm" class="mt-1 mr-1"/>
      <p>License</p>
    </a>
  </div>
</div>