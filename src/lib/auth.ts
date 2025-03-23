"use client";
import supabaseClient from "./supabase";

export async function isLogin() {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    console.log(error);
    console.log(session);

    if (error) {
        console.error("認証エラー:", error.message);
        return null;
    }

    return session;
}