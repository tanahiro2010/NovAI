"use client";
import { HTMLInputTypeAttribute } from "react";

interface Props {
    type?: HTMLInputTypeAttribute;
    name: string;
    className?: string;
    placeholder?: string;
}

export default function Input({ type = "text", name, className, placeholder, ...props }: Props) {
    return (
        <input
            type={ type }
            name={ name }
            className={`mt-2 w-full p-2 px-4 border rounded ${className}`}
            placeholder={ placeholder }
            { ...props }
        />
    );
}