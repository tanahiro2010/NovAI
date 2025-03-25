'use client';

import { useState } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface Props {
    onSendMessage: (message: string) => void;
}

export default function AIChatBox({ onSendMessage }: Props) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        // ユーザーメッセージを追加
        const userMessage: Message = { role: 'user', content: message };
        setMessages(prev => [...prev, userMessage]);
        onSendMessage(message);
        setMessage('');
    };

    return (
        <div className="flex flex-col h-full">
            {/* メッセージ表示エリア */}
            <div className="text-2xl">
                Chat
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 ${msg.role === 'user'
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-gray-100 text-gray-900'
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* メッセージ入力フォーム */}
            <form onSubmit={handleSubmit} className="px-2 border-t">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full p-2 border rounded"
                    placeholder="AIに質問する..."
                />
                <button
                    type="submit"
                    className="mt-2 w-full px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                >
                    送信
                </button>
            </form>
        </div>
    );
}