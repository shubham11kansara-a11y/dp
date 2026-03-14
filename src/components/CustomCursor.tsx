import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Motion values for the main cursor
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Springs for smooth following (Web Trail effect)
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail 1 (closer)
    const trail1XSpring = useSpring(cursorX, { damping: 30, stiffness: 400 });
    const trail1YSpring = useSpring(cursorY, { damping: 30, stiffness: 400 });

    // Trail 2 (further)
    const trail2XSpring = useSpring(cursorX, { damping: 40, stiffness: 200 });
    const trail2YSpring = useSpring(cursorY, { damping: 40, stiffness: 200 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="cursor-main"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
            {/* Trail point 1 */}
            <motion.div
                className="cursor-trail trail-1"
                style={{
                    x: trail1XSpring,
                    y: trail1YSpring,
                }}
            />
            {/* Trail point 2 */}
            <motion.div
                className="cursor-trail trail-2"
                style={{
                    x: trail2XSpring,
                    y: trail2YSpring,
                }}
            />
        </>
    );
};

export default CustomCursor;
