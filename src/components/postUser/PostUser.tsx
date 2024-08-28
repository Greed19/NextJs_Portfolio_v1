import { getUser } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const PostUser = async({id}:{id:string}) => {
    const user = await getUser(id)
    console.log(user,'uyser')
  return (
    <section className='flex gap-[15px] items-center'>
        <div className="relative w-[5rem] h-[5rem]">
        <Image src={user?.avatar ? user.avatar : '/noavatar.png'} alt="avatar" fill className="object-contain rounded-full" />
        </div>
        <div className="flex flex-col gap-[5px]">
            <div className="text-gray-400 text-[1rem]">Author</div>
            <div className="text-white text-[1.2rem]">{user?.username}</div>
        </div>
    </section>
  )
}

export default PostUser