import './globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'

export const metadata = {
  title: 'Next.js Template',
  description: 'A Next.js template with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
