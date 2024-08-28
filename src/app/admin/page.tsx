import AdminPosts from "@/components/adminPosts/AdminPosts"
import AdminPostsForm from "@/components/adminPosts/adminPostsForm/AdminPostsForm"
import AdminUsers from "@/components/adminUsers/AdminUsers"
import AdminUsersForm from "@/components/adminUsers/adminUsersForm/AdminUsersForm"
import { auth } from "@/lib/auth"
import { Suspense } from "react"

export const metadata = {
  title: "Admin Page",
  description: "Admin Page Description"
}

const AdminPage = async() => {
  const session:any = await auth()  
  return (
    <section className="flex flex-col gap-[5rem]">
      <div className="flex-1 flex section_contaier px-[3rem]">
        <div className="flex-1">
          <Suspense>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense>
            <AdminPostsForm userId={session.user.id}/>
          </Suspense>
        </div>
      </div>
      <div className="flex-1 flex section_contaier px-[3rem]">
        <div className="flex-1">
          <Suspense>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense>
            <AdminUsersForm />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default AdminPage