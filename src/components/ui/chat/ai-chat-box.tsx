'use client';

import { useState } from 'react';
import Markdown from 'react-markdown';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface Props {
    onSendMessage: (message: string) => Promise<string>;
}

export default function AIChatBox({ onSendMessage }: Props) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        setIsLoading(true);
        try {
            // ユーザーメッセージを追加
            const userMessage: Message = { role: 'user', content: message };
            setMessages(prev => [...prev, userMessage]);
            setMessage('');

            // AIの応答を取得
            const response = await onSendMessage(message);
            
            // AIの応答を追加
            const assistantMessage: Message = { role: 'assistant', content: response.replaceAll('\n', '\n\n') };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            // エラーメッセージを表示
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'すみません、エラーが発生しました。もう一度お試しください。'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* メッセージ表示エリア */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        <p>AIアシスタントに質問してみましょう！</p>
                        <p className="text-sm mt-2">例：</p>
                        <ul className="text-sm mt-1 space-y-1">
                            <li>「主人公の性格設定についてアドバイスをください」</li>
                            <li>「ストーリーの展開で悩んでいます」</li>
                            <li>「この文章をより良くするにはどうすればいいですか？」</li>
                        </ul>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-2 text-sm ${
                                msg.role === 'user'
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-gray-100 text-gray-900'
                            }`}
                        >
                            <Markdown>
                                {msg.content}
                            </Markdown>
                            
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-900 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* メッセージ入力フォーム */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="AIに質問する..."
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors disabled:opacity-50"
                    >
                        送信
                    </button>
                </div>
            </form>
        </div>
    );
} 