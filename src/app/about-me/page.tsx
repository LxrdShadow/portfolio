"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    "Next.js",
    "TailwindCSS",
    "Python",
    "FastAPI",
    "React",
    "Git",
    "Framer Motion",
    "Linux",
    "SQL",
    "Docker",
];

const interests = [
    "AI & LLMs",
    "Cybersecurity",
    "CLI tools",
    "Minimal UI",
    "Offline apps",
    "Space aesthetics",
    "Open Source",
    "Functional Programming",
    "Productivity Tools",
];

const educationData = [
    {
        year: "2024 - Present",
        title: "3rd year in Computer Science",
        description:
            "Deep diving into advanced web technologies and cybersecurity. Prepairing for the Bachelor's Degree",
    },
    {
        year: "2023 - 2024",
        title: "2nd year in Computer Science",
        description:
            "Going deeper in the programming, networking and cybersecurity rabbit hole.",
    },
    {
        year: "2022 - 2023",
        title: "1st year in Computer Science",
        description: "Computer science basics and funcamentals.",
    },
];

const str =
    "Graduated with honors, cementing a strong foundation in STEM and igniting a fervent interest in software development. Explored early programming concepts and fostered a problem-solving mindset.";

export default function AboutMe() {
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const interestsRef = useRef(null);
    const otherRef = useRef(null);

    const viewConfig = {
        once: true,
        margin: "0px 0px -100px 0px",
        amount: 0.2,
    } as const;

    const isEducationInView = useInView(educationRef, viewConfig);
    const isSkillsInView = useInView(skillsRef, viewConfig);
    const isInterestsInView = useInView(interestsRef, viewConfig);
    const isOtherInView = useInView(otherRef, viewConfig);

    return (
        <div className="space-y-16 lg:space-y-24 max-w-4xl mx-auto py-12 px-4">
            {/* About Me Section */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="text-center sm:text-left min-h-[50vh] flex flex-col justify-center"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-6"
                    variants={listItemVariants}
                >
                    About Me
                </motion.h1>
                <motion.p
                    className="text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0 text-gray-700 dark:text-gray-300"
                    variants={listItemVariants}
                >
                    I&apos;m a{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        Computer Science student
                    </span>{" "}
                    who thrives on bringing ideas to life through code. My
                    journey often feels like navigating a thrilling maze, where
                    passion and the occasional burnout dance a fine line.
                    I&apos;m obsessed with{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        crafting intuitive interfaces
                    </span>
                    , building robust systems from the ground up, and sometimes,
                    just staring at my terminal contemplating the universe (and
                    why my code still has a bug). My philosophy embraces{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        minimalism
                    </span>{" "}
                    in both design and lifestyle, and I confess to an{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        unhealthy obsession with clean folder structures
                    </span>{" "}
                    and perfectly formatted code.
                </motion.p>
            </motion.section>

            {/* Education Section */}
            <motion.section
                ref={educationRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isEducationInView ? "visible" : "hidden"}
                className="relative px-4 sm:px-0 min-h-[50vh]"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-8 text-center sm:text-left"
                    variants={listItemVariants}
                >
                    🎓 Education & Journey
                </motion.h2>

                <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 sm:ml-8 space-y-12">
                    <motion.div
                        className="absolute left-[calc(1.5rem-1px)] sm:left-[calc(2rem-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400"
                        variants={timelineLineVariants}
                    />

                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            className="relative"
                            variants={listItemVariants}
                        >
                            <motion.div
                                className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full left-[-30px] sm:left-[-34px] top-1.5 ring-4 ring-white dark:ring-gray-900 z-10"
                                variants={timelineDotVariants}
                            />
                            <div className="text-left ml-10">
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {edu.year}
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-1">
                                    {edu.title}
                                </h3>
                                <p className="text-md text-gray-700 dark:text-gray-300 mt-1">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                ref={skillsRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isSkillsInView ? "visible" : "hidden"}
                className="px-4 sm:px-0 min-h-[50vh] flex flex-col justify-center"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-6 text-center sm:text-left"
                    variants={listItemVariants}
                >
                    🛠️ Skills
                </motion.h2>
                <motion.ul
                    className="flex flex-wrap gap-3 justify-center sm:justify-start"
                    variants={containerVariants}
                >
                    {skills.map((skill, i) => (
                        <motion.li
                            key={i}
                            className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700 shadow-sm"
                            variants={listItemVariants}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>

            {/* Interests Section */}
            <motion.section
                ref={interestsRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isInterestsInView ? "visible" : "hidden"}
                className="px-4 sm:px-0 min-h-[50vh] flex flex-col justify-center"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-6 text-center sm:text-left"
                    variants={listItemVariants}
                >
                    💡 Interests
                </motion.h2>
                <motion.ul
                    className="flex flex-wrap gap-3 justify-center sm:justify-start"
                    variants={containerVariants}
                >
                    {interests.map((item, i) => (
                        <motion.li
                            key={i}
                            className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-700 shadow-sm"
                            variants={listItemVariants}
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>

            {/* Philosophy Section */}
            <motion.section
                ref={otherRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isOtherInView ? "visible" : "hidden"}
                className="px-4 sm:px-0 text-center sm:text-left min-h-[50vh] flex flex-col justify-center"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-6"
                    variants={listItemVariants}
                >
                    ✨ My Philosophy
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto sm:mx-0 leading-relaxed"
                    variants={listItemVariants}
                >
                    I believe in{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        simplicity
                    </span>
                    ,{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        honesty
                    </span>
                    , and the elusive dream of{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        8 hours of sleep
                    </span>{" "}
                    (a goal, not always a reality!). I build things because the
                    act of{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        creation
                    </span>{" "}
                    truly makes me feel alive in a world that can often feel
                    numb. For me, there&apos;s a profound beauty in code—not
                    just in its functionality, but in its{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        elegance
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        structure
                    </span>
                    .
                </motion.p>
            </motion.section>
        </div>
    );
}

const containerVariants = {
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
} as const;

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 10,
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
} as const;

const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
        },
    },
} as const;

const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2,
        },
    },
} as const;

const timelineLineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
        },
    },
} as const;
