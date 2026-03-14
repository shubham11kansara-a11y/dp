import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background Web Pattern Overlay */}
            <div className="web-background-overlay" />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name glow-text-red">Shubham Kansara</h1>
                    <h3 className="hero-title">Electronics & Communication Engineering Student</h3>

                    <p className="hero-tagline">
                        Building intelligent systems through electronics, embedded systems, and machine learning.
                    </p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn-primary web-btn">View Projects</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="scroll-text">Scroll to web swing</span>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="scroll-icon" size={32} />
                </motion.div>
                {/* Subtle web thread line */}
                <div className="web-thread" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
