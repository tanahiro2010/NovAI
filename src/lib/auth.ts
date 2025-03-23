"use client";
import supabaseClient from "./supabase";

export async function isLogin() {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();

    if (error || userError || !user) {
        return null;
    }

    return session;
}