import { skills } from "../../data/portfolioData";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import FadeInSection from "../Layout/FadeInSection";

export default function Skills() {
    const categories = [
        {
            title: "Frontend",
            items: skills.frontend,
        },
        {
            title: "Backend",
            items: skills.backend,
        },
        {
            title: "Database",
            items: skills.database,
        },
        {
            title: "Tools",
            items: skills.tools,
        },
    ];

    return (
        <section
            id="skills"
            className="py-28 md:py-36 lg:py-44 border-b border-white/10 bg-black"
        >
            <FadeInSection>


                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Left Column: Title & Description */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <SectionTitle className="mb-4">Skills</SectionTitle>
                            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
                                A curated selection of technical skills, frameworks, databases, and developer utilities that I leverage to build production-grade web products.
                            </p>
                        </div>

                        {/* Right Column: Content Grid */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-20">
                                {categories.map((category) => (
                                    <div
                                        key={category.title}
                                        className="flex flex-col"
                                    >
                                        <h3 className="text-xs tracking-[0.25em] uppercase text-white/40 font-semibold mb-6 border-b border-white/10 pb-3">
                                            {category.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-2.5">
                                            {category.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="
                                                    border
                                                    border-white/10
                                                    bg-white/[0.01]
                                                    px-4
                                                    py-2
                                                    rounded-full
                                                    text-xs
                                                    text-white/80
                                                    transition-all
                                                    duration-300
                                                    hover:bg-white
                                                    hover:text-black
                                                    hover:border-white
                                                    hover:scale-[1.03]
                                                    select-none
                                                "
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </FadeInSection>
        </section>
    );
}