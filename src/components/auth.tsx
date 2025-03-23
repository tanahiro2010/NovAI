'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import supabaseClient from "@/lib/supabase";
import { isLogin } from "@/lib/auth";

interface Props {
    disableLogin?: boolean;
    disableNotLogin?: boolean;
    children?: React.ReactNode;
}

export default function SessionCheck({ disableLogin = false, disableNotLogin = false, children }: Props) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const check = async () => {
            const data = await isLogin();
            setIsAuthenticated(!!data);

            if (data && disableLogin) {
                router.push('/dashboard');
            } else if (!data && disableNotLogin) {
                router.push('/login');
            }
        };

        check();
    }, [disableLogin, disableNotLogin, router]);

    // 認証状態が確認されるまで何も表示しない
    if (isAuthenticated === null) {
        return null;
    }

    // 認証状態に基づいて子要素を表示
    if ((isAuthenticated && !disableLogin) || (!isAuthenticated && !disableNotLogin)) {
        return <>{children}</>;
    }

    return null;
}