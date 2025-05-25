'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { variants } from '@/lib/motion';

export const useMotion = (motionType = 'fadeIn') => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const variant = variants[motionType];

    if (isInView) {
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
  }, [isInView, motionType]);

  return ref;
}; 