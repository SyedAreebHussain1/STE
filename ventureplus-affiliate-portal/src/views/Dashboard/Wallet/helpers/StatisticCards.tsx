import { useEffect, useState } from "react";
import {
  availableAmmountImg,
  transactionBgImg,
  transactionIcon,
} from "../../../../assets/WalletAssets";
import { getWalletStatsApi } from "../../../../services/api/Dashboard/Wallet";

const StatisticCards = () => {
  const [stats, setStats] = useState({
    availableAmount: 0,
    totalTransactionsCount: 0,
  });

  useEffect(() => {
    getWalletStatsApi().then((res) => {
      setStats(res?.data);
    });
  }, []);

  return (
    <div className="flex justify-evenly items-center flex-col sm:flex-row mb-4">
      <div
        style={{
          background:
            "linear-gradient(94.59deg, #016A70 8.68%, #34A853 196.35%)",
        }}
        className="flex justify-between p-4 items-center w-[50%] h-[150px] rounded-lg"
      >
        <div className="flex flex-col gap-3">
          <p className="text-foreground font-semibold text-lg">
            Available Amount
          </p>
          <p className="text-[white] font-bold text-4xl ml-4">
            ${stats?.availableAmount}
          </p>
        </div>
        <img src={availableAmmountImg} alt="" />
      </div>
      <div
        className={`relative bg-[#4285F4] rounded-lg h-[150px] border w-[45%]`}
      >
        <div className="flex gap-2 items-center m-4">
          <div className="w-10 h-10 rounded-lg bg-[white] bg-opacity-[13%] p-1 flex items-center justify-center">
            <img src={transactionIcon} alt="" />
          </div>
          <p className="text-foreground font-semibold text-lg">
            No. of Transactions
          </p>
        </div>

        <p className="text-[white] font-bold text-4xl ml-4">
          {stats?.totalTransactionsCount}
        </p>
        <img
          src={transactionBgImg}
          alt=""
          className="absolute right-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default StatisticCards;
