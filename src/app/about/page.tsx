import Image from "next/image"

export const metadata = {
    title: "About Page",
    description: "About description"
}

const AboutPage = () => {
    const aboutArr = [
        'Year of experience',
        'People reached',
        'Services and plugins'
    ]
    return (
        <section className="flex w-full section_container px-[40px] gap-10">
            <div className="flex-1 flex flex-col items-start gap-[50px]">
                <h1 className="text-blue-600 text-[2rem] text-bold">About Agency</h1>
                <h1 className="text-[4rem] font-bold">We create digital ideas that are bigger, bolder, braver and better</h1>
                <span className="desc">
                    we create digiital ideas that are bigger,
                     bolder, braver and better.
                     We believe in good ideas flexibility and precission .
                    We're worlds Our Special Team best consulting & finance solution provider.
                    Wide range of web and software development  services.
                </span>
                <div className="flex w-full mobile_center justify-start section_container gap-[50px]">
                    {
                        aboutArr.map((item,index) => (
                            <div key={`${item}aboutArr${index}`} className="flex flex-col text-center">
                                <h1 className="text-blue-600 text-[2rem] text-bolder">10K +</h1>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1 relative w-full h-[500px] object-cover ">
                <Image src='/about.png' alt="about_hero" height={500} width={1000}/>
            </div>
        </section>
    )
}

export default AboutPage