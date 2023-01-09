<!--

  @opencalculator/ui/home/News.svelte

  This is for homepage News section.

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

<div class="flex flex-col justify-center text-center">
    <!-- Title -->
    <h1 class="m-5 font-bold text-4xl {text}">News</h1>
</div>