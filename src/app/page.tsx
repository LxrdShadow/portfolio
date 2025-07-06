"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageAnimator from "@/layout/PageAnimator";

export default function Home() {
    const [name, setName] = useState("Shadow");

    useEffect(() => {
        const names = ["Shadow", "Idealy"];
        let currentIndex = 0;

        const changeUsername = () => {
            const targetName = names[currentIndex];
            let currentText = "";
            let i = 0;

            const interval = setInterval(() => {
                currentText = targetName
                    .split("")
                    .map((letter, index) =>
                        index <= i
                            ? letter
                            : String.fromCharCode(
                                  97 + Math.floor(Math.random() * 26),
                              ),
                    )
                    .join("");
                setName(currentText);

                i++;
                if (i === targetName.length) {
                    clearInterval(interval);

                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % names.length;
                        changeUsername();
                    }, 2000);
                }
            }, 70);
        };

        changeUsername();
    }, []);

    return (
        <PageAnimator>
            <h2 className="text-6xl font-bold sm:ml-8">
                Hey, I&apos;m{" "}
                <span className="animate-gradient-rotate text-transparent bg-clip-text bg-gradient-to-tr from-accent-1 to-accent">
                    {name}
                </span>{" "}
                <span className="text-6xl animate-[simple-wave-animation_3s_infinite] md:animate-[wave-animation_3.3s_infinite] origin-[70%_70%] inline-block select-none">
                    👋
                </span>
            </h2>

            {/*<span className="text-6xl origin-[70%_70%]">👋</span>*/}
            <p className="text-lg max-w-xl mx-auto dark:text-gray-300 text-gray-600">
                CS student with a love-hate relationship with semicolons and
                life itself. Passionate about web tech, machine learning,
                security, and doing cool stuff with code.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <Link
                    href="/about-me"
                    className="flex justify-center items-center outline-none px-6 py-2 mt-4 bg-txt-light dark:bg-txt-dark text-txt-dark dark:text-txt-light border border-txt-light dark:border-txt-dark rounded hover:bg-txt-dark dark:hover:bg-txt-light hover:text-txt-light dark:hover:text-txt-dark transition cursor-pointer"
                >
                    <p>My resume</p>
                </Link>
                <Link
                    href="/contact"
                    className="flex justify-center items-center outline-none px-6 py-2 mt-4 border border-txt-light dark:border-txt-dark rounded hover:bg-bck-dark dark:hover:bg-bck-light hover:text-txt-dark dark:hover:text-txt-light transition cursor-pointer"
                >
                    <p>Let&apos;s Connect</p>
                </Link>
            </div>
        </PageAnimator>
    );
}
