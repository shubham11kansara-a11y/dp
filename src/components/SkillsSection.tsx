import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Cpu } from 'lucide-react';
import './SkillsSection.css';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 size={24} className="category-icon" />,
        skills: ["Python", "C", "JavaScript", "HTML/CSS"],
        color: "var(--spider-red)"
    },
    {
        title: "Tools & Simulation",
        icon: <MonitorPlay size={24} className="category-icon" />,
        skills: ["MATLAB / Simulink", "LTspice", "Proteus", "Tina-TI"],
        color: "var(--spider-blue)"
    },
    {
        title: "Embedded Systems",
        icon: <Cpu size={24} className="category-icon" />,
        skills: ["ESP32", "Arduino", "Raspberry Pi"],
        color: "var(--spider-web-white)"
    }
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="section-container skills-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            className="skill-category-card comic-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <div className="category-header">
                                <div className="category-icon-wrapper" style={{ borderColor: category.color, color: category.color }}>
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill}
                                        className="skill-item"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="skill-name">{skill}</span>
                                        <div className="skill-bar-bg">
                                            <motion.div
                                                className="skill-bar-fill"
                                                style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;
