import { useEffect, useState } from "react";
import {
  signupIcon,
  signupsBgImg,
  subscriptionBgImg,
  subscriptionIcon,
  webClicksBgImg,
  webClicksIcon,
} from "../../../../assets/DashboardAssets";
import { getDasboardStatsApi } from "../../../../services/api/Dashboard/Main";
import StatisticCard from "./StatisticCard";

const StatisticCards = () => {
  const [stats, setStats] = useState({totalSubscribers: 0, totalUser:0, clicks: 0});

  useEffect(() => {
    getDasboardStatsApi().then((res) => {
      setStats(res?.data);
    });
  }, []);

  return (
    <div className="flex justify-evenly items-center flex-col sm:flex-row">
      <StatisticCard
        title="No of Subscribers"
        bgColor="#014043"
        bgImg={subscriptionBgImg}
        icon={subscriptionIcon}
        count={stats?.totalSubscribers}
      />
      <StatisticCard
        title= "No of Signups"
        bgColor= "#9747FF"
        bgImg= {signupsBgImg}
        icon= {signupIcon}
        count= {stats?.totalUser}
      />
      <StatisticCard
        title= "No of Website Clicks"
        bgColor= "#4285F4"
        bgImg= {webClicksBgImg}
        icon= {webClicksIcon}
        count= {stats?.clicks}
      />
    </div>
  );
};

export default StatisticCards;
