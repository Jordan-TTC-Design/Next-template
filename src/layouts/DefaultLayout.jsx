import Link from 'next/link'
import LayoutsPageHeader from '@/components/layouts/page/Header'
export default function DefaultLayout({ children }) {
  return (
    <div>
      <LayoutsPageHeader />
      <main>{children}</main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Next.js Template. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 