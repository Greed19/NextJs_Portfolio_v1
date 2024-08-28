import Image from "next/image";
import { addPost } from '@/lib/actions'
export const metadata = {
    title: "Contact Page",
    description: "Contact Page Description"
}

const ContactPage = () => {
    return (
        <section className="relative flex gap-[100px] section_container">
            <div className="w-[25rem] h-[25rem] relative sm:order-first lg:order-first md:order-first order-last m-auto">
                <Image src='/contact.png'  alt="contact_hero" fill className="object-contain"/>
            </div>
            <div className="flex-1 flex">
                <form action={addPost} className="flex w-full flex-col justify-center items-center gap-[20px]">
                    <input className="form_input" type="text" placeholder="Name and Surname" name="user" />
                    <input className="form_input" type="text" placeholder="Email Address" name="email" />
                    <input className="form_input" type="text" placeholder="Phone Number (Optional)" name="phone" />
                    <textarea className="form_input" cols={20} rows={10} name="message" placeholder="Message"></textarea>
                    <button className="hero_btn bg-btn-blue w-1/2">
                        send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage