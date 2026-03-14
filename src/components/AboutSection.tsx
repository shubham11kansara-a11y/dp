import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, BrainCircuit, MonitorSmartphone } from 'lucide-react';
import './AboutSection.css';

const interests = [
    {
        title: "Electronics",
        description: "Designing and analyzing modern circuits, from basic components to VLSI and ASIC.",
        icon: <Zap size={32} className="interest-icon" />
    },
    {
        title: "Embedded Systems",
        description: "Programming microcontrollers (ESP32, Arduino, Raspberry Pi) to interact with the physical world.",
        icon: <Cpu size={32} className="interest-icon" />
    },
    {
        title: "Machine Learning",
        description: "Integrating intelligent algorithms with hardware to create smart, autonomous systems.",
        icon: <BrainCircuit size={32} className="interest-icon" />
    },
    {
        title: "HW + SW Integration",
        description: "Bridging the gap between physical sensors and software applications for complete IoT solutions.",
        icon: <MonitorSmartphone size={32} className="interest-icon" />
    }
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="section-container about-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text comic-panel">
                        <p>
                            I am an <strong>Electronics & Communication Engineering</strong> student at Pandit Deendayal Energy University,
                            passionate about the intersection of hardware and software. I thrive on building intelligent systems that can perceive
                            and interact with their environment.
                        </p>
                        <p>
                            My journey involves diving deep into modern semiconductor technologies,
                            control systems, and machine learning, applying these concepts to create tangible solutions—like piezoelectric
                            power generation systems and IoT-enabled applications.
                        </p>
                    </div>

                    <div className="interests-grid">
                        {interests.map((interest, idx) => (
                            <motion.div
                                key={interest.title}
                                className="interest-card comic-panel"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="icon-wrapper">
                                    {interest.icon}
                                </div>
                                <h3>{interest.title}</h3>
                                <p>{interest.description}</p>
                                <div className="card-web-decoration" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
