import PostUser from "@/components/postUser/PostUser"
import { getPost } from "@/lib/data"
import Image from "next/image"

type ParamsProps = {
  slug: string
}
const getPostData = async(slug:string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    if(!res?.ok){
      throw new Error("Failed to fetch Post!")
    }
    return res.json()
}
export const generateMetadata = async({params}:{params:ParamsProps}) => {
  const { slug } = params;
  const post = await getPost(slug)
  return {
    title: post?.title,
    description: post?.desc
  }
}

const SinglePostPage = async({params}:{params:ParamsProps}) => {  
  // const post = await getPost(params.slug)
  const post = await getPostData(params.slug)
  return (
    <section className="flex section_container items-center px-[40px] gap-[50px]">
      <div className="relative w-[25rem] h-[30rem] sm:order-first lg:order-first md:order-first order-last">
        <Image src={post?.img ? post.img : '/contact.png'} alt="post_image" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[3rem] font-bold">{post.title}</h1>
        <div className="flex gap-[20px] justify-center sm:justify-start lg:justify-start md:justify-start items-center ">
          <PostUser id={post?.userId} />
          <div className="flex flex-col gap-[5px]">
            <div className="text-gray-400 text-[1rem]">Published</div>
            <div className="text-white text-[1.2rem]">{post?.createdAt.toString().slice(4, 16)}</div>
          </div>
        </div>
        <div className="text-[1rem]">
        {post.desc}
        </div>
      </div>
    </section>
  )
}

export default SinglePostPage