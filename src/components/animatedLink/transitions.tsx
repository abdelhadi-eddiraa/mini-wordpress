'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

type TransitionProps = {
  children: React.ReactNode;
};

const Transitions = ({ children }: TransitionProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const variants = {
    initial: {
      width: 0, // Start with zero width
    },
    enter: {
      width: '100%', // Animate to full width
      transition: { duration: 0.5 }, // Set animation duration
    },
    exit: {
      width: 0, // Animate back to zero width on exit
      transition: { duration: 0.3 }, // Set exit animation duration
    },
  };

  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      {!animationComplete && (
        <motion.div
          className="absolute inset-x-0 top-0 z-[999] h-1 rounded-md bg-red-400"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          onAnimationComplete={onAnimationComplete}
        />
      )}
      {children}
    </>
  );
};

export default Transitions;
