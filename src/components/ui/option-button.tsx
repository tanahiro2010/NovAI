'use client';

import Link from "next/link";

interface Props {
    onClick: () => void;
    title: string;
    description: string;
    className?: string;
}

export default function OptionButton({ onClick, title, description, className = '', ...props }: Props) {
    return (
        <button onClick={onClick} className="w-full">
            <div className={`rounded p-3 sm:p-4 text-center border hover:shadow-md transition-shadow bg-white cursor-pointer hover:bg-amber-50 ${className}`} {...props}>
                <span className="block text-base sm:text-lg font-medium text-gray-900">{ title }</span>
                <span className="text-sm text-gray-600 hidden sm:block mt-1">{ description }</span>
            </div>
        </button>
    )
}