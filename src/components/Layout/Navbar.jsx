import { useEffect, useState } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav
            className={`
                fixed
                top-6
                left-1/2
                -translate-x-1/2
                z-50
                transition-all
                duration-500
                ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8 pointer-events-none"
                }
            `}
        >
            <div
                className="
                    flex
                    items-center
                    gap-6
                    px-6
                    py-3
                    rounded-full
                    border
                    border-white/10
                    bg-black/70
                    backdrop-blur-md
                "
            >
                <button
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })}
                    className="text-sm font-semibold tracking-wider text-white"
                >
                    SK
                </button>

                <button
                    onClick={() => scrollToSection("about")}
                    className="text-white/60 hover:text-white transition"
                >
                    About
                </button>

                <button
                    onClick={() => scrollToSection("projects")}
                    className="text-white/60 hover:text-white transition"
                >
                    Projects
                </button>

                <button
                    onClick={() => scrollToSection("skills")}
                    className="text-white/60 hover:text-white transition"
                >
                    Skills
                </button>

                <button
                    onClick={() => scrollToSection("experience")}
                    className="text-white/60 hover:text-white transition"
                >
                    Experience
                </button>

                <button
                    onClick={() => scrollToSection("leadership")}
                    className="text-white/60 hover:text-white transition"
                >
                    Leadership
                </button>

                <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white/60 hover:text-white transition"
                >
                    Contact
                </button>

                <a
                    href="/Shravani_Khindre_Software Developer.pdf"
                    download
                    className="text-white/60 hover:text-white transition"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}