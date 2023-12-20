import ResultBar from "./result-bar";
import StatsTable from "./stats-table";
import { VoteAction, VoteBreakdown, VotingStat } from "../types";

export default function VotingResults() {
  const results: VoteBreakdown = {
    support: {
      percentage: 90,
      total: 9000000,
    },
    reject: {
      percentage: 10,
      total: 1000000,
    },
  };

  const voteActions: VoteAction[] = ["support", "reject"];

  const stats: VotingStat[] = [
    { key: "Quorum", value: true },
    { key: "Current Votes", tag: "Required 000K", value: "000K" },
    { key: "Differential", value: true },
    {
      key: "Current Differential",
      tag: "Required 000K",
      value: "00.00K",
    },
    { key: "Total Voting Power", value: "00,000,000" },
  ];

  return (
    <div className="flex flex-col bg-white pl-6 pr-10 pt-4 pb-6 rounded-xl divide-grey-medium">
      <h1>Voting Results</h1>
      <hr className="mt-4 mb-6 h-[1px]" />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-6">
          {results &&
            voteActions &&
            voteActions.map((voteAction) => {
              return (
                <ResultBar
                  key={voteAction}
                  percentage={results[voteAction].percentage}
                  amount={results[voteAction].total}
                  status={voteAction}
                />
              );
            })}
          <button className="max-w-min">
            <h1 className="text-xs underline decoration-1 whitespace-nowrap">
              View all votes
            </h1>
          </button>
        </div>
        <StatsTable stats={stats} />
      </div>
    </div>
  );
}
