'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import supabaseClient from "@/lib/supabase";

interface Props {
    disableLogin?: boolean;
    disableNotLogin?: boolean;
}

export default function SessionCheck({ disableLogin = false, disableNotLogin = false }: Props) {
    const router = useRouter();

    useEffect(() => {
        const check = (async () => {
            const { data } = await supabaseClient.auth.getSession();

            if (data.session) {
                if (disableLogin) router.push('/dashboard');
            } else {
                if (disableNotLogin) router.push('/login');
            }
        });
        if (disableLogin || disableLogin) {
            check();
        }
    }, []);


    return null;
}