'use client'

import useStore from '@/store/useStore'
import Button from '@/components/atoms/Button'
import Link from 'next/link'

export default function Home() {
  const { count, increment, decrement, reset } = useStore()

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8">Next.js Template</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          <p className="text-2xl mb-4">Count: {count}</p>
          
          <div className="flex gap-2">
            <Button intent="primary" onClick={decrement}>Decrement</Button>
            <Button intent="primary" onClick={increment}>Increment</Button>
            <Button intent="primary" onClick={reset} className="bg-gray-500 hover:bg-gray-600">
              Reset
            </Button>
          </div>

          <div className="mt-6">
            <Link 
              href="/about"
              className="text-pr hover:text-blue-600 underline"
            >
              Go to About Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
