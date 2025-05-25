import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="ontainer mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Page</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">This is the about page of our Next.js application.</p>
          
          <Link 
            href="/"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 