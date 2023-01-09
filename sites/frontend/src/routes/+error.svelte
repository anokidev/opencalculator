<!--

  @opencalculator/frontend/src/routes/+error.svelte

  This is the main homepage.

  Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

-->

<script lang="ts">

    //////// IMPORTS ////////

    // onMount.
    import { onMount } from 'svelte';
    // Page.
    import { page } from '$app/stores';
    // Header.
    import Header from "@opencalculator/ui/header/HeaderBar.svelte";
    // Themes.
    import { themeName, themeStore } from "@opencalculator/ui/themes/themer.js";

    //////// THEMES ////////

    $: theme  = "averageLight";
    $: back    = "";
    $: border = "";
    $: text   = "";
    $: button = ""

    onMount(async () => {
        themeName.subscribe((value: any) => {
            theme = value;
        });
        themeStore.subscribe((value: any) => {
            back    = value['nonBoxBackground'];
            border  = value['border'];
            text    = value['text'];
            button  = value['button'];
        });
    });

    //////// PAGE ERROR ////////

    const status: number              = $page.status;
    const message: string | undefined = $page.error?.message;

</script>

<style lang="scss">

</style>

<!-- Head. -->
<svelte:head>
    <title>Error {$page.status} | OpenCalculator</title>
</svelte:head>

<!-- Header -->
<Header/>

<div class="w-full h-screen {back} p-0 grid grid-rows-1 grid-cols-2">
    <div class="p-20">
        <div class="flex flex-col justify-center">
            <h1 class="text-9xl font-bold">{status}</h1>
            <p class="font-bold text-4xl mt-5">{message}</p>
        </div>
        <div class="mt-10 flex flex-col justify-center w-3/4">
            <p>
                {#if status == 404}
                The page that you are looking for may has been
                moved temporarily, moved permanently, renamed,
                or deleted. Sorry.
                {:else if status == 500}
                The server has encountered an internal error
                or a misconfiguration and because of that, is unable
                to complete your request. Please contact the server 
                administrator for further assistance. Sorry. 
                {/if}
            </p>
            <div class="mt-10 flex justify-start">
                <a class="flex justify-center content-center {button} mr-5 p-2 rounded" href="/">
                    <p>Go Back to Home</p>
                </a>
            </div>
        </div>
    </div>
    <div class="overflow-hidden">
        <img alt="error-banner" src="/svgs/errors/{theme}.svg" class="w-full"/>
    </div>
</div>