import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import './ContactSection.css';

const contactInfo = [
    {
        icon: <MapPin size={24} />,
        label: "Location",
        value: "Morbi, Gujarat",
        href: null,
        accent: "var(--spider-red)"
    },
    {
        icon: <Phone size={24} />,
        label: "Phone",
        value: "9875185248",
        href: "tel:9875185248",
        accent: "var(--spider-blue)"
    },
    {
        icon: <Mail size={24} />,
        label: "Email",
        value: "kansarashubham2@gmail.com",
        href: "mailto:kansarashubham2@gmail.com",
        accent: "var(--spider-red)"
    },
    {
        icon: <Linkedin size={24} />,
        label: "LinkedIn",
        value: "linkedin.com/in/shubham-kansara",
        href: "https://linkedin.com/in/shubham-kansara",
        accent: "var(--spider-blue)"
    }
];

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="section-container contact-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="contact-wrapper comic-panel"
            >
                <div className="contact-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-tagline">
                        Whether you have a question or just want to say hi, my inbox is always open.
                        Swing by and let's connect!
                    </p>
                </div>

                <div className="contact-grid">
                    {contactInfo.map((info, idx) => {
                        const Content = (
                            <motion.div
                                className="contact-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div
                                    className="contact-icon-web"
                                    style={{ borderColor: info.accent, boxShadow: `0 0 15px ${info.accent}80` }}
                                >
                                    <div className="icon-inner" style={{ color: info.accent }}>
                                        {info.icon}
                                    </div>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">{info.label}</span>
                                    <span className="contact-value">{info.value}</span>
                                </div>
                            </motion.div>
                        );

                        return info.href ? (
                            <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                                {Content}
                            </a>
                        ) : (
                            <div key={info.label} className="contact-link">
                                {Content}
                            </div>
                        );
                    })}
                </div>

                <div className="footer-web-decal">
                    {/* subtle spider web center */}
                    <div className="spider-center" />
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
