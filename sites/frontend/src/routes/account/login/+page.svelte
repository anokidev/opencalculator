<!--

    @openmath/frontend/src/routes/account/login/+page.svelte

    This is for the login page.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    // Mounting.
    import { onMount } from "svelte";

    import Header from "@openmath/ui/header/HeaderBar.svelte";

    // Theming.
    import { themeName, themeStore } from "@openmath/ui/themes/themer.js";

    //////// USER + PASSWORD ////////

    $: checked           = false;

    //////// REMEMBER ME ////////
    let rememberMe: boolean = false;

    //////// LOGIN STUFF /////////
    let username;
    let password;

    //////// THEMES ////////

    $: theme  = "averageLight";
    $: hover  = "";
    $: text   = "";
    $: box    = "";
    $: border = "";

    onMount(async () => {
        themeName.subscribe((value: any) => {
            theme = value;
        });
        themeStore.subscribe((value: any) => {
            hover = value['boxButtonHoverBackgroundColor'];
            text   = value['boxButtonHoverTextColor'];
            box    = value['boxBackgroundColor'];
            border = value['border'];
        });
    });

</script>

<!-- Head. -->
<svelte:head>
    <title>Login | OpenMath</title>
</svelte:head>

<Header/>

<div class="h-screen w-screen m-0 flex lg:justify-start justify-center items-center" style="background-image: url(/svgs/login/{theme}.svg); background-size: cover;">

    <div class="z-40 lg:w-1/2 w-screen h-full p-10 pt-20 flex flex-col text-center {box} {border} overflow-y-auto">

        <div class="w-full">
            <h1 class="float-left font-bold text-4xl mb-10">Login</h1>
        </div>

        <p class="lg:text-lg text-sm mb-4 text-left">If you have an account, you can store your projects, share your projects, or collaborate together.</p>

        <p class="w-full lg:text-md text-xs text-left">Go back to <a href="/home" class="underline">home</a>.</p>

        <!-- Main Box -->
        <div class="w-full lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col">

            <!-- Username, Password -->
            <div class="flex flex-col justify-center items-center">

                <!-- Username -->
                <div class="w-full mt-2 flex flex-col">
                    <b class="mb-1 text-left float-left">Username</b>
                    <input bind:this={username} placeholder="Enter your username here." type="text" class="p-2 {box} {border} border rounded-lg outline-none">
                </div>

                <!-- Password -->
                <div class="w-full mt-2 flex flex-col">
                    <b class="mb-1 text-left float-left">Password</b>
                    <input bind:this={password} placeholder="Enter your password here." type="{checked ? "text" : "password"}" class="p-2 {box} {border} border rounded-lg outline-none">
                </div>

                <!-- Show Password -->
                <div class="w-full mt-2 flex flex-row cursor-pointer">
                    <input bind:checked={checked} type="checkbox" class="{box} border" id="checkbox" name="show-password">
                    <label for="checkbox" class="text-sm ml-2">Show Password</label>
                </div>

                <!-- Login -->
                <div class="w-full mt-2 flex flex-row">
                    <div class="w-full p-2 {hover} {border} border rounded-lg cursor-pointer">Login</div>
                </div>

                 <!-- Show Password -->
                 <div class="w-full mt-2 flex flex-row cursor-pointer">
                    <input bind:checked={rememberMe} type="checkbox" class="{box} border" id="checkbox" name="show-password">
                    <label for="checkbox" class="text-sm ml-2">Remember Me</label>
                </div>

            </div>

            <!-- Sign Up using Google, etc -->
            <div class="lg:pl-2 lg:ml-4 mt-4 pt-2 lg:border-l lg:border-t-0 border-l-0 border-t {border}">
                <i>Or...</i>
            </div>

        </div>

        <!-- Sign Up -->
        <div class="w-full mt-4 flex flex-col">
            <p class="w-full text-xs text-left">Don't have an account? Sign up!</p>
            <a class="w-full mt-2 p-2 {hover} {border} border rounded-lg cursor-pointer" href="/account/signup">Sign Up</a>
        </div>

    </div>

</div>