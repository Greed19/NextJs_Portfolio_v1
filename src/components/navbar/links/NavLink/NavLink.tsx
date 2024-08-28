"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export type LinkProps = {
title: string,
path: string,
onClick?: () => void
}

const NavLink = ({item}:{item:LinkProps}) => {
    const pathname = usePathname()
    const {title, path, onClick} = item
  return (
    <Link 
        onClick={!!onClick ? () => onClick() : () => null}
        href={path} 
        className={` min-w-[100px] rounded-[20px] 
            p-[10px] font-[500] text-center
             ${pathname === path && 'active_btn'}
             ${!!path.match(/login|logout/) && 'rounded-[5px] active_btn'}
             `}
             >
        {title}
    </Link>
  )
}

export default NavLink