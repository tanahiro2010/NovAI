"use client";
import { HTMLInputTypeAttribute, ChangeEvent } from "react";

interface Props {
    type?: HTMLInputTypeAttribute;
    name: string;
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type = "text", name, className, placeholder, value, onChange, ...props }: Props) {
    return (
        <input
            type={ type }
            name={ name }
            className={`mt-2 w-full p-2 px-4 border rounded ${className}`}
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            { ...props }
        />
    );
}