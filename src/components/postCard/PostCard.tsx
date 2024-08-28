import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PostCardProps = {

}

const PostCard = ({post}:any) => {
  console.log(post)
  return (
    <section className='w-full h-auto flex flex-col gap-2 mb-[20px]'>
        <div className='flex items-center'>
            <div className='relative h-[400px] w-[90%]'>
                <Image src={post?.img ? post.img : '/contact.png'} alt='post_img' fill className='object-cover' />
            </div>
            <span className='rotate-[270deg]'>01.01.2024</span>
        </div>
        <div className='flex flex-col w-[90%]'>
            <h1 className=''>{post?.title}</h1>
            <div className='text-[0.8rem] text-gray-400'>{post?.desc}</div>
            <Link href={`/blog/${post?.slug}`}  className='underline'>Read More</Link>
        </div>

    </section>
  )
}

export default PostCard