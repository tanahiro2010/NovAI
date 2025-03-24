interface Props {
    type: "button" | "submit";
    disabled: boolean;
    children: string;
}

export default function Button({ type, disabled, children }: Props) {
    return (
        <button
            type={type}
            className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all ${!disabled ? "bg-gradient-to-r from-amber-700 to-amber-500" : "bg-gray-600"}`}
            disabled={disabled}>
            { children }
        </button>
    )
}