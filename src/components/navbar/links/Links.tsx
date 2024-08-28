import { auth } from "@/lib/auth";
import MobileLinks from "./NavLink/mobileLinks";
import NavLink, { LinkProps } from "./NavLink/NavLink"
import { handleLogin, handleLogout } from "@/lib/actions";

const Links = async() => {
    const session: any = await auth();
    const linksArr: LinkProps[] = [
        {
            title: 'Homepage',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
    ]
    if(session?.user?.isAdmin) linksArr.push({
        title: 'Admin',
        path: '/admin'
    })
    if(session) linksArr.push({
        title: 'Logout',
        path: '/login',
        onClick: handleLogout
    })
    if(!session) linksArr.push({
        title: 'Login',
        path: '/login',
        onClick: handleLogin
    })
    
  return (
    <section className="relative">
        <div className="sm:flex lg:flex md:flex hidden gap-10">
            {
                linksArr.map((item,index) => (
                    <NavLink item={item} key={`${item.title}${index}`} />
                ))
            }
        </div>
        <MobileLinks link={linksArr}/>
    </section>
  )

}

export default Links