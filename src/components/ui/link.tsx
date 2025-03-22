import Link from "next/link";

interface AProps {
    href: string;
    children: any;
}

export default function A({ href, children, ...props }: AProps) {
    return (
        <Link href={href} className="hover:text-blue-600 hover:underline" { ...props } >
            { children }
        </Link>
    );
}