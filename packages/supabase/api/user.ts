/*

	@opencalculator/supabase/api/user.ts

	This is used as a wrapper for Supabase user auth.

	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalculator is open source and is licensed in MIT License.

*/

import { supabaseClient } from "../sb";

// Register / sign up an account.
const registerAccount = async (email: string, password: string): Promise<object> => {

	

};

// Delete the account.
const deleteAccount = async (email: string, password: string): Promise<object> => {



};

// Edit account.
const editAccount = async (email: string, info: object): Promise<object> => {
	
	const { data, error } = await supabaseClient.auth.updateUser(info);

	return data;

};

// Login.
const logInViaPassword = async (email: string, password: string): Promise<object> => {

	const { data, error } = await supabaseClient.auth.signInWithPassword({
		email: email,
		password: password,
	});

	return data;

};

const logInViaProviders = async (provider): Promise<object> => {

	const { data, error } = await supabaseClient.auth.signInWithOAuth({
		provider: provider,
		options: {
			redirectTo: 'https://opencalculator.netlify.app/?login=true'
		}
	});

	return data;

};

// Logout.
const logOut = async (email: string, password: string) => {

	const { error } = await supabaseClient.auth.signOut();

};