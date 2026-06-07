import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../Layout/Container";

function ProjectMockup({ projectTitle }) {
    if (projectTitle === "IDEAL") {
        return (
            <div className="w-full aspect-[16/10] bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col font-mono text-[9px] sm:text-xs text-white/50 shadow-2xl shadow-black/80">
                {/* Window Header */}
                <div className="h-8 border-b border-white/10 px-4 flex items-center justify-between bg-white/[0.02] select-none">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] tracking-wide text-white/30 truncate max-w-[200px] sm:max-w-none">ideal-workspace / src/App.tsx</span>
                    <span className="w-6" />
                </div>
                {/* Code Window Content */}
                <div className="flex-1 grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] overflow-hidden">
                    {/* Sidebar */}
                    <div className="border-r border-white/10 p-3 bg-white/[0.01] hidden sm:flex flex-col gap-2 text-[10px] text-white/40 select-none">
                        <div className="text-white/60">📁 src</div>
                        <div className="pl-3">📁 components</div>
                        <div className="pl-6 text-white/80">📄 Editor.tsx</div>
                        <div className="pl-6">📄 Terminal.tsx</div>
                        <div className="pl-3">📁 hooks</div>
                        <div className="pl-3 text-white/60 font-semibold">📄 App.tsx</div>
                        <div className="text-white/40 mt-4">⚙️ package.json</div>
                    </div>
                    {/* Editor & Terminal */}
                    <div className="grid grid-rows-[3fr_2fr] overflow-hidden">
                        {/* Editor */}
                        <div className="p-4 overflow-hidden relative">
                            <span className="absolute right-4 top-4 text-[9px] text-white/30 bg-white/5 px-2 py-0.5 rounded border border-white/10">TypeScript</span>
                            <div className="text-white/80 font-semibold mb-1">{"import { useState } from \"react\";"}</div>
                            <div className="text-white/85">{"const IDEAL = () => {"}</div>
                            <div className="pl-4 text-white/70">{"const [code, setCode] = useState(\"\");"}</div>
                            <div className="pl-4 text-white/50">{"const runCode = async () => {"}</div>
                            <div className="pl-8 text-white/40">{"const res = await api.compile(code);"}</div>
                            <div className="pl-8 text-white/40">{"setOutput(res.data);"}</div>
                            <div className="pl-4">{"};"}</div>
                            <div className="pl-4 text-white/60">{"return <div className=\"ide-layout\">...</div>"}</div>
                            <div className="text-white/85">{"};"}</div>
                        </div>
                        {/* Terminal */}
                        <div className="border-t border-white/10 p-3 bg-black flex flex-col font-mono text-[8px] sm:text-[10px] leading-relaxed text-white/60 overflow-hidden">
                            <div className="text-white/30 border-b border-white/10 pb-1 mb-2 flex items-center justify-between select-none">
                                <span>Terminal</span>
                                <span className="text-white/20">shravani-pc</span>
                            </div>
                            <div className="text-white/85">$ npm run dev</div>
                            <div className="text-white/45">Vite dev server running... [150ms]</div>
                            <div className="text-white/60">&gt; IDEAL: AI Assisted Web IDE compiling...</div>
                            <div className="text-emerald-500/80">✔ Compilation Successful</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (projectTitle === "AttendIQ") {
        return (
            <div className="w-full aspect-[16/10] bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col font-sans text-[10px] sm:text-xs text-white/50 shadow-2xl shadow-black/80">
                {/* Window Header */}
                <div className="h-8 border-b border-white/10 px-4 flex items-center justify-between bg-white/[0.02] select-none">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] tracking-wide text-white/30 truncate max-w-[200px] sm:max-w-none">attendiq-analytics / dashboard</span>
                    <span className="w-6" />
                </div>
                {/* Dashboard layout */}
                <div className="flex-1 grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] overflow-hidden">
                    {/* Sidebar */}
                    <div className="border-r border-white/10 p-3 bg-white/[0.01] hidden sm:flex flex-col gap-3 text-[10px] text-white/40 select-none">
                        <div className="text-white/80 font-medium bg-white/5 px-2 py-1 rounded">📊 Dashboard</div>
                        <div className="pl-2">👥 Students</div>
                        <div className="pl-2">📅 Attendance</div>
                        <div className="pl-2">💡 Groq AI Insights</div>
                        <div className="pl-2">⚙️ Settings</div>
                    </div>
                    {/* Content Panel */}
                    <div className="p-4 overflow-hidden flex flex-col gap-4">
                        {/* Summary Metrics */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="border border-white/10 bg-white/[0.01] p-3 rounded-xl flex flex-col justify-between">
                                <span className="text-[9px] uppercase tracking-wider text-white/40">Attendance rate</span>
                                <span className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">94.8%</span>
                            </div>
                            <div className="border border-white/10 bg-white/[0.01] p-3 rounded-xl flex flex-col justify-between">
                                <span className="text-[9px] uppercase tracking-wider text-white/40">AI Analysis</span>
                                <span className="text-[10px] font-semibold text-white mt-2 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live Insights
                                </span>
                            </div>
                        </div>
                        {/* Weekly Chart */}
                        <div className="flex-1 border border-white/10 bg-white/[0.01] p-3 rounded-xl flex flex-col justify-between overflow-hidden">
                            <span className="text-[9px] uppercase tracking-wider text-white/40">Weekly Trend</span>
                            <div className="h-16 flex items-end gap-1.5 px-2 mt-2 border-b border-white/10">
                                <div className="flex-1 bg-white/10 h-[65%] rounded-t-sm" />
                                <div className="flex-1 bg-white/15 h-[80%] rounded-t-sm" />
                                <div className="flex-1 bg-white/10 h-[75%] rounded-t-sm" />
                                <div className="flex-1 bg-white/20 h-[92%] rounded-t-sm" />
                                <div className="flex-1 bg-white h-[96%] rounded-t-sm" />
                            </div>
                            <div className="flex justify-between text-[8px] text-white/30 px-1 mt-1 font-mono">
                                <span>M</span>
                                <span>T</span>
                                <span>W</span>
                                <span>T</span>
                                <span>F</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (projectTitle === "CityPulse") {
        return (
            <div className="w-full aspect-[16/10] bg-black border border-white/10 rounded-2xl overflow-hidden flex flex-col font-mono text-[9px] sm:text-xs text-white/50 shadow-2xl shadow-black/80">
                {/* Window Header */}
                <div className="h-8 border-b border-white/10 px-4 flex items-center justify-between bg-white/[0.02] select-none">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[10px] tracking-wide text-white/30 truncate max-w-[200px] sm:max-w-none">citypulse-navigation / live-map</span>
                    <span className="w-6" />
                </div>
                {/* Map grid mock */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_150px] overflow-hidden">
                    {/* Visual Area */}
                    <div className="relative border-r border-white/10 bg-white/[0.01] p-4 flex items-center justify-center overflow-hidden">
                        {/* Background Grid */}
                        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-[0.03] pointer-events-none select-none">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div key={i} className="border-r border-b border-white" />
                            ))}
                        </div>
                        {/* Bounding box mock */}
                        <div className="relative w-full h-full border border-white/5 rounded-xl bg-black overflow-hidden flex items-center justify-center">
                            {/* Road pathways */}
                            <div className="absolute w-[80%] h-6 bg-white/5 rounded-full" />
                            <div className="absolute h-[80%] w-6 bg-white/5 rounded-full" />
                            {/* Active detections */}
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
                    {/* Control column */}
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
                className="
                    w-full
                    aspect-[16/10]
                    object-cover
                    rounded-2xl
                    border
                    border-white/10
                    shadow-2xl
                    shadow-black/80
                "
            />

            {images.length > 1 && (
                <div className="flex justify-center gap-3 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`
                                w-2.5
                                h-2.5
                                rounded-full
                                transition-all
                                duration-300
                                ${current === index
                                    ? "bg-white"
                                    : "bg-white/20 hover:bg-white/50"
                                }
                            `}
                        />
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
                    {/* Screenshot / Visual representation */}
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

                    {/* Content */}
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
                                className="
            text-sm
            font-medium
            text-white/60
            hover:text-white
            hover:underline
            transition-colors
            duration-300
            flex
            items-center
            gap-1
        "
                            >
                                GitHub <span className="text-xs">↗</span>
                            </a>

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                text-sm
                font-medium
                text-white/60
                hover:text-white
                hover:underline
                transition-colors
                duration-300
                flex
                items-center
                gap-1
            "
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