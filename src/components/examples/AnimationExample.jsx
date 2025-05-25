'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimationExample() {
  const fadeInRef = useRef(null);
  const slideInLeftRef = useRef(null);
  const slideInRightRef = useRef(null);
  const scaleInRef = useRef(null);
  const springInRef = useRef(null);
  const sequenceRef = useRef(null);
  const combineRef = useRef(null);

  const fadeInInView = useInView(fadeInRef, { amount: 0.3 });
  const slideInLeftInView = useInView(slideInLeftRef, { amount: 0.3 });
  const slideInRightInView = useInView(slideInRightRef, { amount: 0.3 });
  const scaleInInView = useInView(scaleInRef, { amount: 0.3 });
  const springInInView = useInView(springInRef, { amount: 0.3 });
  const sequenceInView = useInView(sequenceRef, { amount: 0.3 });
  const combineInView = useInView(combineRef, { amount: 0.3 });

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">滾動動畫範例</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 基本滾動動畫 */}
        <div className="card">
          <motion.div
            ref={fadeInRef}
            initial={{ opacity: 0, y: 20 }}
            animate={fadeInInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-primary text-white rounded"
          >
            滾動淡入
          </motion.div>
        </div>

        <div className="card">
          <motion.div
            ref={slideInLeftRef}
            initial={{ opacity: 0, x: -100 }}
            animate={slideInLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-secondary text-white rounded"
          >
            滾動從左滑入
          </motion.div>
        </div>

        <div className="card">
          <motion.div
            ref={slideInRightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={slideInRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-success text-white rounded"
          >
            滾動從右滑入
          </motion.div>
        </div>

        <div className="card">
          <motion.div
            ref={scaleInRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={scaleInInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 min-h-[320px] bg-black text-white rounded"
          >
            滾動縮放進入
          </motion.div>
        </div>

        <div className="card">
          <motion.div
            ref={springInRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={springInInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="p-4 min-h-[320px] bg-black text-white rounded"
          >
            滾動彈簧動畫1
          </motion.div>
        </div>

        {/* 滾動序列動畫 */}
        <div className="card">
          <motion.div
            ref={sequenceRef}
            initial={{ opacity: 0, x: 100, scale: 0 }}
            animate={sequenceInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0 }}
            transition={{ 
              duration: 0.5,
              times: [0, 0.5, 1]
            }}
            className="p-4 min-h-[320px] bg-black text-white rounded"
          >
            滾動序列動畫
          </motion.div>
        </div>

        {/* 滾動組合動畫 */}
        <div className="card">
          <motion.div
            ref={combineRef}
            initial={{ opacity: 0, x: -100 }}
            animate={combineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-primary text-white rounded"
          >
            滾動組合動畫
          </motion.div>
        </div>
      </div>

      {/* 添加一些空白區域以確保可以滾動 */}
      <div className="h-screen"></div>
    </div>
  );
} 