"use client";

import Link from "next/link";

type Props = {
    title: string;
    icon?: React.ReactNode;
    href: string;
};

function NavLink({ title, icon, href }: Props) {
    return (
        <Link
            className="hover:underline text-txt-light dark:text-txt-dark flex items-center gap-2 cursor-pointer"
            href={href}
        >
            {icon}
            <p>{title}</p>
        </Link>
    );
}

export default NavLink;
