import MouseScroll from './MouseScroll'
import Heading from './Heading'
import { AiOutlineDesktop } from "react-icons/ai";
import { LuSmartphone } from "react-icons/lu";
import SkillCard from './SkillCard';
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiRedux } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: FaJs, color: "bg-yellow-400", text: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "bg-blue-500", text: "text-blue-500" },
  { name: "React Native", icon: FaReact, color: "bg-sky-400", text: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "bg-green-600", text: "text-green-600" },
  { name: "MongoDB", icon: SiMongodb, color: "bg-emerald-600", text: "text-emerald-600" },
  { name: "TypeScript", icon: SiTypescript, color: "bg-blue-700", text: "text-blue-700" },
];
export default function Skills() {
  return (
    <div className="bg-[url('/images/Skills.png')] w-full bg-cover bg-center flex justify-center py-[3rem]">
    <div className="flex flex-col items-center w-[100%] md:px-[5rem] relative">
        <MouseScroll/>
        <Heading 
  title="Skills" 
  subtitle="I'm striving to never stop learning and improving" 
/>

<div className='flex  flex-col md:flex-row w-full justify-between items-center gap-5 max-w-[44.5rem]'>
    <SkillCard Icon={AiOutlineDesktop} title="Web Development" description="React.NodeJS"/>
    <SkillCard Icon={LuSmartphone} title="App Development" description="iOS.Android"/>
</div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 max-w-5xl mx-auto mt-[5.6rem]">
        {skills.map(({ name, icon: Icon, color, text }) => (
          <div key={name} className="flex flex-col items-center">
            {/* Circle with icon */}
            <div
              className={`w-25 h-25 rounded-full flex items-center justify-center ${color}`}
            >
              <Icon className="text-white text-3xl" />
            </div>
            {/* Label */}
            <p className={`mt-2 font-medium ${text}`}>{name}</p>
          </div>
        ))}
      </div>
      <h1 className='text-brand  hidden lg:block absolute top-5 right-[20%] text-[10rem]'>&lt;/&gt;</h1>
      </div>
    </div>
  )
}
