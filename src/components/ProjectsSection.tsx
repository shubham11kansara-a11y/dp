import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap } from 'lucide-react';
import './ProjectsSection.css';

const projects = [
    {
        title: "Vibration Analyzer Mobile App",
        icon: <Smartphone size={36} className="project-icon" />,
        features: [
            "Built using React Native (Expo) and TypeScript",
            "Captures vibration data using camera/video",
            "Media processing and scalable navigation",
            "Production builds using EAS"
        ],
        accent: "var(--spider-blue)"
    },
    {
        title: "Piezoelectric Power Gen System",
        icon: <Zap size={36} className="project-icon" />,
        features: [
            "Generates 15–20V electricity from footsteps",
            "Rectifier + boost converter for stable 5V output",
            "Arduino-based visual feedback",
            "Simulation using LTspice"
        ],
        accent: "var(--spider-red)"
    }
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="section-container projects-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            className="project-card comic-panel"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                        >
                            <div
                                className="project-card-accent"
                                style={{ backgroundColor: project.accent }}
                            />

                            <div className="project-header">
                                <div className="project-icon-wrapper" style={{ boxShadow: `0 0 15px ${project.accent}50` }}>
                                    {project.icon}
                                </div>
                                <h3>{project.title}</h3>
                            </div>

                            <div className="project-body">
                                <ul className="project-features">
                                    {project.features.map((feature, fIdx) => (
                                        <motion.li
                                            key={fIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + (fIdx * 0.1) }}
                                        >
                                            <span className="feature-dot" style={{ backgroundColor: project.accent }} />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-footer">
                                <motion.button
                                    className="project-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ borderColor: project.accent, color: project.accent }}
                                >
                                    View Details
                                </motion.button>
                            </div>

                            {/* Decorative Web element */}
                            <div className="project-web-bg" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
