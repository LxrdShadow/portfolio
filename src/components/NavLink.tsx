"use client";

import { useRouter } from "next/navigation";

type Props = {
    title: string;
    icon?: React.ReactNode;
    href: string;
};

function NavLink({ title, icon, href }: Props) {
    const router = useRouter();

    return (
        <a
            className="hover:underline text-txt-light dark:text-txt-dark flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => router.push(href)}
        >
            {icon}
            <p>{title}</p>
        </a>
    );
}

export default NavLink;
