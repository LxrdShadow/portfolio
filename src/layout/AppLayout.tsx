"use client";

import NavLink from "@/components/NavLink";
import {
    Contact,
    FileUser,
    GraduationCap,
    LaptopMinimal,
    Moon,
    Sun,
    X,
    Menu,
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
    const [isOpen, setIsOpen] = useState(false);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return (
        <div className="min-h-screen grid grid-rows-[3rem_1fr] font-[family-name:var(--font-jetbrains-mono)] text-txt-light dark:text-txt-dark">
            <header className="flex justify-between py-2 px-10 sm:px-20 md:px-32">
                <h1
                    className="text-2xl text-left cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    Shadow.dev
                </h1>
                <div className="hidden lg:flex justify-center gap-8">
                    <NavLink
                        title="Projects"
                        icon={<LaptopMinimal />}
                        href="/projects"
                    />
                    <NavLink
                        title="About me"
                        icon={<FileUser />}
                        href="/about-me"
                    />
                    <NavLink
                        title="Contact"
                        icon={<Contact />}
                        href="/contact"
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        ref={ref}
                        className="cursor-pointer dark:text-white"
                        onClick={() => {
                            toggleSwitchTheme();
                        }}
                    >
                        {hasMounted && (isDarkMode ? <Moon /> : <Sun />)}
                    </button>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark flex flex-col items-center gap-4 py-4 md:hidden shadow-lg border-t">
                        <NavLink
                            title="Projects"
                            icon={<LaptopMinimal />}
                            href="/projects"
                        />
                        <NavLink
                            title="About me"
                            icon={<FileUser />}
                            href="/about-me"
                        />
                        <NavLink
                            title="Contact"
                            icon={<Contact />}
                            href="/contact"
                        />
                    </div>
                )}
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
