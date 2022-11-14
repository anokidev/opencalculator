/*

    @openmath/ui/dropdowns/states.ts

    This is the mechanism for opening
    or closing a dropdown menu.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import { writable } from 'svelte/store';

const setDropdownContent       = writable(""); // Dropdown content placeholder.
const setMobileDropdownContent = writable(""); // Dropdown content placeholder.

export { setDropdownContent, setMobileDropdownContent };