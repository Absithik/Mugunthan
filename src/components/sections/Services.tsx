import React from 'react';

const services = [
    {
        title: 'Home & Office Shifting',
        description: 'Safe, seamless, and hassle-free relocation services for your household or corporate office, ensuring minimal downtime.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        title: 'Premium Packing',
        description: 'Multi-layered protective packing using industry-grade corrugated sheets and bubble wrap to safeguard your valuables.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        title: 'Loading & Unloading',
        description: 'Expert lifting and placement by trained professionals to ensure damage-free handling of heavy furniture and fragile items.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
        ),
    },
    {
        title: 'Safe Transportation',
        description: 'Reliable and timely transportation across India using specialized closed-container vehicles equipped with GPS tracking.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        ),
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-blue-800 font-bold uppercase tracking-wider text-sm">What We Offer</h2>
                    <p className="text-4xl font-extrabold text-gray-900">Premium Packers & Movers Services</p>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
                    <p className="text-gray-600 pt-2">
                        Mugundhan Packers provides end-to-end relocation solutions for homes and businesses. Every move is handled with utmost precision, safety, and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
