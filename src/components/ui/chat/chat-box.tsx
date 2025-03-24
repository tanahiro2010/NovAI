'use client';

import { useState } from 'react';
import Input from '../setting/input';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface Props {
    onSendMessage: (message: string) => void;
}

export default function ChatBox({ onSendMessage }: Props) {
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                                msg.role === 'user'
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
            <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        name="message"
                        className="flex-1"
                        placeholder="AIに質問する..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
} 