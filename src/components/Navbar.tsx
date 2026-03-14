import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
                <div className="nav-container">
                    <div className="logo-container">
                        <span className="logo-text">S.K</span>
                        <div className="logo-glow" />
                    </div>

                    {/* Desktop Nav */}
                    <ul className="nav-links desktop-nav">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                    <span className="link-web-effect" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle (Web Shooter style) */}
                    <div
                        className={`mobile-toggle ${activeMenu ? 'active' : ''}`}
                        onClick={() => setActiveMenu(!activeMenu)}
                    >
                        <div className="shooter-core" />
                        <div className={`shooter-ring ${activeMenu ? 'spin' : ''}`} />
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        className="mobile-nav-overlay"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setActiveMenu(false)}
                                        className="mobile-nav-link"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
