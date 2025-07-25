"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import PageAnimator from "@/layout/PageAnimator";
import Loader from "@/components/Loader";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
} as const;

export default function ContactPage() {
    const [state, handleSubmit] = useForm("meozgzow"); // your Formspree form ID

    return (
        <PageAnimator animateElements>
            <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-txt-light dark:text-txt-dark mb-4"
                variants={itemVariants}
                initial="hidden"
                animate="show"
            >
                Let&apos;s Connect!
            </motion.h1>

            <motion.p
                className="max-w-xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
                variants={itemVariants}
                initial="hidden"
                animate="show"
            >
                Whether you&apos;re looking to collaborate, discuss an
                opportunity, or just share thoughts on the nuances of modern
                software development, I&apos;m eager to hear from you.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-lg"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={itemVariants}>
                    <Link
                        href="mailto:andritiana.idealy@gmail.com"
                        className="flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent-dark hover:text-txt-light dark:hover:bg-accent-dark dark:hover:text-txt-light transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg"
                    >
                        {/* Email Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email Me
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Link
                        href="https://github.com/LxrdShadow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 border border-txt-light text-txt-light rounded-full hover:bg-bck-dark hover:text-txt-dark dark:border-txt-dark dark:text-txt-dark dark:hover:bg-bck-light dark:hover:text-txt-light transition-all duration-300 ease-in-out font-medium shadow-md hover:shadow-lg"
                    >
                        {/* GitHub Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.676-.233.676-.517 0-.256-.009-1.045-.015-2.052-2.783.612-3.369-1.353-3.369-1.353-.455-1.152-1.11-1.464-1.11-1.464-.91-.617.069-.606.069-.606 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.087 2.913.829.091-.645.352-1.087.641-1.339-2.22-.253-4.555-1.11-4.555-4.93 0-1.088.389-1.979 1.025-2.671-.103-.253-.446-1.268.096-2.647 0 0 .837-.269 2.742 1.025.79-.222 1.634-.333 2.479-.336.843.003 1.687.114 2.479.336 1.903-1.294 2.74-1.025 2.74-1.025.543 1.379.201 2.394.098 2.647.639.692 1.025 1.583 1.025 2.671 0 3.829-2.339 4.673-4.566 4.922.359.309.678.92.678 1.855 0 1.339-.012 2.419-.012 2.747 0 .285.207.608.688.514C20.137 20.198 23 16.444 23 12.017 23 6.484 18.522 2 13 2h-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Visit GitHub
                    </Link>
                </motion.div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
                className="mt-8 w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.h2
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6"
                    variants={itemVariants}
                >
                    Or Send a Message
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        variants={itemVariants}
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />

                    <motion.input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        variants={itemVariants}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <motion.textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        aria-label="Your Message"
                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y h-36 transition duration-200"
                        variants={itemVariants}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <motion.button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full px-8 py-3 cursor-pointer bg-gradient-to-tr from-accent to-accent-1 animate-gradient-rotate text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex justify-center items-center"
                        variants={itemVariants}
                        whileTap={{ scale: 0.98 }}
                    >
                        {state.submitting ? (
                            <Loader variant="simple" size="sm" />
                        ) : (
                            "Send Message"
                        )}
                    </motion.button>
                </form>

                {state.succeeded && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-accent-1 text-sm font-medium"
                    >
                        ✅ Message sent successfully. I’ll get back to you soon!
                    </motion.p>
                )}

                {Object.keys(state.errors).length > 0 && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-red-400 text-sm font-medium"
                    >
                        ❌ Something went wrong. Double check your input or try
                        again later.
                    </motion.p>
                )}
            </motion.div>

            {/* Social links */}
            <motion.div
                className="w-full max-w-md flex-col items-center gap-5"
                variants={itemVariants}
                initial="hidden"
                animate="show"
            >
                <div className="flex justify-center items-center gap-5">
                    <Link
                        href="https://www.facebook.com/profile.php?id=100063562573268"
                        target="_blank"
                    >
                        <Image
                            src="/svg/facebook.svg"
                            alt="facebook-icon"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/lxrd_shadoww?igsh=YWlyZ2hlNzNyYmVj"
                        target="_blank"
                    >
                        <Image
                            src="/svg/instagram.svg"
                            alt="instagram-icon"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/andritiana-idealy-4b6428320"
                        target="_blank"
                    >
                        <Image
                            src="/svg/linkedin.svg"
                            alt="linkedin-icon"
                            width={50}
                            height={50}
                        />
                    </Link>
                    <Link href="https://wa.me/261340161792" target="_blank">
                        <Image
                            src="/svg/whatsapp.svg"
                            alt="whatsapp-icon"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                <Link
                    className="mt-5 flex justify-center items-center gap-3 cursor-pointer"
                    href="tel:+261340161792"
                >
                    <Phone size={16} />
                    <p className="text-sm">+261 34 01 617 92</p>
                </Link>
            </motion.div>
        </PageAnimator>
    );
}
