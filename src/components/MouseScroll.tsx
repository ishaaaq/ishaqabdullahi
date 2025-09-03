import { CiDesktopMouse2 } from 'react-icons/ci'

export default function MouseScroll() {
  return (
    <div className="flex flex-col items-center mb-[3rem]">
       <CiDesktopMouse2 className="text-brand w-[2rem] h-[2.75rem]"/>
      <div className="relative h-[4rem] w-2 flex justify-center ml-0">
  <div className="border-l-2 border-dashed border-white h-full"></div>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
</div> 
    </div>
  )
}
