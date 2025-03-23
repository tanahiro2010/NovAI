import Link from "next/link";

interface Props{
    href: string;
    title: string;
    description: string;
}

export default function OptionLink({ href, title, description }: Props) {
    return (
        <Link href={href}>
            <div className="rounded p-3 sm:p-4 text-center border hover:shadow-md transition-shadow bg-white">
                <span className="block text-base sm:text-lg font-medium">{ title }</span>
                <span className="text-sm text-gray-600 hidden sm:block mt-1">{ description }</span>
            </div>
        </Link>
    )
}