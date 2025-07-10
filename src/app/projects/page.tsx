"use client";

import PageAnimator from "@/layout/PageAnimator";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    imageSrc?: string;
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
} as const;

const Projects = () => {
    return (
        <PageAnimator>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {projects.map((project: Project) => (
                    <motion.div key={project.title} variants={itemVariants}>
                        {" "}
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </PageAnimator>
    );
};

export default Projects;
