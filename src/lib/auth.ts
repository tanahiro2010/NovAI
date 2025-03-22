import { Session } from "@supabase/supabase-js";

import supabaseClient from "./supabase";


export async function isLogin(): Promise<Session | null> {
    const { data, error } = await supabaseClient.auth.getSession();

    return data.session ?? null;
}