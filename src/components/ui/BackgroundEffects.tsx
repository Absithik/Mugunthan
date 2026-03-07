"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BackgroundEffects = () => {
    const [mounted, setMounted] = React.useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const ctx = gsap.context(() => {
            gsap.to(".floating-particle", {
                y: "random(-100, 100)",
                x: "random(-50, 50)",
                rotation: "random(-360, 360)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 2,
                    from: "random"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]" />

            {/* Floating Logistics Elements (Subtle SVGs) */}
            {mounted && [...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="floating-particle absolute opacity-[0.05] text-primary"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                >
                    {i % 2 === 0 ? (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M21 8l-9-4-9 4V16l9 4 9-4V8zM12 4v16M3 8l9 4 9-4" />
                        </svg>
                    ) : (
                        <svg width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BackgroundEffects;
