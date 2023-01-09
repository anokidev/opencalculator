<!--

  @opencalc/frontend/src/routes/account/signup/+page.svelte

  This is for the signup page.

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

  // Show password is checked or not?
  $: checked = false;

  // Remember login info.
  let rememberMe: boolean = false;
  let username:        HTMLInputElement;
  let password:        HTMLInputElement;
  let email:           HTMLInputElement;
  let reEnterPassword: HTMLInputElement;

  // The password must contains mininum 1 number and 1 capital letter.
  let notValidPassword: boolean    = false;

  // Does the password match?
  let notMatchingPassword: boolean = false;

  // The email must be: [EMAIL-NAME]@[DOMAIN-NAME].[TLD]
  let notValidEmail: boolean       = false;

  // Check if the password is valid (Minimal: A capital letter and a number letter).
  function checkPassword() {
    if (password.value.match(/[A-Z]/g) && password.value.match(/[0-9]/g)) {
      notValidPassword = false;
    } else {
      notValidPassword = true;
    };
  };

  // Compare the re-entered password and the supposed password.
  function comparePassword() {
    if (password.value === reEnterPassword.value) {
      notMatchingPassword = false;
    } else {
      notMatchingPassword = true;
    };
  };

  // Check if the email is valid. FORMAT: [name]@[company/email-provider].[TLD].
  function checkEmail() {
    if (email.value.match(/\S+@.+\.\S+/g)) {
      notValidEmail = false;
    } else {
      notValidEmail = true;
    };
  };

  //////// THEMES ////////

  $: theme  = "averageLight";
  $: button  = "";
  $: box    = "";
  $: border = "";
  $: error  = "";

  onMount(async () => {
    themeName.subscribe((value: any) => {
      theme  = value;
    });
    themeStore.subscribe((value: any) => {
      button  = value['button'];
      box    = value['boxBackground'];
      border = value['border'];
      error  = value['error'];
    });
  });

</script>

<style lang="scss">

  ::-webkit-scrollbar {
      width: 10px;
  };

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  };
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 1px;
  };

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(172, 172, 172); 
  };

</style>

<!-- Head. -->
<svelte:head>
  <title>Sign Up | OpenCalc</title>
</svelte:head>

<Header/>

<div class="h-screen w-screen m-0 flex lg:justify-start justify-center items-center" style="background-image: url(/svgs/signup/{theme}.svg); background-size: cover;">
  <!-- Center Container -->
  <div class="z-40 lg:w-1/2 w-screen h-full p-10 pt-20 flex flex-col text-center {box} {border} border-r-2 overflow-y-auto">
    <!-- Title -->
    <div class="w-full">
        <h1 class="float-left font-bold text-4xl mb-10">Sign Up</h1>
    </div>
    <!-- Description -->
    <p class="lg:text-lg text-sm mb-4 text-left">If you have an account, you can store your projects, share your projects, or collaborate together.</p>
    <!-- Log In Notice -->
    <p class="lg:text-lg text-sm mb-4 text-left">But if you have an account, <a href="/account/login" class="underline">Log in!</a></p>
    <!-- Username, Password -->
    <div class="w-full flex flex-col justify-center items-center">
      <!-- Username -->
      <div class="w-full mt-2 flex flex-col">
        <b class="mb-1 text-left float-left">Username</b>
        <input bind:this={username} type="text" placeholder="Enter your username here." class="p-2 {box} {border} border rounded-lg outline-none" id="checkbox">
      </div>
      <!-- Email -->
      <div class="w-full mt-2 flex flex-col">
        <b class="mb-1 text-left float-left">Email</b>
        <input bind:this={email} on:input={checkEmail} type="text" placeholder="Enter your email here." class="p-2 {box} {border} border rounded-lg outline-none" id="checkbox">
      </div>
      <!-- Not Valid Email -->
      <div class="{notValidEmail ? "block" : "hidden"} w-full mt-2 p-2 flex flex-col {error} rounded-md text-left text-sm">
        Please enter a valid email, example: mypersonalemail@example.com
      </div>
      <!-- Password -->
      <div class="w-full mt-2 flex flex-col">
        <b class="mb-1 text-left float-left">Password</b>
        <input bind:this={password} on:input={checkPassword} type="{checked ? "text" : "password"}" placeholder="Enter your password here." class="p-2 {box} {border} border rounded-lg outline-none"id="checkbox">
      </div>
      <!-- Not Valid Password -->
      <div class="{notValidPassword ? "block" : "hidden"} w-full mt-2 p-2 flex flex-col {error} rounded-md text-left text-sm">
        Your password is not valid. Make sure the password contains at least one capital letter and one number.
      </div>
      <!-- Reenter -->
      <div class="w-full mt-2 flex flex-col">
        <b class="mb-1 text-left float-left">Re-enter Your Password</b>
        <input bind:this={reEnterPassword} on:input={comparePassword} type="{checked ? "text" : "password"}" placeholder="For security, reenter your password." class="p-2 {box} {border} border rounded-lg outline-none"id="checkbox">
      </div>
      <!-- Not Valid -->
      <div class="{notMatchingPassword ? "block" : "hidden"} w-full mt-2 p-2 flex flex-col {error} rounded-md text-left text-sm">
        Your re-entered password does not match.
      </div>
      <!-- Show Password -->
      <div class="w-full mt-2 flex flex-row cursor-pointer">
        <input bind:checked={checked} type="checkbox" class="{box} {border} border" id="checkbox" name="show-password">
        <label for="checkbox" class="text-sm ml-2">Show Password</label>
      </div>
      <!-- Login -->
      <div class="w-full mt-2 flex flex-row">
        <div class="w-full p-2 {button} border rounded-lg cursor-pointer" on:click={() => {}} on:keypress={(event) => {if (event.key == "Enter") {}}}>Create an Account</div>
      </div>
       <!-- Show Password -->
       <div class="w-full mt-2 flex flex-row cursor-pointer">
        <input bind:checked={rememberMe} type="checkbox" class="{box} border" id="checkbox" name="show-password">
        <label for="checkbox" class="text-sm ml-2">Remember Me</label>
      </div>
    </div>
    <!-- Sign Up using Google, etc -->
    <div class="w-full pt-2 mt-4 border-t {border} justify-center">
      <i>Or...</i>
    </div>
  </div>
</div>