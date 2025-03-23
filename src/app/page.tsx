import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-[8rem] sm:h-[10rem] flex justify-center items-center">
      <h1 className="text-[32px] sm:text-[50px] bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in-out]">
        NovAI
      </h1>
    </div>

    <div className="mt-3 sm:mt-5 max-w-4xl mx-auto px-4">
      <div className="space-y-6 sm:space-y-8 animate-[fadeIn_1s_ease-in-out_0.5s]">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          NovAIは、AIがあなたの小説執筆をサポートする革新的なサービスです。アイデアの展開から文章の推敲まで、創作のすべての段階でAIがあなたのパートナーとなります。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 mb-2 sm:mb-3">ストーリー展開のサポート</h3>
            <p className="text-sm sm:text-base text-gray-600">プロットの構築や展開の提案、キャラクター設定のアドバイスを提供します。</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 mb-2 sm:mb-3">文章の推敲</h3>
            <p className="text-sm sm:text-base text-gray-600">文章の流れや表現の改善、誤字脱字のチェックをサポートします。</p>
          </div>
          
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-base sm:text-lg font-semibold text-amber-700 mb-2 sm:mb-3">創作のインスピレーション</h3>
            <p className="text-sm sm:text-base text-gray-600">アイデアが行き詰まった時、新しい発想や展開のヒントを提案します。</p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link href={"/dashboard"} className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-700 to-amber-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base">
            創作を始める
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
