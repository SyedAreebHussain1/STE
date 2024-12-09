import { useEffect, useState } from "react";
import {
  reviewsBg,
  upvoteBg,
  viewsBg,
} from "../../../../../assets/ProductPromotions";
import { ProductPromotionStatsT } from "./OwnProduct";

interface StatsCardsI {
  stats: ProductPromotionStatsT;
}

type StatsInfoT = {
  bgImg: string;
  title: string;
  count: number;
};

const StatsCards = ({ stats }: StatsCardsI) => {
  const [statsInfo, setStatsInfo] = useState<[] | StatsInfoT[]>([]);

  useEffect(() => {
    setStatsInfo([
      { bgImg: viewsBg, title: "Views", count: stats?.ViewCounts ? stats?.ViewCounts : 0 },
      {
        bgImg: upvoteBg,
        title: "Upvotes",
        count: stats?.VoteCounts ? stats?.VoteCounts : 0,
      },
      {
        bgImg: reviewsBg,
        title: "Reviews",
        count: stats?.reviewsCounts ? stats?.reviewsCounts : 0,
      },
    ]);
  }, [stats]);

  return (
    <div className="flex gap-4 flex-wrap mt-4 items-center justify-center">
      {statsInfo.map((st, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${st.bgImg})`,
          }}
          className="h-[225px] w-[365px] relative rounded-2xl overflow-hidden"
        >
          <div className="relative flex flex-col gap-2 w-full h-full px-6 py-10 justify-between">
            <h1 className="text-[#363F52] heading-m leading-[40.6px] font-semibold">
              {st.title}
            </h1>
            <div className="flex gap-4 items-center">
              <h1 className="heading-xl font-semibold">{st.count}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
