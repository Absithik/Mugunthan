import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { INVENTORY_CONTENT } from './content';
import { FadeIn } from './animation';

export const InventorySection = () => {
    const { icon: Icon, title, description, tags } = INVENTORY_CONTENT;

    return (
        <section className="py-24 bg-primary text-white text-center">
            <div className="container mx-auto px-6 max-w-3xl space-y-8">
                <FadeIn>
                    <Icon className="mx-auto text-accent" size={56} />
                    <h3 className="text-5xl font-black">{title}</h3>
                    <p className="text-xl text-white/50 font-medium">
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {tags.map(tag => (
                            <div key={tag} className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full font-bold">
                                <ShieldCheck size={16} className="text-accent" />
                                {tag}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
