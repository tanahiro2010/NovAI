import Link from "next/link";
import A from "./ui/link";
import { Session } from "@supabase/supabase-js";

interface Props {
    login: Session | null;
}

export default async function Header({ login }: Props) {
    return (
        <header className="p-5 sm:p-5 flex justify-between items-center bg-gradient-to-b from-[#FAEBD7] via-[#FAEBD7] to-background">
            <div className="text-xl sm:text-3xl text-black">
                <Link href="/">NovAI</Link>
            </div>

            <div className="hidden sm:block text-gray-600">
                小説執筆をAIがサポート
            </div>

            <div className="text-sm sm:text-base">
                <A href={ login ? "/dashboard" : "/login" } >
                    { login ? "ダッシュボード" : "ログイン" }
                </A>
            </div>
        </header>
    );
}