'use client';

import React, {useEffect, useRef} from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    pulseSpeed: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationFrameId = useRef<number>(0);
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full screen
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current = {
                x: event.clientX,
                y: event.clientY
            };
        };

        // Create particles
        const initParticles = () => {
            particles.current = [];
            // Increased particle density
            const particleCount = Math.floor(window.innerWidth * window.innerHeight / 5000);

            for (let i = 0; i < particleCount; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    // Much more varied sizes - some very small, some quite large
                    size: Math.random() * 10 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    // Higher opacity for more intense glow
                    opacity: Math.random() * 0.7 + 0.5,
                    pulseSpeed: Math.random() * 0.04 + 0.005
                });
            }
        };

        // Animation
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections between particles
            particles.current.forEach(particle => {
                // Connect to mouse with a stronger glow if close
                const mouseDistance = Math.sqrt(
                    Math.pow(mousePosition.current.x - particle.x, 2) + 
                    Math.pow(mousePosition.current.y - particle.y, 2)
                );
                
                if (mouseDistance < 180) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
                    // Thicker line with more intense glow
                    ctx.lineWidth = 1.5 * (1 - mouseDistance / 180);
                    
                    // Create glowing effect for the line
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#ff0000';
                    ctx.strokeStyle = `rgba(255, 0, 51, ${0.8 * (1 - mouseDistance / 180)})`;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }
            });

            // Now draw the particles with better glow
            particles.current.forEach(particle => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Pulse opacity
                particle.opacity += particle.pulseSpeed;
                if (particle.opacity >= 0.9 || particle.opacity <= 0.4) {
                    particle.pulseSpeed = -particle.pulseSpeed;
                }

                // Enhanced neon glow effect
                ctx.shadowBlur = particle.size * 5;
                ctx.shadowColor = '#ff0000';
                
                // Draw particle with red glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                
                // Strong red center
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 5
                );
                
                // More intense red colors
                gradient.addColorStop(0, `rgba(255, 20, 51, ${particle.opacity + 0.2})`);
                gradient.addColorStop(0.5, `rgba(255, 0, 30, ${particle.opacity * 0.7})`);
                gradient.addColorStop(1, 'rgba(255, 0, 51, 0)');

                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Reset shadow
                ctx.shadowBlur = 0;

                // Reset position if outside canvas
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.x = Math.random() * canvas.width;
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.y = Math.random() * canvas.height;
                }
            });

            animationFrameId.current = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();
        draw();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
        />
    );
} 