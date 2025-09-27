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
  const staticContainerRef = useRef(null)
  const staticCardsRef = useRef([])

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
          // markers: true,
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

    // 靜態格子的動畫
    if (staticContainerRef.current) {
      // 設置初始狀態：所有卡片都隱藏
      staticCardsRef.current.forEach((card, index) => {
        if (!card) return
        
        const row = Math.floor(index / 7)
        const col = index % 7
        const isCenterCol = col === 3 // 中間列
        // console.log('index',index,col)
        gsap.set(card, {
          opacity: 0,
          scale: 0.8,
          y: 100
        })
        const delayStart = Math.abs(col - 3) * 5
        console.log('delay',delayStart)
        const delayEnd = Math.abs(col - 3) * 10
        console.log('delayEnd',delayEnd)
        // 中間列先出現
        if (isCenterCol) {
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: row * 0.1,
            scrollTrigger: {
              trigger: staticContainerRef.current,
              start: "top 100%",
              end: "top 80%",
              scrub: 1.5
            }
          })
        } else {
          // 左右兩側延遲出現
          
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: staticContainerRef.current,
              start: `top ${90-delayStart}%`,
              end: `top ${70-delayEnd}%`,
              scrub: 1.5,
              // markers: true
            }
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="p-8 bg-black ">
      <div className='h-[100vh] flex items-center justify-center'>
        <h1 className='text-white text-4xl font-bold'>
          <img src="/images/logo-white.svg" alt='logo' className='h-10' />
        </h1>
      </div>
      {/* 原本的動態卡片區域 */}
   <div className='py-[50vh]'>
   <div ref={containerRef} className='gridList grid grid-cols-2 gap-4 max-w-[360px] mx-auto'>
        {Array.from({ length: 20 }, (_, index) => {
          const bgImageNumber = (index % 10) + 1
          const bgImagePath = `/images/loginBg/bg-${bgImageNumber}.webp`
          
          return (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className='card'
            >
              <div 
                className='card-content aspect-square rounded-lg relative overflow-hidden'
                style={{
                  backgroundImage: `url(${bgImagePath})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                {/* <span className="text-2xl font-bold text-white relative z-10 drop-shadow-lg">{index + 1}</span> */}
              </div>
            </div>
          )
        })}
      </div>
   </div>

      {/* 新增的動態格子區域 */}
      <div className='mt-32'>
        <div ref={staticContainerRef} className='grid grid-cols-7 gap-4 max-w-6xl mx-auto'>
          {Array.from({ length: 30 }, (_, index) => {
            const bgImageNumber = (index % 10) + 1
            const bgImagePath = `/images/loginBg/bg-${bgImageNumber}.webp`
            const row = Math.floor(index / 7)
            const col = index % 7
            
            return (
              <div 
                key={`static-${index}`}
                ref={el => staticCardsRef.current[index] = el}
                className='aspect-square rounded-lg relative overflow-hidden'
                style={{
                  backgroundImage: `url(${bgImagePath})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                data-row={row}
                data-col={col}
              >
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
} 