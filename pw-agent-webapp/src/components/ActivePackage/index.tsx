import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import dayjs from "dayjs";
import diamondImage from "../../assets/basicDiamond.png";
import starimage from "../../assets/starPackage.svg";
import { Col, Row } from "antd";
import CircularProgressBar from "./helpers/CircularProgressBar";
import { useEffect, useRef, useState } from "react";
import Button from "../../helpers/inputs/Button";
import CancelMembershipModal from "./helpers/CancelMembershipModal";
import UpdatePlanModal from "./helpers/UpdatePlanModal";

const ActivePackage = () => {
  const getProfile = useSelector((state: RootState) => state.getProfile);
  console.log(getProfile?.data);

  const [updatePlanModalState, setUpdatePlanModalState] = useState(false);
  const [cancelMembershipModalState, setCancelMembershipModalState] =
    useState(false);

  const ref: any = useRef();

  function troggleCancelMembership() {
    setCancelMembershipModalState((pre) => !pre);
  }
  function troggleupdateplan() {
    setUpdatePlanModalState((pre) => !pre);
  }

  return (
    <>
      {cancelMembershipModalState && (
        <CancelMembershipModal
          open={cancelMembershipModalState}
          close={troggleCancelMembership}
          pwAssid={
            getProfile?.data?.homeScreen?.headerList?.packageDetail
              ?.pwAssignPackageId
          }
        />
      )}
      {updatePlanModalState && (
        <UpdatePlanModal
          open={updatePlanModalState}
          close={troggleupdateplan}
          pwAssid={
            getProfile?.data?.homeScreen?.headerList?.packageDetail
              ?.pwAssignPackageId
          }
        />
      )}
      <div className="p-5">
        <Row gutter={24}>
          <Col xs={24} lg={10}>
            <div className="bg-[white] h-[100%] rounded-md p-3 px-5 relative">
              <div className="flex justify-between  items-center   ">
                <div className="bg-[#706FD3] bg-opacity-5 text-[#706FD3] rounded-xl px-[12px] py-[8px] font-medium text-[1rem] leading-4 h-[30px]">
                  {
                    getProfile?.data?.homeScreen?.headerList?.packageDetail
                      ?.PackageType
                  }{" "}
                  PLAN
                </div>
                <div>
                  <h1 className="text-[.9rem] text-[#7A7A7A]">Expiry Date</h1>
                  <h2 className="text-[#292D35] text-[1.1rem]">
                    {getProfile?.data?.homeScreen?.headerList?.packageDetail
                      ?.expireAt
                      ? dayjs(
                          getProfile?.data?.homeScreen?.headerList
                            ?.packageDetail?.expireAt
                        ).format("MMM DD,YYYY")
                      : ""}
                  </h2>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <div className="border-[1px] border-[#F0F1F3]  rounded-full w-[80px] h-[80px] p-[10px] flex items-center">
                  <img src={diamondImage} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[#1F2228] text-[1.372rem] font-semibold">
                  Custom Subscription
                </h1>
                <p className="text-[#5C5C5C] text-[1rem] font-medium">
                  RS{" "}
                  {
                    getProfile?.data?.homeScreen?.headerList?.packageDetail
                      ?.charges
                  }
                  /month
                </p>
              </div>
              <div className="py-[1.3rem] mb-[70px]">
                <div className="flex gap-3 mt-[20px] item-center">
                  <img src={starimage} alt="" className="w-[20px] " />
                  <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                    Total Listings{" "}
                    {
                      getProfile?.data?.homeScreen?.headerList?.packageDetail
                        ?.noListingTotal
                    }
                  </h3>
                </div>
                <div className="flex gap-3 mt-[20px] item-center">
                  <img src={starimage} alt="" className="w-[20px] " />
                  <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                    Total Refreshes{" "}
                    {
                      getProfile?.data?.homeScreen?.headerList?.packageDetail
                        ?.noOfRefreshTotal
                    }
                  </h3>
                </div>
                <div className="flex gap-3 mt-[20px] item-center">
                  <img src={starimage} alt="" className="w-[20px] " />
                  <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                    Total Hot Listings{" "}
                    {
                      getProfile?.data?.homeScreen?.headerList?.packageDetail
                        ?.hotListingTotal
                    }
                  </h3>
                </div>
                <div className="flex gap-3 mt-[20px] item-center">
                  <img src={starimage} alt="" className="w-[20px] " />
                  <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                    User Limit{" "}
                    {
                      getProfile?.data?.homeScreen?.headerList?.packageDetail
                        ?.noOfUserLimitTotal
                    }
                  </h3>
                </div>
                {getProfile?.data?.homeScreen?.headerList?.packageDetail
                  ?.digitalCatlog && (
                  <div className="flex gap-3 mt-[20px] item-center">
                    <img src={starimage} alt="" className="w-[20px] " />
                    <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                      WebEstate{" "}
                      {
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.digitalCatlog
                      }
                    </h3>
                  </div>
                )}
                <div className="flex gap-3 mt-[20px] item-center">
                  <img src={starimage} alt="" className="w-[20px] " />
                  <h3 className="text-[1.1rem] font-medium leading-[1.3rem]">
                    Appointment Limit{" "}
                    {
                      getProfile?.data?.homeScreen?.headerList?.packageDetail
                        ?.noOfTotalAppt
                    }
                  </h3>
                </div>
              </div>
              <Button
                label={"Upgrade Plan"}
                variant="filled"
                className="w-[90%] absolute bottom-5"
                onClick={troggleupdateplan}
              />
            </div>
          </Col>
          <Col xs={24} lg={14} className=" mt-5 lg:mt-0">
            <div className="w-full bg-[white] h-full rounded-md p-[20px] relative mb-[80px] flex flex-col items-center">
              <div className="flex align-top w-full">
                <h1 className="text-[1.2rem] font-medium">Package Usages</h1>
              </div>
              <Row justify={"center"}>
                <Col xs={12} lg={8}>
                  <div className="flex flex-col  items-center w-full p-[20px] ">
                    <CircularProgressBar
                      total={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.hotListingTotal
                      }
                      obtain={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.hotListingUse
                      }
                    />

                    <div className="mt-[10px]">
                      <h1 className="text-[#292D35] text-[1rem] font-medium">
                        Hot Listing
                      </h1>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={8}>
                  <div className="flex flex-col  items-center w-full p-[20px] ">
                    <CircularProgressBar
                      total={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noListingTotal
                      }
                      obtain={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noListingUse
                      }
                    />
                    <div className="mt-[10px]">
                      <h1 className="text-[#292D35] text-[1rem] font-medium">
                        General Listing
                      </h1>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={8}>
                  <div className="flex flex-col  items-center w-full p-[20px] ">
                    <CircularProgressBar
                      total={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfRefreshTotal
                      }
                      obtain={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfRefreshUse
                      }
                    />
                    <div className="mt-[10px]">
                      <h1 className="text-[#292D35] text-[1rem] font-medium">
                        Refresh Limit
                      </h1>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={8}>
                  <div className="flex flex-col  items-center w-full p-[20px] ">
                    <CircularProgressBar
                      total={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfUserLimitTotal
                      }
                      obtain={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfUserLimitUse
                      }
                    />
                    <div className="mt-[10px]">
                      <h1 className="text-[#292D35] text-[1rem] font-medium">
                        User Limit
                      </h1>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={8}>
                  <div className="flex flex-col  items-center w-full p-[20px] ">
                    <CircularProgressBar
                      total={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfTotalAppt
                      }
                      obtain={
                        getProfile?.data?.homeScreen?.headerList?.packageDetail
                          ?.noOfAppt
                      }
                    />
                    <div className="mt-[10px]">
                      <h1 className="text-[#292D35] text-[1rem] font-medium">
                        Appointment
                      </h1>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button
                label={"Cancel Membership"}
                variant="outlined"
                className="w-[90%]  absolute bottom-5"
                onClick={troggleCancelMembership}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ActivePackage;
