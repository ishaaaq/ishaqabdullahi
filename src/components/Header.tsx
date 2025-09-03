import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion";
import { useState } from "react";
export default function Header() {
    const [open, setOpen] = useState(false);

    const socials = [
        {
            name: "Instagram",
            link : "https://instagram.com/thisisishaq",
            Icon: FaInstagram, 
            color: "purple"
        },
        {
            name: "Github",
            link : "https://github.com/ishaaaq",
            Icon: FaGithub, 
            color: "black"
        },
        {
            name: "Twitter",
            link : "https://x.com/iamishaq_",
            Icon: FaTwitter, 
            color: "blue"
        },
    ]
    const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

  return (
    <div className='bg-bg flex justify-between h-[7rem] w-[85%] mx-auto items-center px-1 border-b-[.01rem] border-gray-600'>
      <div className='flex items-center gap-2'>
        <h3 className="font-bold text-brand text-sm md:text-base lg:text-2xl">&lt; IA / &gt;</h3>
        <h1 className='text-white text-sm md:text-base lg:text-2xl'>Ishaq Abdullahi</h1>
      </div>
     
       <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center z-50"
      >
        {/* Top bar */}
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-brand rounded"
        />
        {/* Middle bar */}
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-6 bg-brand rounded my-1"
        />
        {/* Bottom bar */}
        <motion.span
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-brand rounded"
        />
      </button>
      <div className='md:flex hidden'>
        <ul>
            {socials.map(({name, link, Icon}, index) => (
                <li key={index} className="inline-block mx-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Icon className={`text-brand`} />
                    <span className='text-white hover:text-brand lg:text-base lg:block hidden'>{name}</span>
                </a>
                </li>
            ))}
        </ul>
      </div>
       {/* Slide-out nav */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-12 right-0 h-full w-48 bg-bg shadow-lg flex flex-col gap-6 p-6 md:hidden z-10"
      >
       {navLinks.map(({ href, label }) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="text-white hover:text-brand text-lg font-normal transition"
    >
      {label}
    </a>
  ))}
      </motion.nav>
    </div>
  )
}
