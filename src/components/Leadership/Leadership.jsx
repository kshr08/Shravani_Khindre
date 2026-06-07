import { leadership } from "../../data/portfolioData";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import FadeInSection from "../Layout/FadeInSection";

export default function Leadership() {
    return (
        <section
            id="leadership"
            className="py-28 md:py-36 lg:py-44 border-b border-white/10 bg-[#080808]"
        >
            <FadeInSection>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <SectionTitle className="mb-4">Leadership</SectionTitle>
                            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed max-w-sm">
                                A track record of my leadership and teamwork skills.
                            </p>
                        </div>

                        <div className="lg:col-span-8 max-w-2xl w-full">
                            <div className="relative border-l border-white/10 pl-6 md:pl-8 py-2">
                                {leadership.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative pl-6 md:pl-8 ${index !== leadership.length - 1
                                            ? "pb-12 mb-12 border-b border-white/5"
                                            : ""
                                            }`}
                                    >
                                        <span className="absolute -left-[5px] top-3.5 w-2.5 h-2.5 rounded-full bg-white border border-black shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />

                                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                                            {item.role}
                                        </h3>

                                        <p className="text-white/70 text-base md:text-lg font-light mb-4 mt-1">
                                            {item.organization}
                                        </p>

                                        <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
                                            {item.description}
                                        </p>
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