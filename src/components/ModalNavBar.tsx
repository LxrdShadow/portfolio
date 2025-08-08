import { Transition, TransitionChild } from "@headlessui/react";
import React, { useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { Contact, FileUser, Home, LaptopMinimal } from "lucide-react";

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
                    className={`scale-90 flex flex-col justify-center gap-4 w-max rounded-lg bg-bck-light dark:bg-bck-dark shadow-sm p-4 border border-accent overflow-hidden ${className}`}
                >
                    <NavLink title="Home" icon={<Home />} href="/" />
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
            </TransitionChild>
        </Transition>
    );
};

export default ModalNavBar;
