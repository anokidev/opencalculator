<!--

    @openmath/frontend/src/routes/+error.svelte

    This is the main homepage.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    //////// IMPORTS ////////

    // onMount.
    import { onMount } from 'svelte';
    // Page.
    import { page } from '$app/stores';
    // Header.
    import Header from "@openmath/ui/header/HeaderBar.svelte";
    // Themes.
    import { themeName, themeStore } from "@openmath/ui/themes/themer.js";
    import { Server } from '@sveltejs/kit';

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
            border = value['border'];
            text   = value['text'];
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
    <title>Error {$page.status} | OpenMath</title>
</svelte:head>

<!-- Header -->
<Header/>

<div class="w-full h-screen {back} grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-2 p-20">
    <div class="flex flex-col justify-center">
        <h1 class="text-9xl font-bold">{status}</h1>
        <p class="font-bold mt-5">{message}</p>
    </div>
    <div class="border-l {border} p-5 flex flex-col justify-center">
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
        <div class="mt-5 flex lg:justify-start justify-center">
            <a class="flex justify-center content-center {button} mr-5 p-2 rounded" href="/">
                <p>Go Back to Home</p>
            </a>
        </div>
    </div>
</div>