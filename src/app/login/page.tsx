"use client";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="h-[calc(100vh-10rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full animate-[fadeIn_0.5s_ease-in-out]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        ログイン
                    </h2>
                    <p className="text-gray-600">
                        アカウントをお持ちでない方は
                        <Link href="/register" className="text-amber-600 hover:text-amber-500">
                            新規登録
                        </Link>
                        へ
                    </p>
                </div>

                <form className="mt-6 space-y-4">
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                メールアドレス
                            </label>
                            <Input
                                name="email"
                                placeholder="example@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                パスワード
                            </label>
                            <Input
                                name="password"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="text-center ml-3 block text-sm text-gray-700">
                                ログイン状態を保持
                            </label>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" disabled={false} >
                            ログイン状態を保持
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}