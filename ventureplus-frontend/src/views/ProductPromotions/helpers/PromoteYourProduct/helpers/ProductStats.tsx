import { useEffect, useState } from "react";
import { commentIcon, eyeIcon } from "../../../../../assets/ProductPromotions";
import { triangleIcon } from "../../../../../assets/dashboardAssets";

interface ProductStatsI {
  stats: { reviewsCounts: number; VoteCounts: number; viewsCounts: number };
}

export type StatsInfoT = {
  icon: string;
  title: string;
  count: number;
};

const ProductStats = ({ stats }: ProductStatsI) => {
  const [statsInfo, setStatsInfo] = useState<[] | StatsInfoT[]>([]);

  useEffect(() => {
    setStatsInfo([
      {
        icon: eyeIcon,
        title: "Views",
        count: stats?.viewsCounts ? stats?.viewsCounts : 0,
      },
      {
        icon: triangleIcon,
        title: "Upvotes",
        count: stats?.VoteCounts ? stats?.VoteCounts : 0,
      },
      {
        icon: commentIcon,
        title: "Reviews",
        count: stats?.reviewsCounts ? stats?.reviewsCounts : 0,
      },
    ]);
  }, [stats]);

  return (
    <div className="flex gap-4 flex-wrap mt-4 items-center w-full justify-center">
      {statsInfo?.length > 0 &&
        statsInfo.map((item, i) => (
          <div
            key={i}
            style={{ boxShadow: "0px 4px 9.7px 0px #002A2D29" }}
            className="h-[150px] sm:w-[365px] w-full    lg:w-[32.3%]  relative rounded-2xl overflow-hidden"
          >
            <div className="relative flex flex-col gap-2 w-full h-full p-6 justify-between">
              <div className="flex  gap-2 items-center justify-start ">
                {" "}
                <img src={item.icon} alt="" className="w-6 h-6" />
                <h1 className="text-[#363F52] heading-m leading-[40.6px] font-semibold">
                  {item.title}
                </h1>
              </div>
              <div className="flex gap-4 items-center justify-start ">
                <h1 className="heading-xl font-semibold">{item.count}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductStats;
