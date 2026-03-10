"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-primary pt-24 pb-12 text-white relative overflow-hidden">
            {/* Anime Style Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-white/10">
                                <Truck size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black font-heading leading-none tracking-tighter">MUGUNTHAN</span>
                                <span className="text-[10px] font-black text-accent tracking-[0.3em] uppercase">Packers & Movers</span>
                            </div>
                        </Link>
                        <p className="text-white/60 font-medium leading-relaxed max-w-xs">
                            Mugunthan Packers & Movers is redefining relocation with a bold, anime-inspired, high-speed experience.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Twitter, label: "Twitter" },
                                { Icon: Linkedin, label: "LinkedIn" }
                            ].map(({ Icon, label }, i) => (
                                <Link key={i} href="#" aria-label={label} className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-black font-heading tracking-tight italic">NAVIGATION</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Branches', href: '/branches' },
                                { name: 'Contact', href: '/contact' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-white font-bold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-black font-heading tracking-tight italic">SERVICE AREAS</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Salem (Fairlands)', href: '/branches' },
                                { name: 'Namakkal', href: '/packers-and-movers-in-namakkal' },
                                { name: 'Erode', href: '/packers-and-movers-in-erode' },
                                { name: 'Dharmapuri', href: '/branches' },
                                { name: 'Chennai', href: '/branches' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-white font-bold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-black font-heading tracking-tight uppercase italic">Contact Us</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-accent shrink-0" />
                                <p className="text-white/60 font-bold leading-relaxed">
                                    Door no.11/265, <br />
                                    Kongupatti, Kadayampatti(Tk), <br />
                                    Salem (Dt), Pin Code-636305
                                </p>
                            </div>
                            <a href="tel:+918220800577" className="flex gap-4 items-center group">
                                <Phone className="text-accent shrink-0" />
                                <span className="text-white/60 group-hover:text-white font-black transition-colors">+91 82208 00577</span>
                            </a>
                            <a href="mailto:mugunthanpackersandmovers@gmail.com" className="flex gap-4 items-center group overflow-hidden">
                                <Mail className="text-accent shrink-0" />
                                <span className="text-white/60 group-hover:text-white font-black text-sm md:text-base break-all transition-colors">mugunthanpackersandmovers@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 text-center text-white/40 text-sm font-bold leading-relaxed">
                    © {new Date().getFullYear()} Mugunthan Packers & Movers. Best Packers and Movers in Salem. Reimagined by <a href="https://nkmoderntechnology.com/" target="_blank" rel="noopener noreferrer" className="inline-block font-black text-white/60 hover:text-accent hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 drop-shadow-lg hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">NK Modern Technology</a>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
