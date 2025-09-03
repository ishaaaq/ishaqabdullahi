import MouseScroll from "./MouseScroll";
export default function AboutMe() {
  return (
    <section className="bg-[url('/images/about-me.png')] bg-cover bg-center flex justify-center py-[3rem] overflow-y-hidden">
     <div className="flex flex-col items-center px-[5rem]">

    <MouseScroll/>
<div className="flex flex-col lg:flex-row lg:justify-between items-center w-[113%] lg:px-[5rem]">
<div className="flex flex-col sm:items-start items-center gap-[1rem] sm:gap-[2rem] ">


     <div className="rounded-tl-[1.5rem] rounded-br-[1.5rem] px-[1.5rem] w-[14rem] h-[4.2rem] md:w-[16.9rem] md:h-[5rem] border-brand border-[.2rem] bg-bg flex items-center justify-center ">
      <h2 className="text-white text-[2rem] md:text-[3rem] text-center">About Me</h2>
     </div>
     <div className="w-full max-w-[20.8rem] sm:max-w-[45rem] rounded-[1.5rem] px-[2.5rem] py-[.8rem] bg-bg max-w-[18rem]">
 <p className="text-brand2 text-[0.75rem]">&lt;p&gt;</p>
 <h3 className="text-brand text-[2rem] ">Hello!</h3>
 <p className="text-white text-[.9rem] ">
  I’m Ishaq, a Software Engineer and full-stack developer building scalable web and mobile apps with React and React Native.
I’m a highly motivated developer and an eternal optimist, passionate about writing clean, efficient, and reliable code.
An Entrepreneur and a Freelancer, I craft elegant solutions that blend function with impact.
When I’m not coding, you’ll catch me boxing, playing basketball, or chasing fresh perspectives.</p>
 <p className="text-brand2 text-[0.75rem]">&lt;/p&gt;</p>
     </div>
     </div>
    

     <img src="/images/me2.jpg" alt="Me smiling :)" className="w-[20.8rem] lg:h-[100%] rounded-[1rem] lg:mt-[0rem] md:mt-[4rem] mt-[2rem] lg:ml-[2rem]"  />
     
     </div>
          </div>

    </section>
  )
}
