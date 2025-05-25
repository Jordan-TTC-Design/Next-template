'use client';

import { createContext, useContext, useEffect } from 'react';
import { variants } from '@/lib/motion';

const MotionContext = createContext(null);

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

export default function MotionProvider({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll('[motion]');
    
    elements.forEach((element) => {
      const motionType = element.getAttribute('motion');
      if (!motionType || !variants[motionType]) return;

      // 設置初始狀態
      const variant = variants[motionType];
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

      // 添加過渡效果
      element.style.transition = 'all 0.5s ease-out';

      const observer = new IntersectionObserver(
        ([entry]) => {
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

  return (
    <MotionContext.Provider value={{ variants }}>
      {children}
    </MotionContext.Provider>
  );
} 