import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import { motion } from "framer-motion";
import FadeInSection from "../Layout/FadeInSection";
export default function About() {
    return (
        <section
            id="about"
            className="py-28 md:py-36 lg:py-44 border-b border-white/10"
        >
            <FadeInSection>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto bg-[#f5f5f7] text-black rounded-[48px] border border-black/5 px-10 py-12 md:px-16 md:py-16">
                        <h2
                            className="text-center text-5xl md:text-6xl font-bold mb-12 text-black">
                            About Me </h2>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-black/80 text-base md:text-lg leading-relaxed font-light text-justify">
                                I'm a Full Stack Developer with hands-on experience
                                building scalable web applications, AI-assisted
                                platforms, and computer vision systems. My work spans
                                modern frontend development with React, Next.js, and
                                TypeScript, backend engineering with Node.js and
                                Express, and database design using MongoDB and
                                PostgreSQL. I've built projects ranging from an
                                AI-powered web IDE and attendance management platform
                                to a smart traffic navigation system leveraging
                                YOLOv8 and OpenCV. Beyond development, I've led
                                student initiatives as an Event Management Lead and
                                Co-Creative Head, strengthening my collaboration,
                                communication, and leadership skills. I'm currently
                                seeking Software Developer and Full Stack Developer
                                opportunities where I can contribute to meaningful
                                products while continuing to grow as an engineer.
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </FadeInSection>
        </section>
    );
}