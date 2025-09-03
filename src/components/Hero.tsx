import InfoCard from "./InfoCard";
import { CiMail } from "react-icons/ci";
export default function Hero() {

    const aboutInfo = [
        {
            digit: 3,
            text: 'programming Languages'
        },
        {
            digit: 6,
            text: 'Development Tools'
        },
        {
            digit: 4,
            text: 'Years of Experience'
        },
    ]
  return (
   <div className="flex flex-col items-center px-[5rem] pb-[8rem]">
    <h1 className="hidden md:block text-[7.3rem] text-center text-brand2">Developer</h1>
    <div className="flex flex-col lg:flex-row items-center gap-[3rem]">
    <InfoCard/>
    <div className="flex flex-col md:flex-row gap-[4rem] md:gap-[3.6rem] items-center">
        <div >
            <p className="text-brand2 text-[0.75rem]">&lt;h1&gt;</p>
            <h2 className="text-[2rem] md:text-[3rem] text-white ml-[1rem] md:leading-15">Hey 
            <br/> I'm <span className="text-brand">Ishaq</span>,
           <br/>  <span className="flex flex-row">Full-Stack Developer <p className="text-brand2 text-[0.75rem] mt-full ml-2">&lt;/h1&gt;</p></span></h2> 

            <p className="text-brand2 text-[0.75rem]  mt-[2rem]">&lt;p&gt;</p>
            <p className="text-white text-[.8rem] max-w-[40rem] ml-[1rem] my-[1rem] tracking-widest font-extralight">
                I help businesses grow by crafting amazing mobile & web experiences. If you’re looking for a developer that likes to get stuff done,
            </p>
         <p className="text-brand2 text-[0.75rem]">&lt;/p&gt;</p>
           <div className="flex flex-row items-center mt-[1rem] gap-[1rem]"> 
            <p className="text-brand text-[2rem] ml-[1rem] ">Let's Talk </p>
            <button className="bg-[#43454D] hover:scale-110 hover:cursor-pointer rounded-full w-[1.6rem] h-[1.6rem] text-brand flex items-center justify-center"><CiMail className="h-[1.1rem] w-[1.37rem]"/></button>
            </div> 
        </div>
        <div className="h-[23.6rem] w-[13.4rem] p-[2rem] gap-[3rem] rounded-[80px] bg-bg2 flex flex-col items-center justify-center">
                {aboutInfo.map(({digit, text}, index) => (
            <div key={index} className="flex flex-row gap-[1rem] items-center">
                    
                    <h5 className="text-[3rem] text-brand">{digit}</h5>
                    <p className="text-[1rem] text-white">{text}</p>
                   
                    
            </div>
                ))}
        </div>
        </div>
    </div>
   </div>
  )
}
