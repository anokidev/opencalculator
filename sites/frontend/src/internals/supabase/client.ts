/*

    src/internals/supabase/client.ts

    This contains the Supabase client.

    Copyright (C) 2022, Anokidev. All rights 
	reserved. Licensed in MIT License. 

*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string             = 'https://ifqhutatnnipggoswzoc.supabase.co';
const supabaseKey: any                = process.env.SUPABASE_KEY;
const supabase                        = createClient(supabaseUrl, supabaseKey);

export { supabase };