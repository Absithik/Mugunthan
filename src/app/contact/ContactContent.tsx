"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ContactContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Shifting',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for reaching out! Our relocation consultant will call you within 15 minutes.');
        console.log(formData);
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-40 pb-20 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl md:text-8xl font-black mb-8">Let's Get You <br /><span className="text-accent underline decoration-white/10">Moving.</span></h1>
                    <p className="text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                        Our logistics experts are ready to plan your perfect relocation. Speak with us today.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Form */}
                        <div className="bg-soft p-12 lg:p-20 rounded-[60px] border border-primary/5 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                <MessageSquare size={200} className="text-primary" />
                            </div>

                            <h3 className="text-4xl font-black text-primary mb-10">Request A Free Quote</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/60">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all font-bold"
                                            placeholder="John Doe"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary/60">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all font-bold"
                                            placeholder="+91 98765 43210"
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/60">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all font-bold"
                                        placeholder="john@example.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/60">Select Service</label>
                                    <select
                                        className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all font-bold appearance-none cursor-pointer"
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option>Shifting</option>
                                        <option>Packing</option>
                                        <option>Loading & Unloading</option>
                                        <option>Transport</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-primary/60">Your Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white border-2 border-primary/5 rounded-2xl px-6 py-4 focus:border-accent outline-none transition-all font-bold resize-none"
                                        placeholder="Tell us about your move..."
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full accent-gradient border-none py-8 text-xl font-black rounded-3xl shadow-xl shadow-accent/20 group">
                                    Submit Request
                                    <Send className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center gap-12">
                            <div className="space-y-4">
                                <h2 className="text-accent font-black uppercase tracking-[0.3em] text-sm">Headquarters</h2>
                                <h3 className="text-5xl font-black text-primary">Salem Main Branch.</h3>
                                <div className="flex gap-4 pt-4">
                                    <MapPin className="text-accent shrink-0" size={32} />
                                    <p className="text-xl text-gray-text font-medium">
                                        Fairlands, Main Road, <br />
                                        Salem, Tamil Nadu 636016
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a href="tel:+919876543210" className="p-8 rounded-[40px] border-2 border-primary/5 hover:border-accent transition-all group">
                                    <Phone className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-primary text-xl">Call Us</h4>
                                    <p className="text-gray-text font-bold">+91 98765 43210</p>
                                </a>
                                <a href="mailto:info@mugunthanpackers.com" className="p-8 rounded-[40px] border-2 border-primary/5 hover:border-accent transition-all group">
                                    <Mail className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-black text-primary text-xl">Email Us</h4>
                                    <p className="text-gray-text font-bold">info@mugunthanpackers.com</p>
                                </a>
                            </div>

                            <div className="p-10 bg-primary rounded-[40px] text-white flex items-center gap-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent">
                                    <Clock size={32} />
                                </div>
                                <div>
                                    <h4 className="font-black text-xl">Operational Hours</h4>
                                    <p className="text-white/60 font-medium tracking-wide">Mon - Sat: 08:00 AM - 09:00 PM</p>
                                    <p className="text-accent font-black text-xs uppercase tracking-widest mt-1">24/7 Emergency Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder - Updated to Salem */}
            <section className="h-[500px] w-full bg-soft grayscale-100 contrast-125 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.562725350315!2d78.14!3d11.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1adbe3f7b7b%3A0xe28f8f2b7b5b5b5b!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                />
            </section>
        </div>
    );
};
