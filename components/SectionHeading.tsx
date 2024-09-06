type SectionHeadingProps = {
  title: string
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="text-3xl mb-8 font-medium capitalize">{title}</h2>;
}
