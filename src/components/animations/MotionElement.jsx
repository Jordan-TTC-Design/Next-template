'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { variants } from '@/lib/motion';

const MotionElement = ({ 
  children, 
  as = 'div',
  className = '',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9 });
  const motionType = props['data-motion'] || 'fadeIn';

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[motionType]}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionElement; 