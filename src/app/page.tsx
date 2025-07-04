"use client";
import { useEffect, useState } from "react";

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
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
            <h2 className="text-6xl font-bold sm:ml-8">
                Hey, I&apos;m{" "}
                <span className="animate-gradient-rotate text-transparent bg-clip-text bg-gradient-to-tr from-accent-1 to-accent">
                    {name}
                </span>{" "}
                <span
                    className="text-6xl origin[70%_70%] select-none"
                    id="wave"
                >
                    👋
                </span>
            </h2>

            {/*<span className="text-6xl origin-[70%_70%]">👋</span>*/}
            <p className="text-lg max-w-xl mx-auto dark:text-gray-300 text-gray-600">
                CS student with a love-hate relationship with semicolons and
                life itself. Passionate about web tech, machine learning,
                security, and doing cool stuff with code.
            </p>
            <div className="flex gap-4">
                <a
                    // href="/contact"
                    className="outline-none inline-block px-6 py-2 mt-4 bg-txt-light dark:bg-txt-dark text-txt-dark dark:text-txt-light border border-txt-light dark:border-txt-dark rounded hover:bg-txt-dark dark:hover:bg-txt-light hover:text-txt-light dark:hover:text-txt-dark transition cursor-pointer"
                >
                    My resume
                </a>
                <a
                    href="/contact"
                    className="outline-none inline-block px-6 py-2 mt-4 border border-black dark:border-white rounded hover:bg-black dark:hover:bg-white hover:text-gray-200 dark:hover:text-black transition cursor-pointer"
                >
                    Let&apos;s Connect
                </a>
            </div>
        </div>
    );
}
