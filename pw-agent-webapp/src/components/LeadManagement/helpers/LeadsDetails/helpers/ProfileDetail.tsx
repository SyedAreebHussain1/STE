import { Avatar, Col, Row, Select, Tooltip } from "antd";
import emailIcon from "../../../../../assets/mail.png";
import whatsappIcon from "../../../../../assets/whatsapp.png";
import phoneIcon from "../../../../../assets/phone.png";
import addIcon from "../../../../../assets/add.png";
import moment from "moment";
import {
  addNewLeadlogApi,
  updateLeadStatusApi,
} from "../../../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import editIcon from "../../../../../assets/editIcon.png";
import FollowUpDaysUpdateModal from "./FollowUpDaysUpdateModal";
import { useNavigate, useParams } from "react-router-dom";
import ShowPhoneNumberModal from "./ShowPhoneNumberModal";
import AssignedLeadsDrawer from "./AssignedLeadsDrawer";

const ProfileDetail = ({ data, edit }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [toggleId, setToggleId] = useState<boolean | number | string | null>(
    null
  );
  const [toggleForAssinged, setToggleForAssinged] = useState<any>(false);
  const [toggle, setToggle] = useState<string>("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState({
    status: "",
  });
  function onChange(val: string) {
    const body = { status: val };
    updateLeadStatusApi(dispatch, body, Number(data.data?.id));
  }
  useEffect(() => {
    setState({
      status: data?.data?.status,
    });
  }, [data?.data]);
  function handleLog(e: string) {
    if (id && e) {
      addNewLeadlogApi(dispatch, {
        leadId: id,
        logStatus: e,
      });
      if (e === "appointment") {
        navigate(`/appointment`);
      } else if (e === "phone") {
        setToggle(data?.data?.client?.phone);
      }
    }
  }
  return (
    <>
      {toggleId !== null && (
        <FollowUpDaysUpdateModal
          toggleId={toggleId}
          setToggleId={setToggleId}
        />
      )}
      {toggle !== "" && data?.data?.client?.phone && (
        <ShowPhoneNumberModal toggle={toggle} setToggle={setToggle} />
      )}
      {toggleForAssinged && (
        <AssignedLeadsDrawer
          data={data?.data}
          toggle={toggleForAssinged}
          setToggle={setToggleForAssinged}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl ">
        <div className="text-center">
          <div className="flex justify-end">{edit}</div>
          <div className="flex justify-center mt-5">
            <div className="rounded-full w-[58.84px] h-[58.84px] bg-[#C5FFFF] justify-center flex items-center text-[#000000] text-[1.3369rem] font-medium">
              {data?.data?.client?.name[0].toUpperCase()}
            </div>
          </div>
          <h4 className="text-[#344054] text-[1.2rem] font-medium mt-2">
            {data?.data?.client?.name}
          </h4>
          <p className="text-[#344054] text-[1rem] font-medium">
            {data?.data?.client?.phone}
          </p>
        </div>
        <div className="flex justify-center">
          <Row gutter={10} className="mt-5">
            <Col
              className="cursor-pointer flex"
              xl={6}
              sm={6}
              lg={6}
              md={6}
              onClick={() => handleLog("email")}
            >
              <a target="_blank" href={`mailto:${data?.data?.client?.email}`}>
                <div className="text-center flex flex-col gap-2 items-center">
                  <div>
                    <img src={emailIcon} alt="" />
                  </div>
                  <div>
                    <p className="text-[12px]">Email</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col
              xl={6}
              sm={6}
              lg={6}
              className="cursor-pointer"
              md={6}
              onClick={() => handleLog("whatsapp")}
            >
              <a
                target="_blank"
                href={`https://wa.me/${data?.data?.client?.phone}`}
              >
                <div className="text-center flex flex-col gap-2 items-center">
                  <div>
                    <img src={whatsappIcon} alt="" />
                  </div>
                  <div>
                    <p className="text-[12px]"> Whatsapp</p>
                  </div>
                </div>
              </a>
            </Col>
            <Col
              xl={6}
              sm={6}
              lg={6}
              md={6}
              className="cursor-pointer"
              onClick={() => handleLog("phone")}
            >
              <div className="text-center flex flex-col gap-2 items-center">
                <div>
                  <img src={phoneIcon} alt="" />
                </div>
                <div>
                  <p className="text-[12px]">Phone</p>
                </div>
              </div>
            </Col>
            <Col
              xl={6}
              sm={6}
              lg={6}
              md={6}
              className="cursor-pointer "
              onClick={() => handleLog("appointment")}
            >
              <div className="text-center flex flex-col gap-2 items-center">
                <div>
                  <img src={addIcon} alt="" />
                </div>
                <div>
                  <p className="text-[12px]">Appt.</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row gutter={16} className="mt-5">
          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex items-center mt-5 w-full gap-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Status
                </h4>
              </div>
              <div className=" flex-1">
                <Select
                  className="h-[36px] w-full"
                  placeholder="Select a person"
                  optionFilterProp="children"
                  value={state.status}
                  onChange={onChange}
                  options={[
                    {
                      value: "Interested",
                      label: "Interested",
                    },
                    {
                      value: "Pending",
                      label: "Pending",
                    },
                    {
                      value: "Inprogress",
                      label: "Inprogress",
                    },
                    {
                      value: "Completed",
                      label: "Completed",
                    },
                    {
                      value: "Top Priority",
                      label: "Top Priority",
                    },
                    {
                      value: "Appointment Aligned",
                      label: "Appointment Aligned",
                    },
                    {
                      value: "Untouched",
                      label: "Untouched",
                    },
                    {
                      value: "Not Interested",
                      label: "Not Interested",
                    },
                    {
                      value: "Not Connected",
                      label: "Not Connected",
                    },
                    {
                      value: "Wrong No",
                      label: "Wrong No",
                    },
                  ]}
                />
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Lead Source
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.leadSource}
                </h4>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Lead Added by
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.createdByUser?.profile?.fullName}
                </h4>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Designation
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.createdByUser?.role?.title}
                </h4>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Location
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.location || "-"}
                </h4>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Date & Time
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {moment(data?.data?.createdAt).format("DD/MM/YYYY")}
                </h4>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium">
                  Description
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.description?.length > 10 ? (
                    <Tooltip
                      placement="topLeft"
                      className="cursor-pointer"
                      title={data?.data?.description}
                    >
                      {`${data?.data?.description.substring(1, 10)}..`}
                    </Tooltip>
                  ) : (
                    data?.data?.description
                  )}
                </h4>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={24} md={24}>
            <div className="flex justify-between  mt-5">
              <div>
                <h4 className="text-[#667085] text-[1rem] font-medium flex gap-1 items-center">
                  Follow up Days{" "}
                  <img
                    onClick={() => setToggleId(data?.data?.id)}
                    className="cursor-pointer"
                    src={editIcon}
                    alt=""
                  />
                </h4>
              </div>
              <div>
                <h4 className="text-[#1D2939] text-[1rem] font-medium">
                  {data?.data?.leadFollowUp?.noOfDays
                    ? data?.data?.leadFollowUp?.noOfDays
                    : 0}{" "}
                  Days
                </h4>
              </div>
            </div>
          </Col>
          {data?.data?.leadPermission.length > 0 && (
            <Col xs={24} sm={24} lg={24} md={24}>
              <div className="flex justify-between  mt-5">
                <div>
                  <h4 className="text-[#667085] text-[1rem] font-medium flex gap-1 items-center">
                    Assigned Staff
                  </h4>
                </div>
                <div>
                  <div
                    className="text-[#344054] text-[.8125rem] font-normal cursor-pointer"
                    onClick={() => setToggleForAssinged(true)}
                  >
                    <Avatar.Group>
                      {data?.data?.leadPermission
                        .slice(0, 3)
                        .map((item: any, i: number) => {
                          return (
                            <Avatar style={{ backgroundColor: "#27a3a3" }}>
                              {item?.user?.profile?.fullName[0].toUpperCase()}
                            </Avatar>
                          );
                        })}
                    </Avatar.Group>
                    {/* {data?.data?.leadPermission.map((item: any, i: number) => {
                      if (i < 3) {
                        return (
                          <span className="border rounded-full p-[3px] w-[28px] h-[28px]">
                            {item?.user?.profile?.fullName[0]}
                          </span>
                        );
                      }
                    })} */}
                    {/* <span
                      className="border rounded-full p-[3px] w-full cursor-pointer"
                      onClick={() => setToggleForAssinged(true)}
                    >
                      {data?.data?.leadPermission.length - 3}+
                    </span> */}
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </>
  );
};
export default ProfileDetail;
