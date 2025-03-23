"use client";
import { useEffect } from "react";
import supabaseClient from "@/lib/supabase";

export default function Logout() {
    useEffect(() => {
        const logout = (async () => {
            const { error } = await supabaseClient.auth.signOut();

            if (error) {
                console.error(error);
                alert('ログアウトに失敗しました');
                return;
            }

            window.location.href = "/";
        });

        logout();
    }, []);

    return null;
}