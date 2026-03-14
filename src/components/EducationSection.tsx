import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './EducationSection.css';

const courses = [
    "Antenna Design", "Modern Semiconductor", "Control Systems",
    "Signal Processing", "Digital Communication", "VLSI and ASIC",
    "Machine Learning", "Computer Architecture"
];

const EducationSection: React.FC = () => {
    return (
        <section id="education" className="section-container education-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Education</h2>

                <div className="timeline-container">
                    <div className="timeline-line" />

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="timeline-dot">
                            <GraduationCap size={24} />
                        </div>

                        <div className="timeline-content comic-panel">
                            <div className="timeline-header">
                                <h3>Pandit Deendayal Energy University (PDEU)</h3>
                                <span className="timeline-date">July 2023 – May 2027</span>
                            </div>
                            <h4 className="timeline-degree">Bachelor of Technology – Electronics and Communication Engineering</h4>
                            <p className="timeline-gpa"><strong>CGPA:</strong> 6.50/10</p>

                            <div className="coursework-section">
                                <strong>Relevant Coursework:</strong>
                                <ul className="course-tags">
                                    {courses.map(course => (
                                        <motion.li
                                            key={course}
                                            className="course-tag"
                                            whileHover={{ scale: 1.05, borderColor: 'var(--spider-red)', color: 'var(--text-primary)' }}
                                        >
                                            {course}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default EducationSection;
