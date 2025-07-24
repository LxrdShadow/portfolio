"use client";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import "@/styles/stars.css";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-dvh flex flex-col font-[family-name:var(--font-jetbrains-mono)] text-txt-light dark:text-txt-dark overflow-hidden">
            {/* Background stars */}
            <div className="bg-animation absolute inset-0 z-[-100]">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>

            {/* Header */}
            <Header />

            {/* Main content area */}
            <main className="flex-1 overflow-y-auto scrollbar-none">
                <section className="grid grid-rows-1 items-center justify-items-center min-h-full p-8 gap-16 sm:px-20 lg:px-40 font-[family-name:var(--font-jetbrains-mono)] dark:text-white">
                    <AnimatePresence mode="wait">{children}</AnimatePresence>
                </section>
            </main>

            {/* Footer */}
            <footer className="p-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Shadow. All rights reserved.
            </footer>
        </div>
    );
}
