import VoteAction from "./vote-action";

export default function VotingBar() {
  const totalVotes = "00,000.00";

  return (
    <div className="flex flex-row items-center justify-between bg-white pl-6 pr-10 py-5 rounded-xl">
      <h1>Your Voting</h1>
      <div className="flex flex-row items-center">
        <div className="flex flex-col text-right mr-10">
          <p className="text-xs leading-5 font-normal">Voting Power</p>
          <p className="text-sm leading-6 font-semibold">{`${totalVotes} VOTE`}</p>
        </div>
        <VoteAction />
      </div>
    </div>
  );
}
