"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import NavLink, { LinkProps } from './NavLink'


const MobileLinks = ({link}:{link: LinkProps[]}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative sm:hidden lg:hidden md:hidden flex gap-10">
        <Image src='/menu.png' alt='menu_icon' width={20} height={20} onClick={() => setIsOpen(prev => !prev)} />
        {
            isOpen
            ? <div className={` absolute flex 
                flex-col gap-10 top-[40px] w-[15rem]
                -right-[2.2rem] bg-black-100
                z-10
                // transition ease-in-out duration-300 
                // ${isOpen ? '-transform-x-[40px] right-[40px]':'transform-x-[40px]'}`}
                >
                {
                    link.map((item,index) => (
                        <NavLink item={item} key={`${item.title}${index}Mobile`} />
                    ))
                }
            </div>
            : null
        }
    </div>
  )
}

export default MobileLinks