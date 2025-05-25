'use client'

import useStore from '@/store/useStore'
import allStore from '@/store/allStore'
import AtomsButton from '@/components/atoms/Button'
import Link from 'next/link'
import MotionExample from '@/components/examples/AnimationExample'

export default function Home() {
  const { count, increment, decrement, reset } = useStore()
  const { windowWidth } = allStore()

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <MotionExample />
      <div className="container mx-auto">
        <h1 motion="fadeIn" className="text-3xl font-bold mb-8">Next.js Template</h1>
        <p>windowWidth: {windowWidth}</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          <p className="text-2xl mb-4">Count: {count}</p>
          
          <div className="flex gap-2">
            <AtomsButton intent="secondary" onClick={decrement}>Decrement</AtomsButton>
            <AtomsButton intent="primary" onClick={increment}>Increment</AtomsButton>
            <AtomsButton intent="primary" onClick={reset} className="bg-gray-500 hover:bg-gray-600">
              Reset
            </AtomsButton>
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