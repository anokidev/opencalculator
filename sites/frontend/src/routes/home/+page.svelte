<!--

    @openmath/frontend/src/routes/home/+page.svelte

    This is the main homepage.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    // Tool for runnning a block of code when the mounting a component.
    import { onMount } from 'svelte';

    // Home component.
    import Header from "@openmath/ui/header/HeaderBar.svelte";
    import Features from "@openmath/ui/home/Features.svelte";
    import Explore from "@openmath/ui/home/Explore.svelte";
    import News from "@openmath/ui/home/News.svelte";

    // Theming.
    import { themeName, themeStore } from "@openmath/ui/themes/themer.js";

    //////// THEMES ////////

    $: theme  = "averageLight";
    $: button = "";
    $: text   = "";
    $: box    = "";
    $: border = "";

    onMount(async () => {
        themeName.subscribe((value: any) => {
            theme = value;
        });
        themeStore.subscribe((value: any) => {
            button = value['boxButtonHoverBackgroundColor'];
            text   = value['boxButtonHoverTextColor'];
            box    = value['boxBackgroundColor'];
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
    <title>Home | OpenMath</title>
</svelte:head>

<!-- Header -->
<Header/>

    <div class="w-full break-normal">

        <div class="w-full p-28 h-screen flex justify-center items-center flex-col" style="background-image: url(/svgs/banner/{theme}.svg); background-size: cover;">
            <div class="w-auto p-4 lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 flex flex-col-reverse rounded-xl {box} {border} border-2">
                <img src="/assets/gifs/banner.png" alt="banner" class="w-full sm:block hidden"/>
                <div class="w-full flex flex-col lg:align-middle lg:justify-start justify-center lg:text-left text-center lg:border-l border-l-0 sm:ml-5 m-0 {border}">
                    <h1 class="m-5 font-bold lg:text-7xl sm:text-4xl text-sm">OpenMath</h1>
                    <p class="m-5 sm:text-md text-sm">An easy-to-use, completely free, and open-source collection of graphical calculator apps made for everyone to use.</p>
                </div>
            </div>
        </div>

        <div class="bg-transparent z-30 shadow-xl border-t-2 {border}" style="background-image: url(/svgs/banner/{theme}.svg); background-size: cover;">
            <Explore />
            <Features />
            <News />
        </div>

    </div>

