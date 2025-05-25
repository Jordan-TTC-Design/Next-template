'use client';

import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { variants } from './motion';

export const useMotionObserver = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[motion]');
    
    elements.forEach((element) => {
      const motionType = element.getAttribute('motion');
      if (!motionType || !variants[motionType]) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const variant = variants[motionType];
          if (entry.isIntersecting) {
            element.style.opacity = variant.visible.opacity;
            if (variant.visible.x !== undefined) {
              element.style.transform = `translateX(${variant.visible.x}px)`;
            }
            if (variant.visible.y !== undefined) {
              element.style.transform = `translateY(${variant.visible.y}px)`;
            }
            if (variant.visible.scale !== undefined) {
              element.style.transform = `scale(${variant.visible.scale})`;
            }
          } else {
            element.style.opacity = variant.hidden.opacity;
            if (variant.hidden.x !== undefined) {
              element.style.transform = `translateX(${variant.hidden.x}px)`;
            }
            if (variant.hidden.y !== undefined) {
              element.style.transform = `translateY(${variant.hidden.y}px)`;
            }
            if (variant.hidden.scale !== undefined) {
              element.style.transform = `scale(${variant.hidden.scale})`;
            }
          }
        },
        { threshold: 0.9 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    });
  }, []);
}; 