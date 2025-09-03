type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="w-full text-center mb-[4rem]">
      {/* Main heading */}
      <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-brand">
        {title}
      </h2>

      {/* Decorative line with dots */}
      <div className="flex items-center justify-center my-2">
        <span className="w-2 h-2 rounded-full bg-brand"></span>
        <div className="border-t border-brand w-24 sm:w-40"></div>
        <span className="w-2 h-2 rounded-full bg-brand"></span>
      </div>

      {/* Subheading */}
      {subtitle && (
        <p className="text-sm sm:text-base text-white font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
