/*

  @opencalc/supabase/sb.ts

  Obtain the Supabase client.
  
	Copyright (C) 2022, Anokidev. All right reserved.
  OpenCalc is open source and is licensed in MIT License.

*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabaseClient = createClient(supabaseUrl!, supabaseKey!);