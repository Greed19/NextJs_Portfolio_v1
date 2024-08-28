import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data"

export const metadata= {
    title: "Post List Page",
    description: "List of posts"
}

const getPostsData = async() => {
    const res = await fetch('http://localhost:3000/api/blog',{next:{revalidate:3600}})
    if(!res?.ok){
        throw new Error('Failed to fetch posts!')
    }
    return res.json()
}

const BlogPage = async() => {
    // const posts = await getPosts()
    const posts = await getPostsData()
    return (
        <section className="w-full flex flex-wrap items-center">
            {
                posts?.map((item:any) => (
                    <div key={`${item.id}`} className="sm:w-1/2 lg:1/3 md:1/3 xl:w-1/3 w-full">
                    <PostCard post={item} />
                </div>
                ))
            }
        </section>
    )
}

export default BlogPage