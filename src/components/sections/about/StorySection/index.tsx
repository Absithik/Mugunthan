import React from 'react';
import { STORY_CONTENT } from './content';
import { FadeIn } from './animation';

export const StorySection = () => {
    const { tagline, title, paragraphs, image } = STORY_CONTENT;

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn>
                        <div className="space-y-8">
                            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">{tagline}</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                {title}
                            </h3>
                            <div className="space-y-6 text-lg text-gray-text font-medium leading-relaxed">
                                {paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            <div className="rounded-[60px] overflow-hidden shadow-3xl border-[15px] border-soft">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-auto object-cover aspect-[4/5]"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-accent p-12 rounded-[40px] text-white shadow-2xl">
                                <p className="text-6xl font-black">{image.experienceYears}</p>
                                <p className="font-bold uppercase tracking-widest text-sm">Years of Excellence</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
