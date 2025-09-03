import { FiMail, FiMapPin, FiBriefcase, FiLink } from "react-icons/fi";
import { IoMdBriefcase } from "react-icons/io";
export default function InfoCard() {
  return (
    <div className='bg-bg flex justify-between h-[31.5rem] w-[20rem] mt-[4rem] md:mt-[0rem] items-center px-4  py-[2.3rem] border-[.2rem] border-white rounded-tl-[11.25rem] rounded-br-[11.25rem] flex flex-col '
      style={{ boxShadow: '-3px -3px 2px rgba(18, 247, 214, 1)' }}
    >
        <div className="rounded-full bg-white pb-[6rem] w-[5rem] h-[5rem] border-[.1rem] border-brand overflow-hidden">

      <img src="/images/me.jpg" />
        </div>

       {/* Name & Role */}
      <h2 className="mt-4 text-2xl font-bold text-white">Ishaq</h2>
      <p className="text-white">Full-stack developer</p>

      {/* Info List */}
      <div className="mt-6 space-y-3 text-white text-sm w-full">
        <div className="flex items-center gap-2">
          <FiMail size={16} className="text-teal-400" />
          <span>ishaqabdullahi670@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin size={16} className="text-teal-400" />
          <span>Nigeria</span>
        </div>
        <div className="flex items-center gap-2">
          <FiBriefcase size={16} className="text-teal-400" />
          <span>Full-time / Freelancer</span>
        </div>
        <div className="flex items-center gap-2">
          <FiLink size={16} className="text-teal-400" />
          <a href="https://www.ishaqabdullahi.vercel.app" target="_blank" className="hover:underline">
            www.ishaqabdullahi.vercel.app
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-6 flex gap-2 justify-center">
        {["REACT", "JS", "NEXT", "NODE"].map((skill) => (
          <span
            key={skill}
            className="bg-brand text-bg text-xs font-thin px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Call To Action */}
      <a
        href="#contact" // scroll to your Contact section
        className="mt-6 bg-white text-black font-medium px-6 py-2 w-[10rem] mr-10 text-center rounded-full shadow hover:bg-teal-400 hover:text-white transition hover:scale-110"
      >
        Hire Me <IoMdBriefcase className="inline ml-2 mb-1" />
      </a>
    </div>
  )
}
