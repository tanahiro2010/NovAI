"use client";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import supabaseClient from "@/lib/supabase";
import Button from "@/components/ui/accounts/button";
import Input from "@/components/ui/accounts/input";
import Link from "next/link";

export default function RegisterPage() {
  const [canPress, setPress] = useState<boolean>(true);

  const register = (async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPress(false);
    const formData: FormData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (email && name && password && confirmPassword) {
      if (password == confirmPassword) {
        const { error } = await supabaseClient.auth.signUp({ email, password, options: {
          data: {
            display_name: name
          },
          emailRedirectTo: `${window.location.protocol}://${window.location.host}/login`
        } });

        if (error) {
          toast.error('登録に失敗しました。メールアドレスが使用されている可能性があります');
        } else {
          window.location.href = '/login';
          toast.success('メールアドレスを認証後、ログインしてください');
        }
        
      } else {
        toast.error('パスワードが一致しません');
      }
    }
    
    setPress(true);
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

        <form className="mt-6 space-y-4" onSubmit={register}>
          <div className="space-y-3">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                ユーザー名
              </label>
              <Input
                name="name"
                placeholder="username"
              />
            </div>

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
                type="password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                パスワード（確認）
              </label>
              <Input
                name="confirmPassword"
                placeholder="••••••••"
                type="password"
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
              disabled={!canPress}>登録する</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
