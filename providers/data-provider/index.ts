"use client";

import { dataProvider as dataProviderSupabase } from "@refinedev/supabase";
import { supabaseClient } from "../../utils/supabase/client";

export const dataProvider = dataProviderSupabase(supabaseClient);
