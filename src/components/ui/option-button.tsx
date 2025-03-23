import Link from "next/link";

interface Props{
    onClick: () => void;
    title: string;
    description: string;
}

export default function OptionButton({ onClick, title, description, ...props }: Props) {
    return (
        <button onClick={onClick}>
            <div className="rounded p-3 sm:p-4 text-center border hover:shadow-md transition-shadow bg-white" {...props}>
                <span className="block text-base sm:text-lg font-medium">{ title }</span>
                <span className="text-sm text-gray-600 hidden sm:block mt-1">{ description }</span>
            </div>
        </button>
    )
}