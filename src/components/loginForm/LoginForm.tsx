"use client"
import { loginUser } from '@/lib/actions'
import Link from 'next/link'
import { useFormState } from 'react-dom'

const LoginForm = () => {
    const [state,formAction] = useFormState(loginUser,undefined)

  return (
    <form action={formAction} className='text-black flex flex-col flex-1 gap-[2rem]'>
    <input className='form_input_2' type="text" placeholder='Enter username' name='username' />
    <input className='form_input_2' type="password" placeholder='Enter password' name='password' />
    <button className='hero_btn h-[3rem] flex justify-center items-center bg-blue-600 text-white'>Login with credentials</button>
    {state?.error}
    <p className='text-white'>Don't have an account yet? <Link href={'/register'} className='text-blue-500'>Register here</Link></p>
  </form>
  )
}

export default LoginForm