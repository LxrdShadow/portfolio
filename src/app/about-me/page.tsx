"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    "Next.js",
    "TypeScript/JavaScript",
    "React",
    "Node.js",
    "Python",
    "TailwindCSS",
    "Git",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "Go",
];

const interests = ["AI & LLMs", "Video games", "Reading", "Music", "Chess"];

const educationData = [
    {
        year: "2024 - Present",
        title: "3rd year in Computer Science",
        description:
            "Deep diving into advanced web technologies and cybersecurity. Explored programming concepts and fostered a problem-solving mindset. Prepairing for the Bachelor's Degree",
    },
    {
        year: "2023 - 2024",
        title: "2nd year in Computer Science",
        description:
            "Going deeper in the programming, networking and cybersecurity rabbit hole. Igniting a fervent interest in software development.",
    },
    {
        year: "2022 - 2023",
        title: "1st year in Computer Science",
        description:
            "Computer science basics and funcamentals, cementing a strong foundation.",
    },
];

// const str =
//     "Graduated with honors, cementing a strong foundation in STEM and igniting a fervent interest in software development. Explored early programming concepts and fostered a problem-solving mindset.";

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

    // Helper function to get skill level for categorized list
    const getSkillLevel = (skill: string) => {
        switch (skill) {
            case "Next.js":
            case "React":
            case "Node.js":
            case "TailwindCSS":
            case "Python":
            case "TypeScript/JavaScript":
            case "Git":
            case "FastAPI":
            case "PostgreSQL":
            case "MySQL":
                return { label: "Proficient", color: "text-green-500" };
            case "Go":
                return { label: "Experienced", color: "text-yellow-300" };
            default:
                return { label: "Familiar", color: "text-gray-500" };
        }
    };

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
                    variants={itemVariants}
                >
                    About Me
                </motion.h1>
                <motion.p
                    className="text-lg leading-relaxed max-w-3xl mx-auto sm:mx-0 text-gray-700 dark:text-gray-300"
                    variants={itemVariants}
                >
                    My name is{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        Idealilalaina ANDRITIANA
                    </span>
                    , you can call me{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        Idealy
                    </span>
                    , and online I sometimes go by{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        Shadow
                    </span>
                    . I&apos;m 20 Years old. I&apos;m a{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        Computer Science student
                    </span>{" "}
                    who finds strange comfort in organized chaos. I like
                    building simple, functional things from{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        user interfaces
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        backend systems
                    </span>
                    , building robust systems from the ground up, and sometimes,
                    just staring at my terminal contemplating the universe (and
                    why my code still has a bug). My philosophy embraces{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        minimalism
                    </span>{" "}
                    , and I may or may not have an{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        unhealthy obsession with clean folder structures
                    </span>{" "}
                    and perfectly formatted code. Between the bugs and burnout,
                    coding still feels like the one place where things might{" "}
                    <span className="font-semibold text-blue-500 dark:text-blue-400">
                        make sense
                    </span>{" "}
                    and that&apos;s why I keep going.
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
                    variants={itemVariants}
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
                            variants={itemVariants}
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
                className="relative px-4 sm:px-0 min-h-[50vh]"
            >
                <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-8 text-center sm:text-left"
                    variants={itemVariants}
                >
                    🛠️ My Skills & Expertise
                </motion.h2>

                {/* 1. Featured Skills with Contextual Descriptions */}
                <motion.div
                    className="space-y-8 mb-12"
                    variants={containerVariants} // Stagger these descriptions
                >
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            Next.js & React
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Building modern and performant web applications.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            FastAPI & Node.js
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Developing robust and scalable backend APIs for web
                            services.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            Tailwind CSS
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Crafting beautiful, responsive, and highly
                            customizable user interfaces.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            Git
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Managing complex codebases and collaborating
                            effectively in team environments.
                        </p>
                    </motion.div>
                </motion.div>

                {/* 2. Categorized Skills with Experience Markers */}
                <motion.h3
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 mt-12 text-center sm:text-left"
                    variants={itemVariants}
                >
                    My Technical Stack
                </motion.h3>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                            Languages & Databases
                        </h4>
                        <ul className="space-y-2">
                            {skills
                                .filter((s) =>
                                    [
                                        "Python",
                                        "Go",
                                        "TypeScript/JavaScript",
                                        "PostgreSQL",
                                        "MySQL",
                                    ].includes(s),
                                )
                                .map((skill, i) => {
                                    const { label, color } =
                                        getSkillLevel(skill);
                                    return (
                                        <motion.li
                                            key={i}
                                            className="flex items-center text-gray-700 dark:text-gray-300"
                                            variants={itemVariants}
                                        >
                                            <span className={`${color} mr-2`}>
                                                ●
                                            </span>{" "}
                                            <strong>{skill}</strong>: {label}
                                        </motion.li>
                                    );
                                })}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                            Frameworks & Libraries
                        </h4>
                        <ul className="space-y-2">
                            {skills
                                .filter((s) =>
                                    [
                                        "Next.js",
                                        "React",
                                        "TailwindCSS",
                                        "FastAPI",
                                        "Node.js",
                                    ].includes(s),
                                )
                                .map((skill, i) => {
                                    const { label, color } =
                                        getSkillLevel(skill);
                                    return (
                                        <motion.li
                                            key={i}
                                            className="flex items-center text-gray-700 dark:text-gray-300"
                                            variants={itemVariants}
                                        >
                                            <span className={`${color} mr-2`}>
                                                ●
                                            </span>{" "}
                                            <strong>{skill}</strong>: {label}
                                        </motion.li>
                                    );
                                })}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                            Tools & Methodologies
                        </h4>
                        <ul className="space-y-2">
                            {skills
                                .filter((s) => ["Git"].includes(s))
                                .map((skill, i) => {
                                    const { label, color } =
                                        getSkillLevel(skill);
                                    return (
                                        <motion.li
                                            key={i}
                                            className="flex items-center text-gray-700 dark:text-gray-300"
                                            variants={itemVariants}
                                        >
                                            <span className={`${color} mr-2`}>
                                                ●
                                            </span>{" "}
                                            <strong>{skill}</strong>: {label}
                                        </motion.li>
                                    );
                                })}
                            {/* Add Linux and Docker explicitly if they are part of your broader skills */}
                            <motion.li
                                className="flex items-center text-gray-700 dark:text-gray-300"
                                variants={itemVariants}
                            >
                                <span className="text-yellow-300 mr-2">●</span>{" "}
                                <strong>Linux</strong>: Experienced
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>
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
                    variants={itemVariants}
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
                            variants={itemVariants}
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
                    variants={itemVariants}
                >
                    ✨ My Philosophy
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto sm:mx-0 leading-relaxed"
                    variants={itemVariants}
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

const itemVariants = {
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
