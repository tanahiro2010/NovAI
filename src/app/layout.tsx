import type { Metadata } from "next";
import "@/styles/globals.css";

import { Mochiy_Pop_P_One } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/header";
import Footer from "@/components/footer";


const MochiyPopPOne = Mochiy_Pop_P_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NovAI / 小説執筆をAIがサポートしてくれるサービス",
    template: "%s / NovAI"
  },
  description: "NovAIは、AIがあなたの小説執筆をサポートする革新的なサービスです。プロットの構築、文章の推敲、キャラクター設定まで、創作のすべての段階でAIがあなたのパートナーとなります。",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

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
      <Analytics />
      </body>
    </html>
  );
}
