import CoreTeam from "@/components/history/CoreTeam";
import Counter from "@/components/history/Counter";
import HistoryGrid from "@/components/history/HistoryGrid";
import QuoteSection from "@/components/history/QuoteSection";
import { History } from "@/constants/dummy-data/history/data";
export default function Page() {
  return (
    <>
      <div className="px-10 w-full  gap-y-3 mt-28 mb-8">
        <p className="subpage-heading my-4">{History?.title}</p>
        <p className="my-4 primary-paragraph">{History?.description}</p>
        <Counter />
      </div>
        <HistoryGrid />

      <QuoteSection />
      <div className="px-10 w-full  gap-y-3 my-10">
        <CoreTeam />
      </div>
    </>
  );
}
