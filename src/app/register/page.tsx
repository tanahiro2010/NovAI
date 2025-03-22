"use client";
import { FormEvent, useState } from "react";
import supabaseClient from "@/lib/supabase";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const [canPress, setPress] = useState<boolean>(true);
  const Register = (async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPress(false);


  });
  return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full animate-[fadeIn_0.5s_ease-in-out]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            新規登録
          </h2>
          <p className="text-gray-600">
            すでにアカウントをお持ちの方は
            <Link href="/login" className="text-amber-600 hover:text-amber-500">
              ログイン
            </Link>
            へ
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={Register}>
          <div className="space-y-3">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                ユーザー名
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                パスワード（確認）
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-center ml-3 block text-sm text-gray-700">
                <Link href="/terms" className="text-amber-600 hover:text-amber-500">
                  利用規約
                </Link>
                に同意する
              </label>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={!canPress}></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
