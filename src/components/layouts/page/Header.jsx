'use client'

import { useState } from 'react'
import Link from 'next/link'
import AtomIcon from '@/components/atoms/Icon'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-white sticky opacity-0 top-0 z-50 py-2'>
      <div className="container flex justify-between items-center">
          <div className="flex items-center">
              <h1 className='text-zh-body-1 text-txt'>Logo</h1>
          </div>
          <div>
            <ul className='hidden lg:flex gap-4'>
              <li className='text-zh-body-1 text-txt'>
                <Link href="/">Home</Link>
              </li>
              <li className='text-zh-body-1 text-txt'>
                <Link href="/about">About</Link>
              </li>
            </ul>
            {/* 漢堡選單 */}
            <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
              <AtomIcon name='box' className='text-pr size-5 hover:text-pink-500 duration-300' />
            </button>
            {/* 漢堡選單 */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
              <ul className='flex flex-col gap-4'>
                <li className='text-zh-body-1 text-txt'>
                  <Link href="/">Home</Link>
                </li>
                <li className='text-zh-body-1 text-txt'>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
            
          </div>
      </div>
    </header>
  )
}

export default Header;