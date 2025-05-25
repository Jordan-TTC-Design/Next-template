import { motion, useAnimation, useInView, useScroll } from 'framer-motion';

// 基本動畫設定
const defaultTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

// 彈簧動畫設定
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

// 動畫變體
export const variants = {
  // 淡入淡出
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeOut: {
    hidden: { opacity: 1 },
    visible: { opacity: 0 }
  },

  // 滑入滑出
  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideInRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideInUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideInDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },

  // 縮放
  scaleIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  scaleOut: {
    hidden: { scale: 1, opacity: 1 },
    visible: { scale: 0, opacity: 0 }
  },

  // 彈簧
  springIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: springTransition
    }
  },
  springOut: {
    hidden: { scale: 1, opacity: 1 },
    visible: { 
      scale: 0, 
      opacity: 0,
      transition: springTransition
    }
  },

  // 特效
  shake: {
    hidden: { x: 0 },
    visible: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  },
  bounce: {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 0, -10, 0],
      transition: { duration: 0.5 }
    }
  },
  pulse: {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 }
    }
  },
  rotate: {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: { duration: 1 }
    }
  },
  blink: {
    hidden: { opacity: 1 },
    visible: {
      opacity: [1, 0, 1, 0, 1],
      transition: { duration: 0.5 }
    }
  }
};

// 動畫組件
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionH6 = motion.h6;
export const MotionA = motion.a;
export const MotionButton = motion.button;
export const MotionImg = motion.img;

// 動畫 hooks
export { useAnimation, useInView, useScroll };

// 動畫配置
export const animationConfig = {
  defaultTransition,
  springTransition,
  variants
};

// 導出所有內容
export default {
  variants,
  MotionDiv,
  MotionSpan,
  MotionP,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionH4,
  MotionH5,
  MotionH6,
  MotionA,
  MotionButton,
  MotionImg,
  useAnimation,
  useInView,
  useScroll,
  animationConfig
}; 