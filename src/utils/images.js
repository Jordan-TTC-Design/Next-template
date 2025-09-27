import { backgroundImages } from '@/assets/images'

// 獲取背景圖片（使用 Next.js 的靜態導入）
export const getBackgroundImage = (index) => {
  return backgroundImages[index % backgroundImages.length]
}

// 獲取圖標圖片
export const getIconImage = (index) => {
  return backgroundImages[index % backgroundImages.length]
}

// 舊版 API 保持向後兼容
export const getImagePath = (imageName) => {
  return `/images/loginBg/${imageName}`
}
