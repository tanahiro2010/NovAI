import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAEBD7] mt-[10rem]">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">NovAI</h3>
                        <p className="text-gray-600 text-sm">
                            AIがあなたの小説執筆をサポートする革新的なサービス
                        </p>
                    </div>
                    
                    <div className="flex-1 min-w-[150px]">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">サービス</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/features" className="text-gray-600 text-sm hover:text-amber-600">
                                    機能紹介
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-600 text-sm hover:text-amber-600">
                                    料金プラン
                                </Link>
                            </li>
                            <li>
                                <Link href="/tutorial" className="text-gray-600 text-sm hover:text-amber-600">
                                    使い方ガイド
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 min-w-[150px]">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">会社情報</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 text-sm hover:text-amber-600">
                                    会社概要
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-600 text-sm hover:text-amber-600">
                                    プライバシーポリシー
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-600 text-sm hover:text-amber-600">
                                    利用規約
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="flex-1 min-w-[150px]">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">お問い合わせ</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-600 text-sm hover:text-amber-600">
                                    お問い合わせ
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-600 text-sm hover:text-amber-600">
                                    よくある質問
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t text-center">
                    <p className="text-gray-500 text-sm mt-2">
                        © 2024 NovAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 