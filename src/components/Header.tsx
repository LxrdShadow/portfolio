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

const Header = () => {
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
                        {hasMounted && (isDarkMode ? <Sun /> : <Moon />)}
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
                <NavLink title="Contact" icon={<Contact />} href="/contact" />
            </div>
        </header>
    );
};

export default Header;
