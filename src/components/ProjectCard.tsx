"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ExternalLinkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="ml-1 h-3 w-3 inline-block align-middle"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
    </svg>
);

interface ProjectCardProps {
    title: string;
    description: string;
    tech?: string[];
    link?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function ProjectCard({
    title,
    description,
    tech = [],
    link,
    imageSrc,
    imageAlt = "",
}: ProjectCardProps) {
    const cardContent = (
        <>
            {imageSrc ? (
                <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                        src={imageSrc}
                        alt={imageAlt || `${title} project screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                </div>
            ) : (
                <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600">
                    No Image Available
                </div>
            )}

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>

                {tech.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                        {tech.map((t, idx) => (
                            <li
                                key={idx}
                                className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}

                {link && (
                    <Link
                        href={link}
                        target="_blank"
                        className="inline-block text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline transition-all duration-200 cursor-pointer"
                    >
                        View Project <ExternalLinkIcon />
                    </Link>
                )}
            </div>
        </>
    );

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-bck-light dark:bg-bck-dark hover:bg-bck-light-1 dark:hover:bg-bck-dark-1 transition-colors duration-200 flex flex-col shadow-sm hover:shadow-md"
        >
            {cardContent}
        </motion.div>
    );
}
