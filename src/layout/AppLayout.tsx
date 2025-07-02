"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useModeAnimation } from "react-theme-switch-animation";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    return (
        <div className="min-h-screen grid grid-rows-[2.5rem_1fr]">
            <header className="flex items-center justify-end px-4">
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
