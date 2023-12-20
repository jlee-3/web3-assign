import StatusBubble from "./status-bubble";

export default function Title() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="self-start text-2xl font-semibold text-navy">
        Lorem ipsum dolor sit amet
      </div>
      <StatusBubble status="active" />
    </div>
  );
}
