import OptionLink from "@/components/ui/option-link";
import Link from "next/link";

export default async function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-4 max-w-screen-xl">
            {/* ヘッダーセクション */}
            <div className="mb-3 sm:mb-8">
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
                            href="/dashboard/create/novel"
                            title="小説作成"
                            description="新しい小説を書き始めましょう"
                        />
                        <OptionLink
                            href="/dashboard/create/plot"
                            title="プロット作成"
                            description="物語の展開を考えましょう"
                        />
                        <OptionLink
                            href="/dashboard/create/char"
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
                            href="/dashboard/create/novel"
                            title="小説管理"
                            description="自身の小説を管理しましょう"
                        />
                        <OptionLink
                            href="/dashboard/create/plot"
                            title="プロット管理"
                            description="過去のプロットデータを見直しましょう"
                        />
                        <OptionLink
                            href="/dashboard/create/char"
                            title="キャラクター管理"
                            description="過去の登場人物データを見直しましょう"
                        />
                    </div>
                </fieldset>
            </section>
        </div>
    );
}