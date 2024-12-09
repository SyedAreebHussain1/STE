import { Col, Modal, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskApi,
  getTaskByEnumApi,
  markAsCompleteApi,
  viewTaskDetailsApi,
} from "../../../../../redux/api/TaskOverview";
import calanderIcon from "../../../../../assets/calanderIcon.svg";

import dayjs from "dayjs";
import { CgClose } from "react-icons/cg";
import { getFromStorage } from "../../../../../utils/storage";
import { useNavigate } from "react-router-dom";

const ViewTaskDetails = ({ open, close, task, enumValue }: any) => {
  const viewTaskDetails = useSelector((state: any) => state.viewTaskDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    if (task?.id) {
      viewTaskDetailsApi(dispatch, task?.id);
    }
  }, [task?.id]);

  function maskAsComplete() {
    markAsCompleteApi(dispatch, task?.id, onSuccess);
  }

  let user = getFromStorage("user");

  const onSuccess = () => {
    if (user.role === "agentManager") {
      getTaskByEnumApi(
        dispatch,
        { page: 1, limit: 10 },
        enumValue === 0 ? "MyTasks" : "StaffTasks"
      );
    } else {
      getTaskApi(dispatch, { page: 1, limit: 10 });
    }
    close();
  };
  const navigate = useNavigate();
  return (
    <div
      className="fixed top-0 left-0 z-30 flex justify-center items-center w-full h-full bg-[#00000066] overflow-y-auto"
      onClick={() => close()}
    >
      <div
        className="bg-[white] h-max w-[844px] rounded-md overflow-hidden m-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between px-[1rem] py-[13.67px] border-b-[2px] border-[#F2F4F7]">
          <h1 className="text-[#475467] text-[1rem] font-medium">
            Task Details
          </h1>
          <button className="cursor-pointer" onClick={close}>
            <CgClose fontSize={16} />
          </button>
        </div>
        <Row>
          <Col xs={14}>
            <div className="px-[24px]">
              <div className="py-[24px] ">
                <h1 className="text-[1.44rem] text-[#1D2939] font-semibold ">
                  {viewTaskDetails?.data?.title}
                </h1>
                <p className="text=[#344054] text-[0.938rem] leading-[1.406rem]">
                  {viewTaskDetails?.data?.description}
                </p>
              </div>
              {viewTaskDetails?.data?.notes && (
                <div>
                  <h3 className="mb-[13px] mt-[4px] text-[1rem]  text-[#1D2939] font-medium h-[36px] border-b-[2px] border-[#F2F4F7]">
                    Notes
                  </h3>
                  <div className="mt-[28px] flex items-center  gap-2">
                    <h4 className="text-[0.813rem] font-medium text-[#1D2939]">
                      {viewTaskDetails?.data?.notes}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </Col>
          <Col xs={10} className="bg-[#F9FAFB] w-full h-full">
            <div className="py-[18px] px-[16px]  ">
              {viewTaskDetails?.data?.assignedToUser?.profile?.fullName && (
                <div className="border-[1px] border-[#F2F4F7] rounded-[5px] h-[86px] mb-[18px]">
                  <h4 className="px-[12px] pt-[12px] text-[#667085] text-[0.813rem] font-medium ">
                    Assign To
                  </h4>
                  <div
                    className="flex px-[12px] mt-[6px] items-center gap-2"
                    // onClick={() => {
                    //   navigate(
                    //     `/staff-management/${viewTaskDetails?.data?.assignedToUser?.id}`,
                    //     { state: viewTaskDetails?.data?.assignedToUser }
                    //   );
                    // }}
                  >
                    <div className="w-[32px] h-[32px] bg-[#34405414] rounded-full text-[0.813rem] font-normal flex items-center justify-center">
                      {viewTaskDetails?.data?.assignedToUser?.profile?.fullName
                        ? viewTaskDetails?.data?.assignedToUser?.profile?.fullName
                            ?.split(" ")
                            ?.map((item: any) => item?.[0])
                            .join("")
                            ?.toUpperCase()
                        : ""}
                    </div>
                    <h4 className="text-[0.813rem] font-medium text-[#1D2939]">
                      {viewTaskDetails?.data?.assignedToUser?.profile?.fullName}
                    </h4>
                  </div>
                </div>
              )}
              {viewTaskDetails?.data?.lead_id && (
                <div className="border-[1px] border-[#F2F4F7] rounded-[5px] h-[86px] mb-[18px]">
                  <h4 className="px-[12px] pt-[12px] text-[#667085] text-[0.813rem] font-medium ">
                    Associate Lead
                  </h4>
                  <div
                    className="flex px-[12px] mt-[6px] items-center gap-2"
                    onClick={() => {
                      navigate(
                        `/lead-management/detail/${viewTaskDetails?.data?.lead_id}`
                      );
                    }}
                  >
                    <div className="w-[32px] h-[32px] bg-[#34405414] rounded-full text-[0.813rem] font-normal flex items-center justify-center">
                      {viewTaskDetails?.data?.lead?.client?.name
                        ? viewTaskDetails?.data?.lead?.client?.name
                            ?.split(" ")
                            ?.map((item: any) => item?.[0])
                            .join("")
                            ?.toUpperCase()
                        : ""}
                    </div>
                    <h4 className="text-[0.813rem] font-medium text-[#1D2939]">
                      {viewTaskDetails?.data?.lead?.client?.name}
                    </h4>
                  </div>
                </div>
              )}
              <div className="border-[1px] border-[#F2F4F7] rounded-[5px] h-[86px] ">
                <h4 className="px-[12px] pt-[12px] text-[#667085] text-[0.813rem] font-medium ">
                  Priority
                </h4>
                <div className="flex px-[12px] mt-[6px] items-center gap-2">
                  <div>
                    {viewTaskDetails?.data?.priority === "High" && (
                      <div className="w-[10px] h-[10px] bg-[red] rounded-full"></div>
                    )}
                    {viewTaskDetails?.data?.priority === "Medium" && (
                      <div className="w-[10px] h-[10px] bg-[yellow] rounded-full"></div>
                    )}
                    {viewTaskDetails?.data?.priority === "Low" && (
                      <div className="w-[10px] h-[10px] bg-[#fffff0] rounded-full"></div>
                    )}
                  </div>
                  <h4 className="text-[0.938rem] font-medium text-[#1D2939]">
                    {viewTaskDetails?.data?.priority}
                  </h4>
                </div>
              </div>
              <div className="border-[1px] border-[#F2F4F7] rounded-[5px] h-[86px] mt-[18px]">
                <h4 className="px-[12px] pt-[12px] text-[#667085] text-[0.813rem] font-medium ">
                  Due Date
                </h4>
                <div className="flex px-[12px] mt-[6px] items-center gap-2">
                  <div className=" flex items-center justify-center">
                    <img src={calanderIcon}></img>
                  </div>
                  <h4 className="text-[0.938rem] font-medium text-[#1D2939] ">
                    {dayjs(viewTaskDetails?.data?.dueDate).format("MMMM DD")}
                  </h4>
                </div>
              </div>
              <div className="mt-[18px]">
                <div>
                  <h3 className="text-[#344054] text-[0.813rem] font-medium">
                    Created By
                  </h3>
                  <div className="flex  mt-[6px] items-center gap-2">
                    <div className="w-[32px] h-[32px] bg-[#34405414] rounded-full text-[0.813rem] font-normal flex items-center justify-center">
                      {viewTaskDetails?.data?.createdByUser?.profile?.fullName
                        ? viewTaskDetails?.data?.createdByUser?.profile?.fullName
                            ?.split(" ")
                            ?.map((item: any) => item?.[0])
                            .join("")
                            ?.toUpperCase()
                        : ""}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[0.7rem] font-medium text-[#1D2939] leading-3">
                        {
                          viewTaskDetails?.data?.createdByUser?.profile
                            ?.fullName
                        }
                      </h4>
                      <p className="leading-0 text-[.7rem] font-bold">
                        {viewTaskDetails?.data?.createdByUser?.role?.title
                          ? viewTaskDetails?.data?.createdByUser?.role?.title?.replace(
                              "agent",
                              ""
                            )
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[18px]">
                  <h3 className="text-[#344054] text-[0.813rem] font-medium">
                    Created At
                  </h3>
                  <h4 className="text-[#667085] text-[0.813rem] font-medium">
                    {dayjs(viewTaskDetails?.data?.createdAt).format(
                      "MMM DD YYYY hh:mm A"
                    )}
                  </h4>
                </div>
                <div className="mt-[18px]">
                  <h3 className="text-[#344054] text-[0.813rem] font-medium">
                    Updated At
                  </h3>
                  <h4 className="text-[#667085] text-[0.813rem] font-medium">
                    {dayjs(viewTaskDetails?.data?.updatedAt).format(
                      "MMM DD YYYY hh:mm A"
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className=" flex items-center justify-end p-[24px]">
          <button
            className="text-[#F9FAFB] text-[1rem] font-semibold px-[24px] py-[12px] bg-[#12B76A] rounded-[10px] cursor-pointer disabled:bg-[gray] disabled:cursor-not-allowed hover:bg-[green]"
            disabled={viewTaskDetails?.data?.isCompleted}
            onClick={maskAsComplete}
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskDetails;
