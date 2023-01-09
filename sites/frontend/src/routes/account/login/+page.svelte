<!--

  @opencalc/frontend/src/routes/account/login/+page.svelte

  This is for the login page.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

-->

<script lang="ts">

  //////// IMPORTS ////////

  // Mounting.
  import { onMount } from "svelte";
  // Header.
  import Header from "@opencalc/ui/header/HeaderBar.svelte";
  // Theming.
  import { themeName, themeStore } from "@opencalc/ui/themes/themer.js";

  //////// USER + PASSWORD ////////

  // Show if the password is checked or not.
  $: checked = false;

  // Remember login info.
  let rememberMe: boolean = false;
  let username: HTMLInputElement;
  let password: HTMLInputElement;

  //////// THEMES ////////

  $: theme  = "averageLight";
  $: button  = "";
  $: box    = "";
  $: border = "";

  onMount(async () => {
    themeName.subscribe((value: any) => {
      theme = value;
    });
    themeStore.subscribe((value: any) => {
      button  = value['button'];
      box    = value['boxBackground'];
      border = value['border'];
    });
  });

</script>

<!-- Head. -->
<svelte:head>
  <title>Login | OpenCalc</title>
</svelte:head>

<Header/>

<div class="h-screen w-screen m-0 flex lg:justify-start justify-center items-center" style="background-image: url(/svgs/login/{theme}.svg); background-size: cover;">
  <!-- Center Container -->
  <div class="z-40 lg:w-1/2 w-screen h-full p-10 pt-20 flex flex-col text-center {box} {border} border-r-2 overflow-y-auto">
    <!-- Title -->
    <div class="w-full">
      <h1 class="float-left font-bold text-4xl mb-10">Login</h1>
    </div>
    <!-- Description -->
    <p class="lg:text-lg text-sm mb-4 text-left">If you have an account, you can store your projects, share your projects, or collaborate together.</p>
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
          <div class="w-full p-2 {button} border rounded-lg cursor-pointer">Login</div>
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
      <a class="w-full mt-2 p-2 {button} border rounded-lg cursor-pointer" href="/account/signup">Sign Up</a>
    </div>
  </div>
</div>