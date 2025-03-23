'use client';

import OptionButton from "@/components/ui/option-button";
import OptionLink from "@/components/ui/option-link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        if (confirm('ログアウトしますか？')) {
            router.push('/dashboard/logout');
        }
    };

    const handleDeleteAccount = async () => {
        if (confirm('アカウント削除しますか（削除されると全ての課金は復活しません）？')) {
            router.push('/dashboard/delete_account');
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-screen-xl">
            {/* ヘッダーセクション */}
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">マイダッシュボード</h1>
                <p className="text-sm sm:text-base text-gray-600">あなたの創作活動をサポートします</p>
            </div>

            <section>
                <fieldset className="mt-4 sm:mt-5 border rounded-md p-2 sm:p-4">
                    <legend className="text-xl sm:text-2xl text-gray-900 mb-2 ml-[3%] px-1">
                        新規作成
                    </legend>

                    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <OptionLink
                            href="/dashboard/novel/new"
                            title="小説作成"
                            description="新しい小説を書き始めましょう"
                        />
                        <OptionLink
                            href="/dashboard/plot/new"
                            title="プロット作成"
                            description="物語の展開を考えましょう"
                        />
                        <OptionLink
                            href="/dashboard/char/new"
                            title="キャラクター作成"
                            description="登場人物を設定しましょう"
                        />
                    </div>
                </fieldset>

                <fieldset className="mt-4 sm:mt-5 border rounded-md p-2 sm:p-4">
                    <legend className="text-xl sm:text-2xl text-gray-900 mb-2 ml-[3%] px-1">
                        作品管理
                    </legend>

                    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <OptionLink
                            href="/dashboard/novel"
                            title="小説管理"
                            description="自身の小説を管理しましょう"
                        />
                        <OptionLink
                            href="/dashboard/plot"
                            title="プロット管理"
                            description="過去のプロットデータを見直しましょう"
                        />
                        <OptionLink
                            href="/dashboard/char"
                            title="キャラクター管理"
                            description="過去の登場人物データを見直しましょう"
                        />
                    </div>
                </fieldset>

                <fieldset className="mt-4 sm:mt-5 border border-red-500 rounded-md p-2 sm:p-4">
                    <legend className="text-xl sm:text-2xl text-gray-900 mb-2 ml-[3%] px-1">
                        アカウント
                    </legend>

                    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <OptionLink
                            href="/dashboard/setting"
                            title="アカウント設定"
                            description="新しい小説を書き始めましょう"
                        />
                        <OptionLink
                            href="/dashboard/setting/plans"
                            title="プラン設定"
                            description="料金プランに関する設定ができます"
                        />
                        <OptionButton
                            onClick={handleLogout}
                            title="ログアウト"
                            description="ログアウトできます"
                        />
                        <OptionButton
                            onClick={handleDeleteAccount}
                            title="アカウント削除"
                            description="アカウントを削除できます"
                        />
                    </div>
                </fieldset>
            </section>
        </div>
    );
}