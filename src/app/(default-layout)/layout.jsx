'use client'

import DefaultLayout from '@/layouts/DefaultLayout'

export default function WithLayout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>
} 