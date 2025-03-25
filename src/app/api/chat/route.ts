import { NextResponse } from 'next/server';
import { cohere } from '@/lib/cohere';

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        const response = await cohere.chat({
            model: 'command-r-plus',
            messages: [
                {
                    role: "system",
                    content: `あなたは日本人の小説執筆のエキスパートAIアシスタントです。
            ユーザーの小説執筆をサポートし、プロットの構築、キャラクター設定、文章の推敲などについてアドバイスを提供します。
            常に建設的で具体的なアドバイスを心がけ、ユーザーの創作意欲を高めることを目指します。`
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            temperature: 0.7,
        });

        return NextResponse.json({
            message: (response.message.content ?? [])[0].text
        });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'チャットの処理中にエラーが発生しました' },
            { status: 500 }
        );
    }
} 