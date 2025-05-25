'use client'

import Form from '@/components/forms/Form'

export default function FormsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">表單示例</h1>
        
        <Form />
      </div>
    </div>
  )
} 