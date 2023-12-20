import VotingBar from "./components/voting-bar";
import VotingResults from "./components/voting-results";
import TextBody from "./components/text-body";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="bg-default text-navy flex min-h-screen flex-col items-center pt-[120px]">
      <div className="w-[884px] mb-[84px]">
        <Header />
        <div className="flex flex-col gap-2">
          <VotingBar />
          <VotingResults />
          <TextBody />
        </div>
      </div>
    </main>
  );
}
