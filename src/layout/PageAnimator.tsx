"use client";

import { motion } from "framer-motion";

const PageAnimator = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
        >
            {children}
        </motion.div>
    );
};

export default PageAnimator;
