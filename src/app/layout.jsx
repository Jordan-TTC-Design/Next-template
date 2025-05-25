import '@/css/main.css'
import WindowWidthProvider from '@/components/providers/WindowWidthProvider'

export const metadata = {
  title: 'Next.js Template',
  description: 'A Next.js template with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WindowWidthProvider>
        </WindowWidthProvider>
          {children}
      </body>
    </html>
  )
} 