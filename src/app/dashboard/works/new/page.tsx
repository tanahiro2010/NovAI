"use client";

import Button from "@/components/ui/setting/button";
import Input from "@/components/ui/setting/input";

export default function NewWork() {

    return (
        <div className="container mx-auto px-4 w-full">
            <div className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">作品作成</h1>
                <p className="text-sm sm:text-base text-gray-600">新しい作品を作成しましょう</p>
            </div>

            <div className="rounded-md bg-white p-4 w-full">
                <div className="text-2xl">
                    小説作成
                </div>

                <Input
                    name="title"
                    placeholder="小説タイトル"
                />

                <div className="flex mt-3">
                    <div className="w-2/3 border-r border-gray-600 p-3">
                        <div className="text-2xl">
                            小説本文
                        </div>
                        <textarea 
                            name="text" 
                            className="mt-2 w-full border rounded p-4 h-[20rem]" 
                            placeholder="本文をここに入力..."
                        />
                    </div>

                    <div className="w-1/3 p-3">
                        <div className="text-2xl">
                            AIChat
                        </div>


                    </div>
                </div>
                
                <Button className="mt-3">
                    保存
                </Button>
            </div>
        </div>
    )
}