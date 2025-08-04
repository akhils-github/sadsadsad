
import { ClientCard } from "@/components/card/ClientCard";
import {
  clientStories,
  clientStoriesIntro,
} from "@/constants/dummy-data/clients/data";

export default function Page() {
  return (
    <div className="px-10 flex flex-col gap-y-3 mt-28">
      <p className="subpage-heading">{clientStoriesIntro?.title}</p>
      <div className="mt-5 py-5 primary-paragraph">
        <p>{clientStoriesIntro?.description}</p>
      </div>
      <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2 md:gap-15 gap-10 primary-paragraph">
        {clientStories.map((item) => (
          <ClientCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}