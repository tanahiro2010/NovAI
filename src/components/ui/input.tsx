interface Props {
    name: string;
    placeholder: string;
    required?: boolean;
}

export default function Input({ name, placeholder, required = true }: Props) {
    return (
        <input
            name={ name }
            type="text"
            className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
            placeholder={ placeholder }
            required={ required }
        />
    )
}