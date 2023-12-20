import { Status } from "../types";

export default function StatusBubble({ status }: { status: Status }) {
  const Capitalize = (input: string) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  return (
    <div
      className={`text-white text-xs ${
        status === "active" && "bg-bright-green"
      } h-6 px-2 rounded-[4px] flex items-center`}
    >
      {Capitalize(status)}
    </div>
  );
}
