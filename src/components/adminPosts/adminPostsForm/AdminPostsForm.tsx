"use client"
import { addPost } from "@/lib/actions"
import { useFormState } from "react-dom"



const AdminPostsForm = async({userId}:{userId:string}) => {
    const [state, formAction] = useFormState(addPost,undefined);
  return (
    <form action={formAction} className="flex flex-col bg-slate-400 px-[2rem] gap-[1rem] rounded-[.5rem]">
        <h1 className="admin_title">Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input  className="form_input_2" type="text" name="title" placeholder="Enter Post's Title" />
        <input className="form_input_2" type="text" name="slug" placeholder="Enter Post's Slug" />
        <input className="form_input_2" type="text" name="img" placeholder="Enter image's url" />
        <textarea className="form_input_2" name="desc" rows={10} placeholder="Enter Post's Description"/>
        <button className="bg-blue-600 p-[1rem] rounded-[0.5rem] mb-[1rem]">Add</button>
        {state?.error}
    </form>
  )
}

export default AdminPostsForm