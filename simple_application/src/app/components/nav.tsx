import { ReactNode } from "react";

export default function Nav({ children }: { children: ReactNode }) {
  return (
    <button className="text-xs flex flex-row gap-2 h-5 items-center">
      {children}
    </button>
  );
}
