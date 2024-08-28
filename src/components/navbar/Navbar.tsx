import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center h-[100px] w-full p-10 gap-10'>
      <Link href='/' className='text-[30px] font-bold'>
        Logo
      </Link >
      <Links />
    </header>
  )
}

export default Navbar