import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import FadeInSection from "../Layout/FadeInSection";
import { contact } from "../../data/portfolioData";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-28 md:py-36 lg:py-44 bg-black"
        >
            <FadeInSection>
                <Container>
                    <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

                        {/* Header */}
                        <SectionTitle className="text-center mb-8 md:mb-10">
                            Let's Build Something
                        </SectionTitle>

                        {/* Sub-description */}
                        <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-xl mb-14 md:mb-16">
                            Interested in collaborating on open source, discussing potential opportunities,
                            or engineering high-performance web products? Let's connect.
                        </p>

                        {/* CTA Links */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                            <a
                                href={`mailto:${contact.email}`}
                                className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                border
                                border-white/10
                                bg-white/[0.01]
                                px-8
                                py-4
                                rounded-full
                                text-sm
                                font-medium
                                tracking-wider
                                hover:bg-white
                                hover:text-black
                                hover:border-white
                                transition-all
                                duration-300
                                w-full
                                sm:w-auto
                                active:scale-95
                                cta-buttons
                            "
                            >
                                <FaEnvelope className="text-xs" />
                                <span>Email</span>
                            </a>

                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                border
                                border-white/10
                                bg-white/[0.01]
                                px-8
                                py-4
                                rounded-full
                                text-sm
                                font-medium
                                tracking-wider
                                hover:bg-white
                                hover:text-black
                                hover:border-white
                                transition-all
                                duration-300
                                w-full
                                sm:w-auto
                                active:scale-95
                            "
                            >
                                <FaGithub className="text-xs" />
                                <span>GitHub</span>
                            </a>

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                border
                                border-white/10
                                bg-white/[0.01]
                                px-8
                                py-4
                                rounded-full
                                text-sm
                                font-medium
                                tracking-wider
                                hover:bg-white
                                hover:text-black
                                hover:border-white
                                transition-all
                                duration-300
                                w-full
                                sm:w-auto
                                active:scale-95
                            "
                            >
                                <FaLinkedin className="text-xs" />
                                <span>LinkedIn</span>
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="w-full mt-32 md:mt-40 lg:mt-48 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs font-light">
                            <p>© 2026 Shravani Khindre. All rights reserved.</p>
                            <p className="font-mono text-[10px] tracking-widest uppercase">Built with React & Tailwind CSS</p>
                        </div>
                    </div>
                </Container>
            </FadeInSection>
        </section>
    );
}