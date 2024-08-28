import { deleteUser } from "@/lib/actions"
import { getUsers } from "@/lib/data"
import Image from "next/image"

const AdminUsers = async() => {
  const users = await getUsers()
  return (
    <section className="flex flex-col gap-[1rem]">
    <h1 className="admin_title">Users</h1>
    {
        users?.map((post,index) => (
            <div className='flex justify-between items-center pr-[4rem]' key={`${index}${post.id}`}>
                <div className="flex flex-1 gap-[1rem] items-center">
                    <div className="relative h-[1rem] w-[1rem]">
                    <Image src={post?.img || '/noavatar.png'} alt="avatar" fill className="rounded-full object-contain"/>
                    </div>
                    <span>{post.username}</span>
                </div>
                <form action={deleteUser}>
                    <input type="hidden" value={post?.id} name='id' />
                    <button className="bg-red-500 text-white rounded-[.5rem] p-[1rem]">Delete</button>
                </form>
            </div>
        ))
    }
</section>
  )
}

export default AdminUsers