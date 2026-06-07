import { experience } from "../../data/portfolioData";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import FadeInSection from "../Layout/FadeInSection";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28 md:py-36 lg:py-44 border-b border-white/10 bg-[#080808]"
        >
            <FadeInSection>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <SectionTitle className="mb-4">Experience</SectionTitle>
                            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
                                A track record of my professional growth, internship work and responsibilities.
                            </p>
                        </div>

                        <div className="lg:col-span-8 max-w-2xl w-full">
                            <div className="relative border-l border-white/10 pl-6 md:pl-8 py-2">
                                <span className="absolute -left-[5px] top-3.5 w-2.5 h-2.5 rounded-full bg-white border border-black shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />

                                <span className="font-mono text-xs text-white/40 tracking-widest uppercase block mb-2 select-none">
                                    {experience.duration}
                                </span>

                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                                    {experience.role}
                                </h3>

                                <p className="text-white/70 text-base md:text-lg font-light mb-8 mt-1">
                                    {experience.company}
                                </p>

                                <ul className="space-y-4">
                                    {experience.highlights.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-white/70 text-sm md:text-base leading-relaxed font-light flex items-start gap-3"
                                        >
                                            <span className="text-white/30 select-none mt-1.5">—</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </FadeInSection>
        </section>
    );
}