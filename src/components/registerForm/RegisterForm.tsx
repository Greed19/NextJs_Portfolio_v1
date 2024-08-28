"use client"
import { registerUser } from '@/lib/actions';
import { stat } from 'fs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom';

const RegisterForm = () => {
    const [state,formAction] = useFormState(registerUser,undefined);
    const router = useRouter()
    useEffect(() =>{
        state?.success && router.push('/login')
    },[state?.success, router])

  return (
    <form action={formAction} className='bg-black-200 w-[500px] flex flex-col gap-[1rem] items-center p-[2rem]'>
    <input className='form_input_2' type="text" placeholder='username' name='username' />
    <input className='form_input_2' type="email" placeholder='email' name='email' />
    <input className='form_input_2' type="password" placeholder='password' name='password' />
    <input className='form_input_2' type="password" placeholder='password again' name='passwordRepeat' />
    <button className='hero_btn bg-blue-500 w-1/2'>Register</button>
    {state?.error}
    <p>Already have an accout? <Link href={'/login'} className='text-blue-500'>Login now</Link></p>
  </form>
  )
}

export default RegisterForm