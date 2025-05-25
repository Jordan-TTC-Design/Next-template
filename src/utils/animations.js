'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// 基本動畫變體
export const fadeIn = {
  hidden: { opacity: 0, y: '20%' },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const fadeOut = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

// 動畫變體
export const variants = {
  fadeIn: {
    from: { opacity: 0, y: '50px' },
    to: { opacity: 1, y: '0%' }
  },
  slideUp: {
    from: { opacity: 0, y: '50px' },
    to: { opacity: 1, y: '0px' }
  },
  slideLeft: {
    from: { opacity: 0, x: '50px' },
    to: { opacity: 1, x: '0px' }
  },
  slideRight: {
    from: { opacity: 0, x: '-50px' },
    to: { opacity: 1, x: '0px' }
  },
  scale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 }
  }
};

// 動畫組件
export const MotionElement = ({ type, children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 自定義動畫 Hook
export const useMotionAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-motion]');
    const refs = new Map();

    elements.forEach(element => {
      const ref = { current: element };
      refs.set(element, ref);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        const animationType = element.getAttribute('data-motion');
        const variant = variants[animationType];
        const isLoop = element.getAttribute('data-loop') === 'true';

        if (variant) {
          // 設置 will-change 屬性以優化性能
          element.style.willChange = 'opacity, transform';
          
          if (entry.isIntersecting) {
            element.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = variant.to.opacity;
            element.style.transform = `translate3d(${variant.to.x || '0px'}, ${variant.to.y || '0px'}, 0) scale(${variant.to.scale || 1})`;

            if (isLoop) {
              element.style.animation = `${animationType} 1s infinite alternate`;
            }
          } else {
            element.style.opacity = variant.from.opacity;
            element.style.transform = `translate3d(${variant.from.x || '0px'}, ${variant.from.y || '0px'}, 0) scale(${variant.from.scale || 1})`;
            
            if (isLoop) {
              element.style.animation = 'none';
            }
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -90% 0px'
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return containerRef;
};
