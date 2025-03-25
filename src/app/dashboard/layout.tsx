import type { Metadata } from "next";
import "@/styles/globals.css";

import { Mochiy_Pop_P_One } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import SessionCheck from "@/components/auth";

const MochiyPopPOne = Mochiy_Pop_P_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovAI / ダッシュボード",
  description: "NovAIのダッシュボードで創作活動を管理しましょう。",
};

export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      
      <div className="flex-grow mt-20 bg-[#FAEBD7]">
        <SessionCheck disableNotLogin={true}>
          <main className="container mx-auto px-4 py-4 max-w-screen-xl">
            {children}
          </main>
        </SessionCheck>
      </div>

      <Toaster />
    </div>
  );
}