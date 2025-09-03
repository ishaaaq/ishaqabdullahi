import { useState } from "react";
import { TiThLargeOutline } from "react-icons/ti";
import { LuUser } from "react-icons/lu"
import { IoCodeSharp } from "react-icons/io5";
import { AiOutlineDesktop } from "react-icons/ai";
import { PiCertificate } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
const navItems = [
  { href: "#home", icon: TiThLargeOutline },
  { href: "#about", icon: LuUser },
  { href: "#skills", icon:  IoCodeSharp },
  { href: "#projects", icon: AiOutlineDesktop },
  { href: "#certifications", icon: PiCertificate },
  { href: "#contact", icon: CiMail },
];

export default function Sidebar() {
  const [active, setActive] = useState("#home");

  return (
    <nav className=" hidden fixed top-1/2 left-4 -translate-y-1/2 bg-bg2 border border-white rounded-full py-2 px-2 md:flex flex-col items-center gap-[.5rem] z-50">
      {navItems.map(({ href, icon: Icon }, idx) => (
        <a
          key={href}
          href={href}
          onClick={() => setActive(href)}
          className={`rounded-full p-[.5rem] shadow-md transition hover:scale-110 ${
            active === href
              ? "bg-white text-gray-900"
              : "text-gray-100 hover:text-white"
          }`}
        >
          <Icon size={20} />
        </a>
      ))}
    </nav>
  );
}