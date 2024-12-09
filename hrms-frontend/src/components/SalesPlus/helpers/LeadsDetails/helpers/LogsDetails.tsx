import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../../../redux/store";
import rightArrowIcon from "../../../../../assets/rightArrowIcon.png";
import arrowRightIcon from "../../../../../assets/ArrowRight.png";
import callIcon from "../../../../../assets/callIcon.png";
import plusIcon from "../../../../../assets/plusIcon.png";
import AddNotedModal from "./AddNotedModal";
import { Divider } from "antd";
import {
  WhatsAppOutlined,
  StarOutlined,
  PhoneOutlined,
  MailOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { getLeadlogApi } from "../../../../../redux/api/SalesPlus/LeadDetails";

const LogsDetails = () => {
  let { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const addNewLeadlogNote = useSelector(
    (state: any) => state?.addNewLeadlogNote
  );
  const addNewLeadlog = useSelector((state: any) => state?.addNewLeadlog);
  const updateLeadStatus = useSelector((state: any) => state?.updateLeadStatus);
  const [toggleId, setToggleId] = useState<boolean | number | string | null>(
    null
  );
  const getLeadlog = useSelector((state: any) => state?.getLeadlog);
  useEffect(() => {
    getLeadlogApi(dispatch, Number(id));
  }, [id, addNewLeadlogNote?.data, addNewLeadlog?.data, updateLeadStatus.data]);

  return (
    <>
      {toggleId !== null && (
        <AddNotedModal toggleId={toggleId} setToggleId={setToggleId} />
      )}
      <div className="mt-4 bg-[#FFFFFF] dark:bg-dark-grayprimary dark:text-white p-[15px] rounded-xl ">
        <h4 className="text-[#344054] dark:text-white text-[1.1875rem] font-medium mb-2">
          Logs
        </h4>
        <div className="overflow-auto h-[600px]">
          {getLeadlog?.data?.items.length > 0 ? (
            getLeadlog?.data?.items
              ?.slice()
              .reverse()
              .map((item: any, i: number) => {
                return (
                  <div key={i} className="mt-10">
                    <div className="flex items-center gap-1">
                      {" "}
                      {item?.logStatus === "whatsapp" ? (
                        <WhatsAppOutlined />
                      ) : item?.logStatus === "statusChange" ? (
                        <StarOutlined />
                      ) : item?.logStatus === "appointment" ? (
                        <BookOutlined />
                      ) : item?.logStatus === "email" ? (
                        <MailOutlined />
                      ) : (
                        <PhoneOutlined className="scale-x-[-1]" />
                      )}
                      <span className="text-[1rem] font-bold text-[#292D35] dark:text-white ">
                        {" "}
                        {`${item?.logStatus[0].toUpperCase()}${item?.logStatus.substring(
                          1,
                          item?.logStatus.length
                        )}`}
                      </span>{" "}
                      {!item?.leadlogNote?.note && (
                        <button
                          className="ml-2 text-[#3D4350] dark:text-white text-[.75rem] font-semibold flex items-center  h-[24px] rounded-full border p-1 "
                          onClick={() => setToggleId(item?.id)}
                        >
                          {" "}
                          + Add note
                        </button>
                      )}
                    </div>
                    <p className="text-[#667085] dark:text-white text-[.75rem] font-medium">
                      {moment(item.createdAt).format("YYYY-MM-DD hh:mm A")}
                    </p>
                    <p className="text-[#667085] dark:text-white text-[.75rem] font-medium">
                      Created By:{" "}
                      {item?.createdByUser?.companyUserProfile?.name}
                    </p>
                    <div className="flex ml-2">
                      <div>
                        {item?.previousStatus && item?.newStatus && (
                          <div className="flex mt-6">
                            <img
                              src={rightArrowIcon}
                              className="h-[18px]"
                              alt=""
                            />
                            <div className="flex gap-1 ml-2">
                              {" "}
                              <span className="text-[red] text-[.75rem] bg-[rgb(243,248,253)] h-[24px] rounded-full flex items-center p-2">
                                {item?.previousStatus}
                              </span>{" "}
                              <div className="flex gap-1">
                                {" "}
                                <img
                                  src={arrowRightIcon}
                                  className="h-[10px] w-[.9375rem] mt-[6px]"
                                  alt=""
                                />{" "}
                                <span className="text-[green] text-[.75rem] bg-[rgb(243,248,253)] h-[24px] rounded-full  flex items-center p-2">
                                  {item?.newStatus}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        )}
                        {item?.leadlogNote?.note && (
                          <div className="flex mt-6 w-full ">
                            <img
                              src={rightArrowIcon}
                              className="h-[18px]"
                              alt=""
                            />{" "}
                            <div className="w-full ml-1">
                              <p className="text-[#667085] dark:text-white text-[.875rem] font-medium ml-1">
                                Note Added
                              </p>
                              <div className="p-[10px] border w-full rounded-[8px] inline-block ml-1">
                                <p className="text-[#667085] dark:text-white text-[.75rem] font-bold">
                                  {item?.leadlogNote?.createdAt
                                    ? moment(
                                        item?.leadlogNote?.createdAt
                                      ).format("YYYY-MM-DD hh:mm A")
                                    : ""}
                                </p>
                                <textarea
                                  className="text-[#667085] dark:text-white text-[.75rem] font-medium bg-transparent  resize-none w-full mt-1"
                                  disabled
                                  value={item?.leadlogNote?.note}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-4">
                      <Divider className="dark:bg-white" />
                    </div>
                  </div>
                );
              })
          ) : (
            <div>
              <h2>No Data</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LogsDetails;
