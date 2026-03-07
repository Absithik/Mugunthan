import React from 'react';
import { VEHICLE_CONTENT } from './content';
import { FadeIn } from './animation';

export const VehicleSection = () => {
    const { title, description, badge, image } = VEHICLE_CONTENT;

    return (
        <section className="py-24 bg-soft">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <FadeIn>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-primary">{title}</h2>
                        <p className="text-lg text-gray-text font-medium leading-relaxed">
                            {description}
                        </p>
                        <div className="p-8 bg-white rounded-[40px] shadow-xl border border-primary/5">
                            <p className="font-black text-primary text-xl mb-2">{badge.title}</p>
                            <p className="text-gray-text font-bold">{badge.text}</p>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="rounded-[50px] overflow-hidden shadow-3xl">
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-auto"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
