import type { Metadata } from "next";
import "@/styles/globals.css";

import { Mochiy_Pop_P_One } from "next/font/google";
import { isLogin } from "@/lib/auth";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Session } from "@supabase/supabase-js";
import { Toaster } from "@/components/ui/sonner";

const MochiyPopPOne = Mochiy_Pop_P_One({ weight: "400", subsets: ["latin"] });

interface data {
  isLogin: null | Session;
  data: any;
}

export const metadata: Metadata = {
  title: "NovAI / 小説執筆をAIがサポートしてくれるサービス",
  description: "NovAIは、AIがあなたの小説執筆をサポートする革新的なサービスです。プロットの構築、文章の推敲、キャラクター設定まで、創作のすべての段階でAIがあなたのパートナーとなります。",
};

export const data: data = {
  isLogin: null,
  data: {}
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  data.isLogin = await isLogin();

  return (
    <html lang="ja">
      <body className={`bg-[#FAEBD7] ${MochiyPopPOne.className} flex flex-col`}>
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
        <main className="flex-grow mt-20 bg-[#FAEBD7]">
          {children}
        </main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
