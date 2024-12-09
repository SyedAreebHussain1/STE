import { useEffect } from "react";
import { dollarIcon } from "../../../assets/subscriptionAssets";
import { getAddOnsApi } from "../../../services/api/SubscriptionPlan";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import RoundedButton from "../../../components/button/RoundedButton";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const GrowBusinessCards = () => {
  const dispatch = useDispatch();
  const addOns = useSelector((state: RootState) => state.getAddOns);
  const navigate = useNavigate();

  useEffect(() => {
    getAddOnsApi(dispatch);
  }, []);

  return (
    <>
      {addOns.loading && (
        <div className="w-full bg-background flex items-center justify-center h-[200px]">
          <Spin spinning={addOns?.loading} />
        </div>
      )}
      {!addOns.loading && (
        <div className="flex flex-wrap gap-4 sm:justify-normal justify-center">
          {addOns?.data?.data?.map((addon: any, i: number) => (
            <div
              key={addon?.id}
              className="bg-background backdrop-blur-[25px] h-[230px] sm:min-w-[250px] min-w-[280px] lg:w-[30%] p-4 shadow-lg rounded-lg flex flex-col"
            >
              <h3 className="heading-xs font-semibold">
                Add {addon?.title.includes("Credit") ? "Credits" : addon?.title}
              </h3>
              <p className="body-s text-para leading-5 line-clamp-3">
                {addon?.description
                  ? addon?.description
                  : "Perfect for professionals and small businesses in need of significant AI integration"}
              </p>

              <div className="flex-1 flex justify-end  flex-col gap-2 w-full">
                <div className="relative">
                  <img src={dollarIcon} alt="" className="absolute top-0" />

                  <div className="flex items-baseline">
                    <h1 className="heading-xl font-semibold relative ml-6 mt-3">
                      {addon?.price}
                    </h1>
                    <h3 className="text-body">
                      /{" "}
                      {addon?.title.includes("Credit")
                        ? "1000 Credits"
                        : addon?.title}
                    </h3>
                  </div>
                </div>
                <RoundedButton
                  title="Buy Now"
                  type="primary"
                  bold
                  sm
                  onClick={() => navigate(`/check-out/${addon?.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default GrowBusinessCards;
