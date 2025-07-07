import PageAnimator from "@/layout/PageAnimator";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

type Project = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    imageSrc?: string;
};

const Projects = () => {
    return (
        <PageAnimator>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: Project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </PageAnimator>
    );
};

export default Projects;
