<!--

	@openmath/frontend/src/routes/+layout.svelte

	This is used as the main template file
    for Svelte.

	Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    import "../app.css";

	import { onMount } from 'svelte';

	// Theme script.
    import { setThemeOnMount } from "@openmath/ui/themes/themer.js";

	// Theme script.
    import { themeStore } from "@openmath/ui/themes/themer.js";
	// Set default theme.
	onMount(async () => {

		let darkMode: boolean = false;

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

		setThemeOnMount(darkMode);

	});


    $: backgroundColor = "";
    $: textColor       = "";

    themeStore.subscribe((value: any) => {
        backgroundColor = value['nonBoxBackgroundColor'];
        textColor       = value['nonBoxTextColor']
    });

</script>

<!-- For event listeners. -->
<svelte:window/>
  
<!-- Set global CSS. -->
<div class="w-full {backgroundColor} {textColor}">
	<slot />
</div>