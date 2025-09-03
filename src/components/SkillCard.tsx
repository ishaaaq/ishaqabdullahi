
type CardProps = {
    Icon: React.ComponentType;
    title: string;
    description: string;
}
export default function SkillCard({Icon, title, description} : CardProps) {
  return (
    <div className="bg-brand2 flex flex-col justify-center items-center w-[18rem] h-[8.25rem] rounded-[1.5rem] border-l-[.5rem] border-[#0C73B8]">
      <Icon/>
      <p className="text-[1.5rem]">{title}</p>
      <p className="text-[1rem]">{description}</p>
    </div>
  )
}
