'use client'

import { useEffect } from 'react'
import allStore from '@/store/allStore'

export default function WindowWidthProvider({ children }) {
  const { setWindowWidth } = allStore()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // 初始化
    handleResize()

    // 監聽視窗大小變化
    window.addEventListener('resize', handleResize)

    // 清理
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWindowWidth])

  return children
} 