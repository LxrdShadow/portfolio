"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
} as const;

const PageAnimator = ({
    children,
    animateElements = false,
}: Readonly<{
    children: React.ReactNode;
    animateElements?: boolean;
}>) => {
    const divAttributes = {
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.4 },
        ...(animateElements
            ? {
                  variants: containerVariants,
                  initial: "hidden",
                  animate: "show",
              }
            : {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
              }),
        className:
            "flex-1 flex flex-col items-center justify-center text-center space-y-8",
    };

    return <motion.div {...divAttributes}>{children}</motion.div>;
};

export default PageAnimator;
