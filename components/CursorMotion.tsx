'use client';

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorMotion() {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // FIX: Offset by 500 because the container is 1000px wide
      // This places the exact center of the div at the cursor tip
      mouseX.set(e.clientX - 500);
      mouseY.set(e.clientY - 500);
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
      // Ensure the container is exactly the size you are offsetting for
      className="pointer-events-none fixed top-0 left-0 z-50 h-[1000px] w-[1000px] flex items-center justify-center"
    >
      {/* LARGE AMBIENT LAYER */}
      <div className="absolute h-[600px] w-[600px] bg-primary/5 blur-[150px] rounded-full" />
      
      {/* CORE HOTSPOT */}
      <div className="h-[300px] w-[300px] bg-primary/15 blur-[100px] rounded-full" />
    </motion.div>
  );
}