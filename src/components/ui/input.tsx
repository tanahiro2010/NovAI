import { HTMLInputTypeAttribute } from "react";

interface Props {
    name: string;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
}

export default function Input({ name, placeholder, type = "text", required = true }: Props) {
    return (
        <input
            name={ name }
            type={ type }
            className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            placeholder={ placeholder }
            required={ required }
        />
    )
}