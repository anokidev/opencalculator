<!--

    @openmath/ui/home/Explore.svelte

    This is for homepage Explore section.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

-->

<script lang="ts">

    import { onMount } from 'svelte';

    import Fa from 'svelte-fa';
    import { faCheck, faGraduationCap, faRocket } from '@fortawesome/free-solid-svg-icons/index';

    import { themeName, themeStore } from "../themes/themer.js";

    //////// TABS ////////

    $: tabs = "features";

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
    .center {
        justify-content: center;
        align-items: center;
        margin-top: 0px;
    };

    @media (max-width: 462px) {
        .center {
            margin-top: 5px;
        };
    };
</style>

<div class="px-10 p-4 flex flex-col justify-center break-normal text-justify">
    <!--  Title --->
    <h1 class="m-5 font-bold text-4xl text-center">Explore</h1>
    <!-- Buttons -->

        <!-- Get Started -->
        <div class="px-10 py-2 my-2 w-auto lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col rounded-lg {box} {button} {text} {border} border-2 cursor-pointer">
            <div class="flex center">
                <Fa class="mt-1 mr-1" icon={faCheck} size="4x"/>
            </div>
            <div>
                <h1 class="font-bold sm:text-3xl text-sm">Get Started</h1>
                <p class="sm:text-md text-sm">OpenMath is fully free-for-all (No premium plans!), so that you can access all the features without any limitations. Go ahead by clicking this button to get started immediately.</p>
            </div>
        </div>
        <!-- Learn -->
        <div class="px-10 py-2 my-2 w-auto lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col rounded-lg {box} {button} {text} {border} border-2 cursor-pointer">
            <div class="flex center">
                <Fa class="mt-1 mr-1" icon={faGraduationCap} size="4x"/>
            </div>
            <div>
                <h1 class="font-bold sm:text-3xl text-sm">Learn</h1>
                <p class="sm:text-md text-sm">OpenMath provides an interactive tutorial mode that is available to use. The tutorial provides guides that highlights each element of the page, you can also try to use OpenMath's while learning OpenMath.</p>
            </div>
        </div>
        <!-- Explore -->
        <div class="px-10 py-2 my-2 w-auto lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col rounded-lg {box} {button} {text} {border} border-2 cursor-pointer">
            <div class="flex center">
                <Fa class="mt-1 mr-1" icon={faRocket} size="4x"/>
            </div>
            <div>
                <h1 class="font-bold sm:text-3xl text-sm">Discover</h1>
                <p class="sm:text-md text-sm">Try and discover more of OpenMath's features. Such as variants of graphical calculators, colloboration tools to work and discuss together, sharing your works, and more!</p>
            </div>
        </div>


</div>