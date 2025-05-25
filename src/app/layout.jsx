import '@/css/main.css'
import WindowWidthProvider from '@/components/providers/WindowWidthProvider'
import MotionProvider from '@/components/providers/MotionProvider'

export const metadata = {
  title: 'Next.js Template',
  description: 'A Next.js template with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <MotionProvider />
        <WindowWidthProvider/>
        {children}
      </body>
    </html>
  )
} 