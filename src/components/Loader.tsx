import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react'; // Using Shield as a placeholder for a spider logo, can use custom SVG later
import './Loader.css';

interface LoaderProps {
    onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={onLoadingComplete}
        >
            <div className="loader-content">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="spider-logo-container"
                >
                    {/* Custom Spider web SVG drawing animation */}
                    <svg width="100" height="100" viewBox="0 0 100 100" className="spider-web-svg">
                        <motion.path
                            d="M50 10 L50 90 M10 50 L90 50 M20 20 L80 80 M20 80 L80 20"
                            stroke="var(--spider-red)"
                            strokeWidth="2"
                            fill="transparent"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="20"
                            stroke="var(--spider-blue)"
                            strokeWidth="2"
                            fill="transparent"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="35"
                            stroke="var(--spider-web-white)"
                            strokeWidth="1"
                            fill="transparent"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}
                        />
                    </svg>
                </motion.div>

                <motion.h2
                    className="loading-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                >
                    INITIALIZING PROTOCOLS...
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default Loader;
