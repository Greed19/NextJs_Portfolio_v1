"use client"
import { addUser } from '@/lib/actions'
import { useFormState } from 'react-dom'

const AdminUsersForm = () => {
    const [state, formAction] = useFormState(addUser, undefined)
  return (
    <form action={formAction} className="flex flex-col bg-slate-400 px-[2rem] gap-[1rem] rounded-[.5rem]">
        <h1 className='admin_title'>Add New User</h1>
        <input className='form_input_2' type="text" name="username" placeholder="Enter username" />
        <input className='form_input_2' type="text" name="email" placeholder="Enter email address" />
        <input className='form_input_2' type="password" name="password" placeholder="Enter password" />
        <input className='form_input_2' type="text" name="img" placeholder="Enter image's url" />
        <select  className='form_input_2' >
            <option value="false">is Admin ?</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
        </select>
        <button className="bg-blue-600 p-[1rem] rounded-[0.5rem] mb-[1rem]">Add</button>
        {state?.error}
    </form>
  )
}

export default AdminUsersForm