export default function VoteAction() {
  return (
    <div className="flex flex-row items-center gap-2">
      <button className="bg-support h-10 w-[100px] rounded-lg text-center">
        <p className="text-white text-xs leading-5 font-semibold">Support</p>
      </button>
      <button className="bg-reject h-10 w-[100px] rounded-lg text-center">
        <p className="text-white text-xs leading-5 font-semibold">Reject</p>
      </button>
    </div>
  );
}
