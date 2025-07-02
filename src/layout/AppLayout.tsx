"use client";

import NavLink from "@/components/NavLink";
import {
    Contact,
    FileUser,
    GraduationCap,
    LaptopMinimal,
    Moon,
    Sun,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useModeAnimation } from "react-theme-switch-animation";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
    const router = useRouter();

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return (
        <div className="min-h-screen grid grid-rows-[3rem_1fr] font-[family-name:var(--font-jetbrains-mono)] text-txt-light dark:text-txt-dark">
            <header className="flex items-center justify-between py-2 px-4 sm:px-20 md:px-40">
                <h1 className="text-2xl" onClick={() => router.push("/")}>
                    Shadow.dev
                </h1>
                <div className="flex gap-8">
                    <NavLink title="Projects" icon={<LaptopMinimal />} />
                    <NavLink title="About me" icon={<FileUser />} />
                    <NavLink title="Studies" icon={<GraduationCap />} />
                    <NavLink title="Contact" icon={<Contact />} />
                </div>
                <button
                    ref={ref}
                    className="cursor-pointer dark:text-white"
                    onClick={() => {
                        toggleSwitchTheme();
                    }}
                >
                    {hasMounted && (isDarkMode ? <Moon /> : <Sun />)}
                </button>
            </header>
            <main>
                <section className="grid grid-rows-1 items-center justify-items-center h-full px-8 gap-16 sm:px-20 lg:px-40 font-[family-name:var(--font-jetbrains-mono)] dark:text-white">
                    {children}
                </section>
            </main>
            <footer className="p-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Shadow. All rights reserved.
            </footer>
        </div>
    );
}
