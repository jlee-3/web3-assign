export default function TextParagraph({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <h1>{title}</h1>
      <p className="text-sm leading-6 font-normal">{content}</p>
    </div>
  );
}
