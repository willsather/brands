type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <>
      <h2 className="mb-4 font-light text-2xl text-gray-800 tracking-widest md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </>
  );
}
