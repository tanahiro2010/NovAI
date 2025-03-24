interface Props {
    disabled?: boolean;
    className?: string;
    children: string;
}

export default function Button({ disabled = false, className = "", children, ...props }: Props) {
    return (
        <button type="submit" disabled={ disabled } className={`w-full ${className}`} { ...props }>
            <div className="w-full border border-gray-500 rounded p-3 text-center hover:bg-gray-100">
                { children }
            </div>
        </button>
    )
}