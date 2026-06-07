import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../Layout/Container";

function ProjectMockup({ projectTitle }) {
    if (projectTitle === "CityPulse") {
        return (
            <div className="w-full aspect-[16/10] bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col font-mono text-[9px] sm:text-xs text-white/50 shadow-2xl shadow-black/80">
                <div className="h-8 border-b border-white/10 px-4 flex items-center justify-between bg-white/[0.02] select-none">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] tracking-wide text-white/30 truncate max-w-[200px] sm:max-w-none">citypulse-navigation / live-map</span>
                    <span className="w-6" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_150px] overflow-hidden">
                    <div className="relative border-r border-white/10 bg-white/[0.01] p-4 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-[0.03] pointer-events-none select-none">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div key={i} className="border-r border-b border-white" />
                            ))}
                        </div>
                        <div className="relative w-full h-full border border-white/5 rounded-xl bg-black overflow-hidden flex items-center justify-center">
                            <div className="absolute w-[80%] h-6 bg-white/5 rounded-full" />
                            <div className="absolute h-[80%] w-6 bg-white/5 rounded-full" />
                            <div className="absolute top-[20%] left-[25%] border border-white px-2 py-0.5 rounded text-[8px] bg-black/80 font-mono text-white flex items-center gap-1 shadow">
                                <span className="w-1 h-1 rounded-full bg-white" /> Car 98%
                            </div>
                            <div className="absolute bottom-[28%] right-[20%] border border-white px-2 py-0.5 rounded text-[8px] bg-black/80 font-mono text-white/90 flex items-center gap-1 shadow">
                                <span className="w-1 h-1 rounded-full bg-white" /> Bus 94%
                            </div>
                            <div className="absolute top-[45%] right-[35%] border border-white/40 px-2 py-0.5 rounded text-[8px] bg-black/80 font-mono text-white/70 flex items-center gap-1 shadow animate-pulse">
                                <span className="w-1 h-1 rounded-full bg-white animate-ping" /> Delay Detected
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-white/[0.01] hidden md:flex flex-col gap-3 justify-between text-[9px] leading-relaxed">
                        <div className="flex flex-col gap-2">
                            <span className="text-white/30 uppercase tracking-wider text-[8px]">YOLOv8 Stats</span>
                            <div className="border border-white/10 p-2 rounded bg-black flex justify-between">
                                <span>FPS</span>
                                <span className="text-white font-bold">54.2</span>
                            </div>
                            <div className="border border-white/10 p-2 rounded bg-black flex justify-between">
                                <span>Objects</span>
                                <span className="text-white font-bold">28</span>
                            </div>
                        </div>
                        <div className="border border-white/10 p-2 rounded bg-black/40 text-white/40">
                            <span className="text-[7px] text-white/20 uppercase block">GeoDatabase</span>
                            <span className="text-white/60 font-semibold block mt-0.5 truncate">PostGIS Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="w-full aspect-[16/10] bg-black border border-white/10 rounded-2xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest uppercase">{projectTitle}</span>
        </div>
    );
}

function ProjectCarousel({ images, title }) {
    const [current, setCurrent] = useState(0);

    return (
        <div className="w-full">
            <img
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                className="w-full aspect-[16/10] object-cover rounded-2xl border border-white/10 shadow-2xl shadow-black/80" />

            {images.length > 1 && (
                <div className="flex justify-center gap-3 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-white" : "bg-white/20 hover:bg-white/50"}`} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProjectShowcase({
    project,
    index,
    isLast = false,
    reverse = false,
}) {
    return (
        <div className={`w-full py-12 md:py-16 lg:py-20 ${isLast ? '' : 'border-b border-white/5'} ${index % 2 === 1 ? 'bg-white/[0.01]' : 'bg-transparent'}`}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                    <div className={`lg:col-span-7 w-full ${reverse ? "lg:order-2" : ""}`}>
                        <div className="relative group transition-transform duration-500 hover:scale-[1.01]">

                            {project.images && project.images.length > 0 ? (
                                <ProjectCarousel
                                    images={project.images}
                                    title={project.title}
                                />
                            ) : (
                                <ProjectMockup
                                    projectTitle={project.title}
                                />
                            )}

                        </div>
                    </div>

                    <div className={`lg:col-span-5 w-full flex flex-col justify-center ${reverse ? "lg:order-1" : ""}`}>
                        <span className="text-white/30 uppercase tracking-[0.25em] text-xs font-semibold mb-3">
                            Project 0{index + 1}
                        </span>

                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                            {project.title}
                        </h3>

                        <h4 className="text-white/50 text-base md:text-lg font-light mb-6">
                            {project.subtitle}
                        </h4>

                        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
                            {project.description}
                        </p>

                        {/* Tech Stacks */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((item) => (
                                <span
                                    key={item}
                                    className="px-3.5 py-1.5 border border-white/10 bg-white/[0.02] rounded-full text-xs text-white/80 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* Action links */}
                        <div className="flex items-center gap-6">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-white/60 hover:text-white hover:underline transition-colors duration-300 flex items-center gap-1"
                            >
                                GitHub <span className="text-xs">↗</span>
                            </a>

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-medium text-white/60 hover:text-white hover:underline transition-colors duration-300 flex items-center gap-1"
                                >
                                    Live Demo <span className="text-xs">↗</span>
                                </a>
                            )}

                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}