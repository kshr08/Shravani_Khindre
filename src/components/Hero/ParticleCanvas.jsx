import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let particles = [];
        let animationId;

        const mouse = {
            x: null,
            y: null,
            radius: 140,
        };

        class Particle {
            constructor(x, y) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.targetX = x;
                this.targetY = y;

                this.size = 1.5;

                this.vx = 0;
                this.vy = 0;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
            }

            update() {
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        // Spring repulsion
                        this.vx -= Math.cos(angle) * force * 1.8;
                        this.vy -= Math.sin(angle) * force * 1.8;
                    }
                }

                const springX = (this.targetX - this.x) * 0.03;
                const springY = (this.targetY - this.y) * 0.03;

                this.vx += springX;
                this.vy += springY;

                // Friction
                this.vx *= 0.90;
                this.vy *= 0.90;

                this.x += this.vx;
                this.y += this.vy;

                this.draw();
            }
        }

        function resizeCanvas() {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = 300;
            }
        }

        const texts = [
            "SHRAVANI KHINDRE",
            "FULL STACK DEVELOPER",
        ];

        let currentTextIndex = 0;

        function createTextParticles(text) {
            if (!text) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate responsive font size based on parent width and text length
            let fontSize;

            if (canvas.width < 480) {
                fontSize = 28;
            } else if (canvas.width < 768) {
                fontSize = 40;
            } else if (canvas.width < 1024) {
                fontSize = 52;
            } else {
                fontSize = 64;
            }

            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = `800 ${fontSize}px Inter, sans-serif`;

            let textWidth = ctx.measureText(text).width;

            while (textWidth > canvas.width * 0.85 && fontSize > 32) {
                fontSize -= 2;
                ctx.font = `800 ${fontSize}px Inter, sans-serif`;
                textWidth = ctx.measureText(text).width;
            }

            ctx.fillText(
                text,
                canvas.width / 2,
                canvas.height / 2
            );

            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const points = [];
            // Step size of 4-5 px gives a nice balance of density and performance
            let step = 5;

            if (fontSize < 50) {
                step = 2;
            } else if (fontSize < 70) {
                step = 3;
            } else {
                step = 5;
            }

            for (let y = 0; y < imageData.height; y += step) {
                for (let x = 0; x < imageData.width; x += step) {
                    const index = (y * imageData.width + x) * 4;
                    if (imageData.data[index + 3] > 128) {
                        points.push({ x, y });
                    }
                }
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Morph particle count
            if (particles.length === 0) {
                particles = points.map(
                    (point) => new Particle(point.x, point.y)
                );
            } else {
                if (particles.length < points.length) {
                    const diff = points.length - particles.length;
                    for (let i = 0; i < diff; i++) {
                        particles.push(
                            new Particle(
                                canvas.width / 2,
                                canvas.height / 2
                            )
                        );
                    }
                } else if (particles.length > points.length) {
                    particles.length = points.length;
                }

                particles.forEach((particle, idx) => {
                    particle.targetX = points[idx].x;
                    particle.targetY = points[idx].y;
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => particle.update());
            animationId = requestAnimationFrame(animate);
        }

        resizeCanvas();
        createTextParticles(texts[0]);
        animate();

        const intervalId = setInterval(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            createTextParticles(texts[currentTextIndex]);
        }, 6000);

        const handleResize = () => {
            resizeCanvas();
            createTextParticles(texts[currentTextIndex]);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            clearInterval(intervalId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block"
        />
    );
}