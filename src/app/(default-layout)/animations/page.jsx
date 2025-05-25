'use client'

import FadeIn from '@/components/animations/FadeIn'
import SlideIn from '@/components/animations/SlideIn'
import ScaleIn from '@/components/animations/ScaleIn'
import HoverEffect from '@/components/animations/HoverEffect'

export default function AnimationsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">Animation Examples</h1>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SlideIn direction="left" delay={0.2}>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Slide In Left</h2>
              <p>This content slides in from the left</p>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.4}>
            <div className="bg-green-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Slide In Right</h2>
              <p>This content slides in from the right</p>
            </div>
          </SlideIn>

          <ScaleIn delay={0.6}>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Scale In</h2>
              <p>This content scales in</p>
            </div>
          </ScaleIn>

          <HoverEffect scale={1.1} rotate={2}>
            <div className="bg-purple-100 p-6 rounded-lg cursor-pointer">
              <h2 className="text-xl font-semibold mb-4">Hover Effect</h2>
              <p>Hover over this card to see the effect</p>
            </div>
          </HoverEffect>
          <FadeIn>
          <h2 className="text-4xl font-bold mb-8">END</h2>
        </FadeIn>
        <div className="h-screen w-full bg-red-500"></div>
        </div>
      </div>
    </div>
  )
} 