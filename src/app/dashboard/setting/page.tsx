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

            <div className="bg-white rounded-lg shadow p-6">
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
                            <div className="w-full border border-gray-500 rounded p-3 text-center hover:bg-gray-100 ">
                                {isLoading ? '更新中...' : '設定を更新'}
                            </div>
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}