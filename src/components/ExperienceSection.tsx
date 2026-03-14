import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './ExperienceSection.css';

const tasks = [
    "Worked with PID control and closed-loop process control",
    "Observed PLC-based industrial automation systems",
    "Studied ladder logic and control panel wiring",
    "Interpreted P&ID diagrams for process instrumentation",
    "Learned industrial safety and grounding practices"
];

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="section-container experience-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Experience</h2>

                <div className="cards-container">
                    <motion.div
                        className="exp-card comic-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="exp-card-header">
                            <div className="exp-icon-container">
                                <Briefcase size={28} className="exp-icon" />
                            </div>
                            <div className="exp-titles">
                                <h3>Electronics and Instrumentation Intern</h3>
                                <h4>Aarti Industries</h4>
                            </div>
                            <div className="exp-date">
                                May 2025 – July 2025
                            </div>
                        </div>

                        <div className="exp-body">
                            <p className="responsibilities-title"><strong>Key Responsibilities:</strong></p>
                            <ul className="responsibilities-list">
                                {tasks.map((task, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                    >
                                        <span className="web-bullet" />
                                        {task}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        {/* Background Web Decal */}
                        <div className="exp-web-decal" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ExperienceSection;
