"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power4.out",
            });
        };

        const onMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.tagName === 'BUTTON' || target.tagName === 'A') {
                gsap.to(follower, {
                    scale: 3,
                    backgroundColor: "rgba(255, 122, 0, 0.1)",
                    borderColor: "rgba(255, 122, 0, 0.5)",
                    duration: 0.3,
                });
                gsap.to(cursor, {
                    scale: 0.5,
                    backgroundColor: "#FF7A00",
                    duration: 0.3,
                });
            }
        };

        const onMouseLeave = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(10, 37, 64, 0.2)",
                duration: 0.3,
            });
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "#0A2540",
                duration: 0.3,
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll('a, button, .hover-target').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter as any);
            el.addEventListener('mouseleave', onMouseLeave as any);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[999] mix-blend-difference hidden lg:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-primary/20 rounded-full pointer-events-none z-[998] hidden lg:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default CustomCursor;
