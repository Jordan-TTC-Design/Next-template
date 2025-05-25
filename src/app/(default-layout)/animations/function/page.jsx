import MotionEl from '@/components/animations/MotionEl';

export default function AnimationFunctionPage() {

  const animations = [
    { type: 'fadeIn', title: '淡入效果' },
    { type: 'slideUp', title: '向上滑入' },
    { type: 'slideLeft', title: '向左滑入' },
    { type: 'slideRight', title: '向右滑入' },
    { type: 'scale', title: '縮放效果' },
  ];


  return (
    <div className="min-h-screen p-8">
      <MotionEl as="h1" animation="fadeIn" className="text-3xl font-bold mb-8">
        動畫功能展示
      </MotionEl>
      
      <div className="space-y-8">
        <div className="mb-12">
          <MotionEl as="h2" animation="fadeIn" className="text-2xl font-semibold mb-6">基本動畫</MotionEl>
          {animations.map((animation, index) => (
            <div key={index} className="p-4 border rounded-lg mb-4">
              <MotionEl 
                as="h3"
                animation={animation.type}
                className="text-xl font-semibold mb-4"
              >
                {animation.title}
              </MotionEl>
              <MotionEl
                as="div"
                animation={animation.type}
                className="w-32 h-32 bg-blue-500 rounded-lg"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
} 