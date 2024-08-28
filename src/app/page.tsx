import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-[100px] section_container px-[40px]">
      <section className="flex-1 gap-[50px] flex flex-col mobile_center justify-center">
        <h1 className="title_font">Creative Thoughts Agency.</h1>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Numquam quasi assumenda repudiandae eos animi atque sint 
          eligendi commodi deleniti aliquid.
        </p>
        <div className="flex gap-10 justify-center sm:justify-start lg:justify-start md:justify-start">
          <button className="hero_btn bg-btn-blue">Learn More</button>
          <button className="hero_btn bg-white text-black">Contact</button>
        </div>
        <div className="h-[50px] w-full relative grayscale">
          <Image src={'/brands.png'} alt="brands" fill sizes="100%"/>
        </div>
      </section>
      <section className="flex justify-center flex-1 w-full h-[500px] relative sm:order-last lg:order-last md:order-last order-first">
        <Image src={'/hero.gif'} unoptimized alt="Hero Image" priority height={100} width={1000}/>
      </section>
    </main>
  );
}
