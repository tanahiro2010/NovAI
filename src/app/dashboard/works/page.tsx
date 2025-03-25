'use client';

import { useState } from "react";
import AIChatBox from "@/components/ui/chat/ai-chat-box";

export default function Works() {
    const handleSendMessage = async (message: string): Promise<string> => {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-screen-xl h-[calc(100vh-5rem)] flex flex-col">
            <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AIアシスタント</h1>
                <p className="text-sm sm:text-base text-gray-600">プロットや文章の相談ができます</p>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow">
                <AIChatBox onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}