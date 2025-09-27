'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 註冊 ScrollTrigger 插件
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollPage() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    // 為每個卡片設置初始狀態和動畫
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const isEven = index % 2 === 0
      const cardContent = card.querySelector('.card-content')

      // 設置初始狀態：傾斜角度和模糊
      gsap.set(card, {
        rotation: isEven ? 15 : -15,
        skewX: isEven ? 10 : -10,
        x: isEven ? -50 : 50,
        scale: 0.8
      })

      gsap.set(cardContent, {
        filter: 'blur(8px)',
        opacity: 0.4
      })

      // 創建一個統一的滾動動畫時間軸
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top -30%",
          scrub: 1.5,
          markers: true,
          onUpdate: (self) => {
            const progress = self.progress
            const isEven = index % 2 === 0
            
            // 根據進度計算動畫值
            if (progress < 0.45) {
              // 進入階段：從傾斜模糊到正常
              const enterProgress = progress / 0.45
              gsap.set(card, {
                rotation: isEven ? 15 * (1 - enterProgress) : -15 * (1 - enterProgress),
                skewX: isEven ? 10 * (1 - enterProgress) : -10 * (1 - enterProgress),
                x: isEven ? -50 * (1 - enterProgress) : 50 * (1 - enterProgress),
                scale: 0.8 + (0.2 * enterProgress)
              })
              gsap.set(cardContent, {
                filter: `blur(${8 * (1 - enterProgress)}px)`,
                opacity: 0.4 + (0.6 * enterProgress)
              })
            } else if (progress > 0.55) {
              // 離開階段：從正常到傾斜模糊
              const exitProgress = (progress - 0.55) / 0.3
              gsap.set(card, {
                rotation: isEven ? -15 * exitProgress : 15 * exitProgress,
                skewX: isEven ? -8 * exitProgress : 8 * exitProgress,
                x: isEven ? -30 * exitProgress : 30 * exitProgress,
                scale: 1 - (0.1 * exitProgress)
              })
              gsap.set(cardContent, {
                filter: `blur(${5 * exitProgress}px)`,
                opacity: 1 - (0.4 * exitProgress)
              })
            } else {
              // 中間階段：保持正常狀態
              gsap.set(card, {
                rotation: 0,
                skewX: 0,
                x: 0,
                scale: 1
              })
              gsap.set(cardContent, {
                filter: 'blur(0px)',
                opacity: 1
              })
            }
          }
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="p-8 py-[600px] bg-black min-h-[500vh]">
      <div ref={containerRef} className='gridList grid grid-cols-2 gap-4 max-w-[360px] mx-auto'>
        {Array.from({ length: 20 }, (_, index) => (
          <div 
            key={index} 
            ref={el => cardsRef.current[index] = el}
            className='card'
          >
            <div className='card-content bg-white aspect-square rounded-lg p-4 flex items-center justify-center'>
              <span className="text-2xl font-bold text-gray-800">{index + 1}</span>
            </div>
          </div>
        ))}
      </div> 
    </main>
  )
} 