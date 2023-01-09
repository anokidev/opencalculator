<!--

	@opencalc/frontend/src/routes/+layout.svelte

	This is used as the main template file
  for Svelte.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

-->

<script lang="ts">

	//////// IMPORTS ////////

	// Tailwind directives.
  import "../app.css";
	// onMount.
	import { onMount } from 'svelte';
	// Theme script.
  import { setThemeOnMount } from "@opencalc/ui/themes/themer.js";
	// Theme script.
  import { themeStore } from "@opencalc/ui/themes/themer.js";

	//////// THEMES ////////

	// Set default theme.
	onMount(async () => {

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

		// Set default theme.
		setThemeOnMount(darkMode);

	});

	// Page color.
  $: backgroundColor = "";

  themeStore.subscribe((value: any) => {
    backgroundColor = value['nonBoxBackground'];
  });

</script>

<!-- For event listeners. -->
<svelte:window/>
  
<!-- Set global CSS. -->
<div class="w-full {backgroundColor}">
	<slot />
</div>