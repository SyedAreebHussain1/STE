import React, { useEffect } from "react";
import { Punch } from "../../../assets/onBoardingFinalAssets";
import RoundedButton from "../../../components/button/RoundedButton";
import { useNavigate } from "react-router-dom";
import { getSubscriptionPlanApi } from "../../../services/api/SubscriptionPlan";
import { getBusinessesApi } from "../../../services/api/Business";
import { useDispatch } from "react-redux";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import { setCurrentSelectedBusiness } from "../../../redux/slices/SelectedBusiness/selectedBusinessSlice";

const FinalScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const initialPlan = () => {
    navigate("/initial-business-plan");
  };
  useEffect(() => {
    getSubscriptionPlanApi(dispatch);
  }, []);
  useEffect(() => {
    getBusinessesApi(dispatch, onSuccess);
  }, []);



  const onSuccess = (res: any) => {
    if (res?.data?.businesses?.length <= 0) {
      return;
    }
    const business = getFromStorage("business");
    if (business) {
      dispatch(setCurrentSelectedBusiness(business));
    } else {
      setInStorage("business", res?.data?.businesses?.[0]);
      dispatch(setCurrentSelectedBusiness(res?.data?.businesses?.[0]));
    }
  };


  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-16 items-center">
          <div>
            <img src={Punch} alt="Punch" className="w-72 h-72" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              You're In! Let's Get Started.
            </h1>
            <p className="text-[20px] font-medium">
              Let's start working on your business plan and take it to the next
              level together!
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className=" w-full items-center justify-center flex"
              onClick={() => {
                initialPlan();
              }}
            >
              <p className="text-[#016A70] w-[150px] border border-[#016A70] rounded-3xl text-center p-2">
                Start Initial Plan
              </p>
            </button>
            <RoundedButton
              title={"Go to Dashboard"}
              className="w-full my-2"
              type="primary"
              sm
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FinalScreen;
