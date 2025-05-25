'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef } from 'react';

// 預設動畫配置
const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 10 }
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(10px)' }
  }
};

const MotionEl = forwardRef(({
  as = 'div',
  animation = 'fadeIn',
  children,
  delay = 0,
  duration = 0.6,
  ease = 'easeOut',
  once = false,
  exitAnimation = false,
  threshold = 0.1,
  margin = '-100px',
  custom,
  className,
  style,
  onAnimationStart,
  onAnimationComplete,
  ...props
}, ref) => {
  const internalRef = useRef(null);
  const elementRef = ref || internalRef;
  
  // 使用兩個獨立的 useInView 來控制進入和退出動畫
  const isInView = useInView(elementRef, {
    once,
    margin: '0px 0px -20px 0px', // 只監控下方進入
    amount: threshold
  });

  const isExiting = useInView(elementRef, {
    once: false,
    margin: '0px 0px 0px 0px', // 監控整個視窗
    amount: 0
  });

  // 動畫配置
  const animationConfig = custom || animationPresets[animation] || animationPresets.fadeIn;
  
  // 過渡效果配置
  const transition = {
    duration,
    delay,
    ease: ease === 'spring' ? 'easeInOut' : ease,
    type: ease === 'spring' ? 'spring' : 'tween',
    ...(ease === 'spring' && {
      damping: 20,
      stiffness: 100
    })
  };

  // 決定當前動畫狀態
  const getAnimateState = () => {
    if (once) {
      return isInView ? animationConfig.animate : animationConfig.initial;
    } else {
      if (exitAnimation) {
        // 檢查元素是否在視窗上方
        const rect = elementRef.current?.getBoundingClientRect();
        const isAboveViewport = rect ? rect.bottom < 0 : false;
        
        if (isAboveViewport) {
          return animationConfig.initial; // 上方離開時無動畫
        }
        
        // 從下方離開時使用退出動畫
        return isExiting ? animationConfig.animate : animationConfig.exit;
      } else {
        // 檢查元素是否在視窗上方
        const rect = elementRef.current?.getBoundingClientRect();
        const isAboveViewport = rect ? rect.top < 0 : false;
        
        if (isAboveViewport) {
          return animationConfig.animate; // 上方進入時無動畫
        }
        
        // 從下方進入時使用正常動畫
        return isInView ? animationConfig.animate : animationConfig.initial;
      }
    }
  };

  // 創建 motion 組件 - 使用 motion.create 或直接指定
  const MotionComponent = React.useMemo(() => {
    try {
      // 嘗試直接使用 motion[as]
      if (motion[as]) {
        return motion[as];
      }
      
      // 如果沒有，使用 motion() 包裝
      return motion(as);
    } catch (error) {
      console.warn(`MotionEl: 無法創建 motion.${as}，使用 motion.div`);
      return motion.div;
    }
  }, [as]);

  return (
    <MotionComponent
      ref={elementRef}
      initial={animationConfig.initial}
      animate={getAnimateState()}
      transition={transition}
      className={className}
      style={style}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      {children}
    </MotionComponent>
  );
});

MotionEl.displayName = 'MotionEl';

export default MotionEl;