'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabaseClient from "@/lib/supabase";

export default function Setting() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const currentPassword = formData.get('currentPassword') as string;
        const newPassword = formData.get('newPassword') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        try {
            // パスワード変更が必要な場合
            if (newPassword) {
                if (newPassword !== confirmPassword) {
                    throw new Error('新しいパスワードが一致しません');
                }

                const { error: updateError } = await supabaseClient.auth.updateUser({
                    password: newPassword
                });

                if (updateError) throw updateError;
            }

            // メールアドレス変更が必要な場合
            if (email) {
                const { error: updateError } = await supabaseClient.auth.updateUser({
                    email: email
                });

                if (updateError) throw updateError;
            }

            setMessage({ type: 'success', text: '設定を更新しました' });
        } catch (error) {
            setMessage({ type: 'error', text: error instanceof Error ? error.message : '設定の更新に失敗しました' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">アカウント設定</h1>
                <p className="text-sm sm:text-base text-gray-600">アカウント情報を管理できます</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {message && (
                        <div className={`p-4 rounded-md ${
                            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                            placeholder="新しいメールアドレス"
                        />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-medium text-gray-900">パスワード変更</h2>
                        
                        <div>
                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                                現在のパスワード
                            </label>
                            <input
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                新しいパスワード
                            </label>
                            <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                新しいパスワード（確認）
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <button type="submit" disabled={isLoading} className="w-full">
                            <div className="w-full border border-gray-500 rounded p-3 text-center hover:bg-gray-100">
                                {isLoading ? '更新中...' : '設定を更新'}
                            </div>
                        </button>
                    </div>
                </form>
            </div>

            {/* プラン設定セクション */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">プラン設定</h2>
                
                <div className="space-y-6">
                    {/* 現在のプラン情報 */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">現在のプラン</h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold text-amber-600">無料プラン</p>
                                <p className="text-sm text-gray-600">基本的な機能が利用できます</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">月額</p>
                                <p className="text-2xl font-bold">¥0</p>
                            </div>
                        </div>
                    </div>

                    {/* 利用制限情報 */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">利用制限</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">月間AI利用回数</span>
                                <span className="font-medium">100回/月</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">保存可能な作品数</span>
                                <span className="font-medium">5作品</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">AI生成文字数</span>
                                <span className="font-medium">1,000文字/回</span>
                            </div>
                        </div>
                    </div>

                    {/* プレミアムプラン案内 */}
                    <div className="border-2 border-amber-500 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">プレミアムプランにアップグレード</h3>
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-2xl font-bold text-amber-600">プレミアムプラン</p>
                                <p className="text-sm text-gray-600">すべての機能が利用できます</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">月額</p>
                                <p className="text-2xl font-bold">¥980</p>
                            </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                                <span className="text-amber-500 mr-2">✓</span>
                                <span>無制限のAI利用</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-amber-500 mr-2">✓</span>
                                <span>無制限の作品保存</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-amber-500 mr-2">✓</span>
                                <span>最大5,000文字/回のAI生成</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-amber-500 mr-2">✓</span>
                                <span>優先サポート</span>
                            </li>
                        </ul>
                        <button className="w-full bg-amber-600 text-white rounded p-3 text-center hover:bg-amber-700 transition-colors">
                            プレミアムプランにアップグレード
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}