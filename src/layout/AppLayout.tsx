"use client";

import NavLink from "@/components/NavLink";
import {
    Contact,
    FileUser,
    LaptopMinimal,
    Moon,
    Sun,
    X,
    Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    ThemeAnimationType,
    useModeAnimation,
} from "react-theme-switch-animation";
import "@/styles/stars.css";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
        animationType: ThemeAnimationType.BLUR_CIRCLE,
    });
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return (
        <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-jetbrains-mono)] text-txt-light dark:text-txt-dark">
            <div className="bg-animation absolute min-h-screen min-w-screen z-[-100]">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <header className="flex flex-col justify-between py-2 sm:px-20 md:px-32">
                <div className="flex justify-between px-10">
                    <h1
                        className="text-2xl text-left cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        Shadow.dev
                    </h1>
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
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
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
                    </div>
                </div>
                <div className="hidden md:flex justify-center my-4 py-4 gap-8">
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
