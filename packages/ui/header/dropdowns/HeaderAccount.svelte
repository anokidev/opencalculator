<!--

    @openmath/ui/header/dropdowns/HeaderAccount.svelte

    This is the dropdown content for showing account menu.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    import { onMount } from 'svelte';

    // Theme script.
    import { themeStore } from "../../themes/themer.js";

    //////// USER DATA ////////

    interface userData {
        firstName?:      string,
        lastName?:       string,
        userName?:       string,
        userId?   :      string,
        profilePicture?: string
    };

    let userData: userData = {}

    // Theme data.
    $: boxBackgroundColor               = "";
    $: boxTextColor                     = "";
    $: boxButtonTextColor               = "";
    $: menu                             = "";
    $: boxButtonHoverTextColor          = "";
    $: border                           = "";

    onMount(async () => {   

		userData.firstName      = "Anoki";
        userData.lastName       = "Youssou";
        userData.userName       = "anoki.youssou@gmail.com";
        userData.userId         = "v3rv3f3";
        userData.profilePicture = "/profile.png";

        themeStore.subscribe((value: any) => {
            boxBackgroundColor               = value['boxBackgroundColor'];
            boxTextColor                     = value['boxTextColor'];
            boxButtonTextColor               = value['boxButtonTextColor'];
            menu                             = value['menuHoverBackgroundColor'];
            boxButtonHoverTextColor          = value['boxButtonHoverTextColor'];
            border                           = value['border'];
        });

	});

</script>

<div class="bg:w-2/5 md:w-2/5 w-full m-2 flex flex-col overflow-hidden {boxBackgroundColor} {boxTextColor} rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 shadow-lg">

    <!-- Profile -->
    <div class="w-full m-2 flex flex-row">
        <!-- Profile Picture, do not remove h-16 to keep the profile picture perfect round!!!! -->
        <div class="h-14 ml-2 mr-2 overflow-hidden rounded-full shadow">
            <img alt="profile">
        </div>
        <!-- Account name and email -->
        <div class="pl-2 flex flex-col">
            <h1 class="text-xl font-bold">{userData.firstName + " " + userData.lastName}</h1>
            <h4 class="text-sm">{userData.userName}</h4>
        </div>
    </div>
    <!-- Menus -->
    <div class="flex flex-col border-t {border}">
        <div class="h-full m-0 p-2 {menu} {boxButtonTextColor} {boxButtonHoverTextColor} ">
            <a href="/{userData.userName}/">View My Profile</a>
        </div>
        <div class="h-full m-0 p-2 {menu} {boxButtonTextColor} {boxButtonHoverTextColor}">
            <a href="/{userData.userName}/projects">View My Projects</a>
        </div>
        <div class="h-full m-0 p-2 {menu} {boxButtonTextColor} {boxButtonHoverTextColor}">
            <a href="/settings/account">Configure My Account</a>
        </div>
        <div class="h-full m-0 p-2 {menu} {boxButtonTextColor} {boxButtonHoverTextColor}">
            <a href="/settings/profile">Configure My Profile</a>
        </div>
    </div>
</div>