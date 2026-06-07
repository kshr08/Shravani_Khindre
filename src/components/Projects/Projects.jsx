import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import { featuredProjects } from "../../data/portfolioData";
import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 md:py-36 lg:py-44 border-b border-white/10 bg-[#080808]"
        >
            {/* Standard aligned header container */}
            <Container className="mb-12 md:mb-16">
                <SectionTitle>Featured Projects</SectionTitle>
            </Container>

            {/* Full-width showcase items separated by spacing */}
            <div className="flex flex-col gap-6 md:gap-10">
                {featuredProjects.map((project, index) => (
                    <ProjectShowcase
                        key={project.title}
                        project={project}
                        index={index}
                        isLast={index === featuredProjects.length - 1}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
}