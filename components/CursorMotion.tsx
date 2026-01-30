'use client';

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorMotion() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High damping (35) makes the movement "heavy" and smooth like ambient light
  const springConfig = { damping: 35, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Offset by 300 to center the new 600px circle on your mouse
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="pointer-events-none fixed top-0 left-0 z-50 h-[1000px] w-[1000px] flex items-center justify-center"
    >
      {/* SYREX STYLE LARGE AMBIENT LAYER: 
          - Increased size to 600px
          - Extreme blur (150px) for a soft "airbrushed" feel
          - Very light opacity (/5) so it doesn't look "dark"
      */}
      <div className="absolute inset-0 bg-primary/5 blur-[150px] rounded-full" />
      
      {/* CORE VISIBILITY LAYER:
          - Keeps the "hotspot" visible but subtle
          - Light cyan glow (/15)
      */}
      <div className="h-[300px] w-[300px] bg-primary/15 blur-[100px] rounded-full" />
    </motion.div>
  );
}