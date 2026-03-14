import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';
import './ActivitiesSection.css';

const leadershipRoles = [
    {
        org: "ACM Student Chapter – PDEU",
        role: "Event Management Head",
        responsibilities: [
            "Organized workshops on Competitive Programming, LLMs, Cybersecurity",
            "Managed logistics, approvals, budgeting",
            "Led team of 30+ members"
        ]
    },
    {
        org: "ANIRVEDA Techno Economics Club",
        role: "Public Relations Head",
        responsibilities: [
            "Ran publicity campaigns across 50+ colleges",
            "Organized hackathons and technical events",
            "Managed outreach and collaborations"
        ]
    }
];

const ActivitiesSection: React.FC = () => {
    return (
        <section id="activities" className="section-container activities-section">
            <div className="activities-grid">

                {/* Leadership Column */}
                <motion.div
                    className="leadership-col"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Leadership</h2>

                    <div className="leadership-list">
                        {leadershipRoles.map((item, idx) => (
                            <motion.div
                                key={item.org}
                                className="activity-card comic-panel"
                                whileHover={{ y: -5 }}
                            >
                                <div className="activity-icon-floating">
                                    <Users size={20} />
                                </div>
                                <h3>{item.org}</h3>
                                <h4>{item.role}</h4>
                                <ul>
                                    {item.responsibilities.map((resp, rIdx) => (
                                        <li key={rIdx}>{resp}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications Column */}
                <motion.div
                    className="certifications-col"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="section-title">Certifications</h2>

                    <motion.div
                        className="cert-card comic-panel"
                        whileHover={{ scale: 1.02, borderColor: 'var(--spider-blue)' }}
                    >
                        <div className="cert-icon-wrapper">
                            <Award size={36} className="glow-text-blue" color="var(--spider-blue)" />
                        </div>

                        <div className="cert-content">
                            <h3>VLSI Circuits and Systems – Learn by Doing</h3>
                            <p>IIT Kharagpur</p>
                        </div>

                        <div className="cert-web-bg" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default ActivitiesSection;
