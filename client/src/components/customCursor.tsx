import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const smoothX = useSpring(cursorX, { stiffness: 50, damping: 10 });
    const smoothY = useSpring(cursorY, { stiffness: 50, damping: 10 });

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const onMouseMove = (e: MouseEvent) => {
            requestAnimationFrame(() => updateCursorPosition(e));
        };
        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        window.addEventListener("mousemove", onMouseMove);
        document.querySelectorAll("button, a, input").forEach((el) => {
            el.addEventListener("mouseover", handleMouseOver);
            el.addEventListener("mouseout", handleMouseOut);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.querySelectorAll("button, a, input").forEach((el) => {
                el.removeEventListener("mouseover", handleMouseOver);
                el.removeEventListener("mouseout", handleMouseOut);
            });
        };
    }, [cursorX, cursorY]);

    if (typeof window !== "undefined" && "ontouchstart" in window) {
        return null;
    }

    return (
        <>

            <motion.div
                style={{
                    position: "fixed",
                    left: smoothX,
                    top: smoothY,
                    pointerEvents: "none",
                    zIndex: 9999,
                    transform: "translate(-50%, -50%)",
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.8 : 1,
                        backgroundColor: isHovering ? "rgba(100, 149, 237, 0.8)" : "rgba(0, 71, 171, 1)",
                        opacity: isVisible ? 1 : 0,
                        boxShadow: isHovering
                            ? "0px 0px 15px rgb(167, 199, 231)"
                            : "0px 0px 10px rgb(167, 199, 231)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        transition: "opacity 0.2s ease-in-out",
                    }}
                />
            </motion.div>


            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: "fixed",
                        left: smoothX,
                        top: smoothY,
                        pointerEvents: "none",
                        zIndex: 9998 - i,
                        transform: "translate(-50%, -50%)",
                        filter: "blur(4px)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0],
                    }}
                    transition={{
                        duration: 0.5 + i * 0.1,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                >
                    <div
                        style={{
                            width: `${20 - i * 3}px`,
                            height: `${20 - i * 3}px`,
                            borderRadius: "50%",
                            
                            backgroundColor: "rgba(167, 199, 231, 0.3)",
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
};

export default CustomCursor;
