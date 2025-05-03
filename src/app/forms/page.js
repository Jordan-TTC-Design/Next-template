'use client'

import Form from '@/components/common/forms/Form'
import FadeIn from '@/components/animations/FadeIn'

export default function FormsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8 text-center">表單示例</h1>
        </FadeIn>
        
        <Form />
      </div>
    </div>
  )
} 