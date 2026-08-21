import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";

export default function Hero() {
    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black px-6">

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-[150px] md:h-[220px] mb-10 md:mb-14 select-none"
                >
                    <ParticleCanvas />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl text-white/70 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-14 md:mb-16 px-4"
                >
                    Building AI-assisted applications, scalable backend systems,
                    and modern, premium web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
                >
                    <div className="hero-buttons">
                        <button
                            onClick={scrollToProjects}
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/[0.02] text-white rounded-full font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/5 active:scale-95"
                        >
                            View Projects
                        </button>

                        <a
                            href="/Shravani_Khindre_Software Developer.pdf"
                            download
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/[0.02] text-white rounded-full font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-center active:scale-95"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1, delay: 1 }}
                onClick={scrollToAbout}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer animate-bounce focus:outline-none"
                aria-label="Scroll down to about"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.button>
        </section>
    );
}