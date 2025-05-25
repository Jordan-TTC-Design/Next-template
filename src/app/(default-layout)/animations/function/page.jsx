'use client';

import { useMotionAnimation } from '@/utils/animations';

export default function AnimationFunctionPage() {
  useMotionAnimation();

  const animations = [
    { type: 'fadeIn', title: '淡入效果' },
    { type: 'slideUp', title: '向上滑入' },
    { type: 'slideLeft', title: '向左滑入' },
    { type: 'slideRight', title: '向右滑入' },
    { type: 'scale', title: '縮放效果' },
  ];

  const loopAnimations = [
    { type: 'bounce', title: '彈跳效果' },
    { type: 'pulse', title: '脈動效果' },
    { type: 'rotate', title: '旋轉效果' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 data-motion="fadeIn" className="text-3xl font-bold mb-8">
        動畫功能展示
      </h1>
      
      <div className="space-y-8">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">基本動畫</h2>
          {animations.map((animation, index) => (
            <div key={index} className="p-4 border rounded-lg mb-4">
              <h3 
                data-motion={animation.type}
                className="text-xl font-semibold mb-4"
              >
                {animation.title}
              </h3>
              <div 
                data-motion={animation.type}
                className="w-32 h-32 bg-blue-500 rounded-lg"
              />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">循環動畫</h2>
          {loopAnimations.map((animation, index) => (
            <div key={index} className="p-4 border rounded-lg mb-4">
              <h3 
                data-motion={animation.type}
                data-loop="true"
                className="text-xl font-semibold mb-4"
              >
                {animation.title}
              </h3>
              <div 
                data-motion={animation.type}
                data-loop="true"
                className="w-32 h-32 bg-green-500 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 