import { VoteAction } from "../types";

export default function ResultBar({
  percentage,
  amount,
  status,
}: {
  percentage: number;
  amount: number;
  status: VoteAction;
}) {
  const widthMultiplier = 3.58;

  return (
    <div className="relative h-8 flex flex-row items-center px-4 py-[6px] justify-between rounded w-[360px] border-grey-light border-[1px] bg-grey-ultralight">
      <h1 className="text-xs">{status == "support" ? "Support" : "Reject"}</h1>
      <div className="flex flex-row items-center gap-4">
        <p className="text-[10px] leading-4 font-normal">{`${amount.toLocaleString()} VOTE`}</p>
        <h1 className="text-xs">{`${percentage}%`}</h1>
      </div>
      <div
        style={{ width: widthMultiplier * percentage }}
        className={`absolute top-0 left-0 rounded-[3px] ${
          status == "support" ? "bg-support-light" : "bg-reject-light"
        }  h-[30px]`}
      ></div>
    </div>
  );
}
