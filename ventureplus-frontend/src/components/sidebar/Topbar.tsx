import { MenuProps } from "antd/lib";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addIcon from "../../assets/addIcon.svg";
import { businessIcon } from "../../assets/navbarAssets";
import useToggle from "../../hooks/useToggle";
import { clearBusinessPlansByBusinessId } from "../../redux/slices/BusinessPlan/getAllBusinessPlansByBusinessIdSlice";
import { setCurrentSelectedBusiness } from "../../redux/slices/SelectedBusiness/selectedBusinessSlice";
import { setCurrentSelectedBusinessPlan } from "../../redux/slices/SelectedBusinessPlan/selectedBusinessPlanSlice";
import { RootState } from "../../redux/store";
import { getBusinessesApi } from "../../services/api/Business";
import { getAllBusinessPlansByBusinessIdApi } from "../../services/api/BusinessPlan";
import { getBusinessCountApi } from "../../services/api/GetBusinessCount";
import {
  getSubscriptionPlanApi,
  getUsersSubscribedPlanApi,
} from "../../services/api/SubscriptionPlan";
import { getFromStorage, setInStorage } from "../../utils/storage";
import NewBusinessModal from "../../views/AccountSettings/helpers/Business/helpers/NewBusinessModal";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { websiteLogo } from "../../assets/website";
import RoundedButton from "../button/RoundedButton";
import logo from "./../../assets/website/Logo.svg";
import SidebarUserProfile from "./SidebarUserProfile";
import PlanLimitModal from "../modals/PlanLimitModal";
import { cleargetUserSubscribedplan } from "../../redux/slices/SubscriptionPlan/getUserSubscribedplanSlice";

interface Props {
  labels: { [label: string]: string };
}

const Topbar = ({ labels }: Props) => {
  const dispatch = useDispatch();
  const businessPlan = getFromStorage("businessPlan");
  const location = useLocation();
  const getBusinesses = useSelector(
    (state: RootState) => state.getBusinesses?.data
  );
  const getPlansByBusinessId = useSelector(
    (state: RootState) => state.getPlansByBusinessId?.data
  );
  const subscription = useSelector(
    (state: RootState) => state.getSubscriptionPlan
  );
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBusinessPlan, setSelectedBusinessPlan] = useState<any>(null);
  const [subscriptionPlan, setSubscriptionPlan] = useState<any>(subscription);
  const [open, toggle] = useToggle();

  const navigate = useNavigate();

  const [items, setItems] = useState<MenuProps["items"]>([
    {
      key: "1",
      label: (
        <div className="rounded-[10px] p-2 flex flex-col h-[45px] items-center gap-[8px] min-w-[200px]">
          <RoundedButton
            title={"New Business"}
            type="primary"
            className="w-full"
            sm
            onClick={() => toggle()}
          />
          <hr className="w-full border-strokes mb-[10px]" />
        </div>
      ),
    },
  ]);

  useEffect(() => {
    getSubscriptionPlanApi(dispatch);
  }, []);

  useEffect(() => {
    if (subscription?.data?.data?.length > 0) {
      setSubscriptionPlan(subscription?.data);
    }
  }, [subscription]);

  useEffect(() => {
    getUsersSubscribedPlanApi(dispatch);
    return () => {
      dispatch(cleargetUserSubscribedplan());
    };
  }, []);

  // useEffect(() => {
  //   if (subscriptionPlan) {
  //     setInStorage("subscriptionPlans", subscriptionPlan?.data);
  //   }
  // }, [subscriptionPlan]);

  useEffect(() => {
    getBusinessesApi(dispatch, onSuccess);
  }, []);

  useEffect(() => {
    if (selectedBusiness) {
      getAllBusinessPlansByBusinessIdApi(dispatch, selectedBusiness?.id);
    }
  }, [selectedBusiness]);

  useEffect(() => {
    if (selectedBusiness && location?.pathname === "/edit-plan") {
      getAllBusinessPlansByBusinessIdApi(dispatch, selectedBusiness?.id);
    }
  }, [location]);

  useEffect(() => {
    if (getPlansByBusinessId?.data?.length > 0) {
      if (businessPlan) {
        setSelectedBusinessPlan(businessPlan);
        dispatch(setCurrentSelectedBusinessPlan(businessPlan));
      } else if (getPlansByBusinessId?.data?.length > 0) {
        setInStorage("businessPlan", getPlansByBusinessId?.data?.[0]);
        setSelectedBusinessPlan(getPlansByBusinessId?.data?.[0]);
        dispatch(
          setCurrentSelectedBusinessPlan(getPlansByBusinessId?.data?.[0])
        );
      } else {
        setInStorage("businessPlan", null);
        setSelectedBusinessPlan(null);
        dispatch(setCurrentSelectedBusinessPlan(null));
      }
    }
  }, [getPlansByBusinessId]);

  const onSuccess = (res: any) => {
    if (res?.data?.businesses?.length <= 0) {
      return;
    }
    const business = getFromStorage("business");
    if (business) {
      dispatch(setCurrentSelectedBusiness(business));
      setSelectedBusiness(business);
    } else {
      setInStorage("business", res?.data?.businesses?.[0]);
      dispatch(setCurrentSelectedBusiness(res?.data?.businesses?.[0]));
      setSelectedBusiness(res?.data?.businesses?.[0]);
    }
  };

  const isLimitExceeded = () => {
    return (
      Number(getBusinessCount?.data?.data?.allowed?.businessCount) -
        Number(getBusinessCount?.data?.data?.current?.businesscount) <=
      0
    );
  };

  useEffect(() => {
    if (selectedBusiness?.id) {
      const newItems = [
        {
          key: "1",
          label: (
            <div className="rounded-[10px] m-4 flex flex-col h-[45px] items-center gap-[8px] min-w-[200px]">
              <Button
                className="bg-[#016A70] text-[#FFFFFF] w-full rounded-full"
                onClick={() =>
                  isLimitExceeded() ? setIsModalOpen(true) : toggle()
                }
              >
                <img src={addIcon} />
                New Business
              </Button>
              <hr className="w-full border-strokes mb-[10px]" />
            </div>
          ),
        },
      ];

      for (
        let index = 0;
        index < getBusinesses?.data?.businesses?.length;
        index++
      ) {
        newItems.push({
          key: (index + 2).toString(),
          label: (
            <div
              onClick={() => {
                if (
                  getBusinesses?.data?.businesses?.[index]?.id ===
                  selectedBusiness?.id
                ) {
                  return;
                }
                setInStorage(
                  "business",
                  getBusinesses?.data?.businesses?.[index]
                );
                setSelectedBusiness(getBusinesses?.data?.businesses?.[index]);
                setInStorage("businessPlan", null);
                setSelectedBusinessPlan(null);
                dispatch(setCurrentSelectedBusinessPlan(null));
                dispatch(clearBusinessPlansByBusinessId());
                dispatch(
                  setCurrentSelectedBusiness(
                    getBusinesses?.data?.businesses?.[index]
                  )
                );
              }}
              style={{
                backgroundColor:
                  selectedBusiness?.id ===
                  getBusinesses?.data?.businesses?.[index]?.id
                    ? "#e3e7ef"
                    : "transparent",
              }}
              className={` rounded-[10px] p-2 flex h-[60px] items-center gap-[10px] mb-2 min-w-full `}
            >
              <div className="bg-background flex items-center justify-center w-[40px] h-[40px] rounded-[10px]">
                <img src={businessIcon} alt="" className="h-[24px] w-[24px]" />
              </div>
              <div>
                <p className="body-s font-semibold text-title">
                  {getBusinesses?.data?.businesses?.[index]?.name}
                </p>
                <p className="text-[12px] font-thin text-title">
                  Created on{" "}
                  {dayjs(
                    getBusinesses?.data?.businesses?.[index]?.createdAt
                  )?.format("YYYY-MM-DD")}
                </p>
              </div>
            </div>
          ),
        });
      }
      setItems(newItems);
    }
  }, [
    selectedBusiness,
    getBusinesses,
    currentSelectedBusiness,
    getBusinessCount,
  ]);

  useEffect(() => {
    getBusinessCountApi(dispatch);
  }, []);

  // useEffect(() => {
  //   if (getBusinessCount?.data) {
  //     setInStorage("businessCount", getBusinessCount?.data?.data);
  //   }
  // }, [getBusinessCount?.data]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      {open && <NewBusinessModal open={open} onClose={toggle} />}
      <div className=" sm:flex hidden justify-between items-center flex-wrap h-[82px] sticky ">
        <div onClick={() => navigate("/dashboard")} className="cursor-pointer">
          {" "}
          <img src={websiteLogo} alt="" className="h-[22px]" />
        </div>

        <SidebarUserProfile items={items} selectedBusiness={selectedBusiness} />
      </div>
      <div className="sm:hidden block">
        <div className="flex justify-between items-center  h-[82px] sticky ">
          <div
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer w-full flex items-center justify-center"
          >
            {" "}
            <img src={websiteLogo} alt="" className="h-[22px]" />
          </div>
        </div>
        <SidebarUserProfile items={items} selectedBusiness={selectedBusiness} />
      </div>
      <PlanLimitModal
        title="Business"
        onCancel={handleCancel}
        isVisible={isModalOpen}
      />
    </React.Fragment>
  );
};
export default Topbar;
