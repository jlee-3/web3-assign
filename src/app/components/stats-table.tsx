import CircleCheck from "../icons/circle-check";
import { VotingStat } from "../types";

export default function StatsTable({ stats }: { stats: VotingStat[] }) {
  const StatValue = ({ value }: { value: string | boolean }) => {
    return (
      <div className="flex flex-row items-center gap-1">
        <h1 className="z-10 text-xs leading-5">
          {typeof value === "string" ? value : "Reached"}
        </h1>
        {typeof value === "boolean" && <CircleCheck />}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {stats &&
        stats.map((stat) => {
          return (
            <div
              key={stat.key}
              className="w-[317px] flex flex-row items-center justify-between"
            >
              <div className="flex flex-row gap-2">
                <p className="text-xs leading-5 font-normal">{stat.key}</p>
                {stat.tag && (
                  <p className="mt-[3px] text-[10px] leading-4 font-normal opacity-50">
                    Required 00K
                  </p>
                )}
              </div>
              <StatValue value={stat.value} />
            </div>
          );
        })}
    </div>
  );
}
