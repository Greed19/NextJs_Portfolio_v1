import LoginForm from '@/components/loginForm/LoginForm';
import { handleLogin } from '@/lib/actions';
import { auth } from '@/lib/auth';

const Loginpage = async() => {
  const session:any = await auth()
  console.log(session,'sessionzxc')
  return (
    <section className='bg-black-200 w-[500px] flex flex-col justify-center items-center m-auto gap-[2rem] py-[2rem]'>
      <form action={handleLogin} className='bg-white rounded-[0.5rem] text-black w-[18.5rem] h-[3rem] text-center flex items-center justify-center'>
        <button>Login With Github</button>
      </form>
      <LoginForm />
    </section>
  )
}

export default Loginpage