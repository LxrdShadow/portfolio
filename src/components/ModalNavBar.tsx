import { Transition, TransitionChild } from "@headlessui/react";
import React, { useEffect, useRef } from "react";

type Props = {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    className: string;
};

const ModalNavBar = ({ isOpen = true, setOpen, className = "" }: Props) => {
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };
        const handleClickOutside = (e: Event) => {
            if (
                selectRef.current &&
                !selectRef?.current?.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("keydown", handleEscape);
        };
    });

    return (
        <Transition show={isOpen} as={React.Fragment}>
            <TransitionChild
                as={React.Fragment}
                enter="transform transition duration-300 ease-out"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transform transition duration-200 ease-in"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
            >
                <div
                    ref={selectRef}
                    className={`scale-90 flex flex-col items-center justify-center gap-4 w-max rounded-lg bg-bck-light dark:bg-bck-dark shadow-sm px-3 py-2 border border-stone-200 dark:border-accent overflow-hidden ${className}`}
                >
                    Hello world
                </div>
            </TransitionChild>
        </Transition>
    );
};

export default ModalNavBar;
