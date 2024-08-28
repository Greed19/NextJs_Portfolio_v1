import { deletePost } from '@/lib/actions'
import { getPosts } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const AdminPosts = async() => {
    const posts = await getPosts()

  return (
    <section className='flex flex-col gap-[1rem]'>
        <h1 className='admin_title'>Posts</h1>
        {
            posts?.map((post,index) => (
                <div className='flex flex-1 justify-between items-center pr-[4rem] ' key={`${index}${post.id}`}>
                    <div className='flex gap-[1rem] items-center'>
                        <Image src={post?.img || '/noavatar.png'} alt="avatar" width={50} height={50} className='rounded-full' />
                        <span>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" value={post?.id} name='id' />
                        <button className='bg-red-600 text-white p-[1rem] rounded-[0.5rem]'>Delete</button>
                    </form>
                </div>
            ))
        }
    </section>
  )
}

export default AdminPosts