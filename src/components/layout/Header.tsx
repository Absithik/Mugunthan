"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Branches', href: '/branches' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'
                }`}
        >
            <div className="container-fluid mx-auto px-6">
                <div className={`flex items-center justify-between px-8 py-4 rounded-3xl transition-all duration-300 ${isScrolled ? 'glass-card' : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Mugunthan Packers & Movers Home">
                        <Image
                            src="/assets/mugundhan_logo.png"
                            alt="Mugunthan Packers & Movers Logo"
                            width={160}
                            height={64}
                            priority
                            className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-black transition-all duration-300 relative group uppercase tracking-widest ${isScrolled || isHome ? 'text-primary' : 'text-white'
                                    } hover:text-accent`}
                            >
                                {link.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-1 bg-accent rounded-full"
                                    whileHover={{ width: '100%' }}
                                />
                            </Link>
                        ))}
                        <div className={`h-4 w-px ${isScrolled || isHome ? 'bg-primary/10' : 'bg-white/20'}`} />
                        <div className="flex flex-col items-end">
                            <a
                                href="tel:+918220800577"
                                className={`flex items-center gap-2 font-black transition-transform hover:scale-105 ${isScrolled || isHome ? 'text-primary' : 'text-white'}`}
                            >
                                <Phone size={16} className="text-secondary" />
                                <span className="text-sm">+91 82208 00577</span>
                            </a>
                            <a
                                href="https://wa.me/918220800577"
                                className="flex items-center gap-1 text-[10px] font-bold text-green-500 hover:text-green-600 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                WhatsApp Chat
                            </a>
                        </div>
                        <Link
                            href="https://wa.me/918220800577"
                            className="bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-secondary/10 text-sm"
                        >
                            Get Free Quote
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled || isHome ? 'text-primary bg-primary/5' : 'text-white bg-white/10'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 mt-4 px-6"
                    >
                        <div className="glass-card rounded-[40px] p-8 flex flex-col items-center gap-6 shadow-2xl border-white/50">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-black text-primary hover:text-accent transition-colors tracking-tighter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl shadow-xl">
                                Get Free Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
