import React, { useState } from "react";
import { Drawer, Space, Divider } from "antd";
import { Col, Row } from "antd";
import circlenotsignicon from "../../assets/circlenotsignicon.svg";
import calendarIcon from "../../assets/calendar.svg";
import { CloseOutlined, DeleteFilled } from "@ant-design/icons";
import DeleteFaceDataModal from "./DeleteFaceDataModal";
import ArchiveMemberModal from "./ArchiveMemberModal";
import MainProfileHeadForm from "./MainProfileHeadForm";
import ContactInformationForm from "./ContactInformationForm";
import EmplomentInformationForm from "./EmplomentInformationForm";
import DateAndTimeForm from "./DateAndTimeForm";
import { SlPencil } from "react-icons/sl";

type PeopleDrawerProps = {
  size?: any;
  open?: boolean;
  setOpen?: any;
  selectedRowKey?: any;
};
type HeadingProps = {
  heading?: any;
  istrue?: boolean;
  setIsTrue?: any;
};

const Heading: React.FC<HeadingProps> = ({
  heading,
  istrue,
  setIsTrue,
}: HeadingProps) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mb-[10px]">
          {" "}
          <h4 className="text-[.875rem] tracking-tight text-[#00000099] leading-relaxed font-black">
            {heading}
          </h4>
        </div>
        {!istrue && (
          <div>
            <SlPencil
              className="text-[20px] cursor-pointer"
              onClick={() => setIsTrue(!istrue)}
            />
          </div>
        )}
      </div>
    </>
  );
};

const PeopleDrawer: React.FC<PeopleDrawerProps> = ({
  size,
  open,
  setOpen,
  selectedRowKey,
}: PeopleDrawerProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalArchiveOpen, setModalArchiveOpen] = useState(false);
  const [updateProfileHead, setUpdateProfileHead] = useState(false);
  const [contactInformation, setContactInformation] = useState(false);
  const [emplomentInformation, setEmplomentInformation] = useState(false);
  const [dateAndTime, setDateAndTime] = useState(false);
  return (
    <>
      {modalOpen && (
        <DeleteFaceDataModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      {modalArchiveOpen && (
        <ArchiveMemberModal
          modalOpen={modalArchiveOpen}
          setModalOpen={setModalArchiveOpen}
        />
      )}
      <Drawer
        title={
          <span className="text-[1.25rem] font-bold">{`View Profile`}</span>
        }
        closable={false}
        placement="right"
        width={720}
        onClose={() => setOpen(false)}
        open={open}
        className="drawer-bg-color"
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
      >
        <div>
          {updateProfileHead ? (
            <div className="flex  justify-center">
              <div className="mt-[10px] mb-[10px] ">
                <div>
                  <img
                    className="w-[80px] h-[80px] rounded-full mt-[10px] mb-[10px]"
                    src="https://jibble-prod-storage.s3.amazonaws.com/b77ce1f1-4086-4b9e-8cd2-bb2db980212f"
                    alt=""
                  />
                  <MainProfileHeadForm
                    setUpdateProfileHead={setUpdateProfileHead}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-[80px] h-[80px] rounded-full"
                      src="https://jibble-prod-storage.s3.amazonaws.com/b77ce1f1-4086-4b9e-8cd2-bb2db980212f"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="pl-[9px]">
                      <span className="font-bold text-[1.5rem] text-[#000000de]">
                        Aly
                      </span>
                      <p className="text-[#00000099] text-[1rem] tracking-tighter leading-5">
                        Member
                      </p>
                    </div>
                    <div className="m-[5px]">
                      <div className="p-[5px] flex items-center">
                        <span className="hidden md:block">
                          <img src={calendarIcon} className="w-[15px]" alt="" />
                        </span>{" "}
                        <span className="text-[#4d4d4d] font-bold text-[.875rem] flex items-center">
                          Default work Schedule{" "}
                          <button className="text-[.625rem] text-[#fff] bg-[#a0a5b1] p-[3px] m-[2px] h-[18px] rounded-lg w-[70px] hidden md:block">
                            DEFAULT
                          </button>
                        </span>
                      </div>
                      <div className="mt-[-7px] p-[5px] flex items-center">
                        <span className="hidden md:block">
                          <img src={calendarIcon} className="w-[15px]" alt="" />
                        </span>{" "}
                        <span className="text-[#4d4d4d] font-bold text-[.875rem] flex items-center">
                          Imported Calender (Pakistan){" "}
                          <button className="text-[.625rem] text-[#fff] bg-[#a0a5b1] p-[3px] m-[2px] h-[18px] rounded-lg w-[70px] hidden md:block">
                            DEFAULT
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <SlPencil
                  className="text-[20px] cursor-pointer"
                  onClick={() => setUpdateProfileHead(true)}
                />
              </div>
            </div>
          )}
          <Divider />
          <Heading
            heading="CONTACT INFORMATION"
            istrue={contactInformation}
            setIsTrue={setContactInformation}
          />
          {contactInformation ? (
            <div>
              <ContactInformationForm
                setContactInformation={setContactInformation}
              />
            </div>
          ) : (
            <div>
              <div className="mt-[15px] mb-[15px]">
                <p className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 ">
                  Email
                </p>
                <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                  alyshah.vadsaria4@gmail.com
                </p>
              </div>
              <div className="mt-[15px] mb-[15px]">
                <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 ">
                  Phone Number
                </div>
                <p className="text-[#00000099] text-[.875rem] font-normal tracking-tighter leading-5 mt-[10px]">
                  Add phone number
                </p>
              </div>
            </div>
          )}
          <Divider />
          <div>
            <Heading
              heading="EMPLOYMENT INFORMATION"
              istrue={emplomentInformation}
              setIsTrue={setEmplomentInformation}
            />
            {emplomentInformation ? (
              <EmplomentInformationForm
                setEmplomentInformation={setEmplomentInformation}
              />
            ) : (
              <div className="mt-[15px] mb-[15px]">
                <Row gutter={16}>
                  <Col lg={12} sm={24} md={12}>
                    <div>
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex ">
                        Member code &nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                        Aly-1
                      </p>
                    </div>
                  </Col>
                  <Col lg={12} sm={24} md={12}>
                    <div>
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex">
                        Billable rate &nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                        PKR 0.00
                      </p>
                    </div>
                  </Col>

                  <Col lg={12} sm={24} md={12}>
                    <div className="mt-[40px]">
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex">
                        Kiosk PIN &nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <div>
                        <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                          ••••
                        </p>
                        <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                          Send PIN to member via Email
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} sm={24} md={12}>
                    <div className="mt-[40px]">
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex">
                        Join date &nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                        2024-02-14
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
          <Divider />
          <div>
            <Heading
              heading="DATE & TIME"
              istrue={dateAndTime}
              setIsTrue={setDateAndTime}
            />
            {dateAndTime ? (
              <DateAndTimeForm setDateAndTime={setDateAndTime} />
            ) : (
              <div>
                <Row gutter={16}>
                  <Col lg={24} sm={24} md={24}>
                    <div className="mt-[25px]">
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex">
                        Timezone &nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                        Asia/Karachi (GMT+5)
                      </p>
                    </div>
                  </Col>
                  <Col lg={24} sm={24} md={24}>
                    <div className="mt-[25px]">
                      <div className="text-[#00000099] font-normal text-[1rem] tracking-tighter leading-5 flex">
                        Timesheet Timezone&nbsp;
                        <img src={circlenotsignicon} alt="" />
                      </div>
                      <p className="text-[#000000de] text-[.875rem] font-bold tracking-tighter leading-5 mt-[10px]">
                        Asia/Karachi (GMT+5)
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
          <Divider />
          <div>
            <Heading heading="FACE DATA" istrue={true} />
            <div>
              <div className="flex justify-between ">
                <p className="font-normal text-[.875rem] text-[#00000099]">
                  Log into the Jibble app on your iOS or Android device to
                  update your face data.{" "}
                  <span
                    onClick={() => setModalOpen(true)}
                    className="block md:hidden"
                  >
                    <DeleteFilled />
                  </span>
                </p>
                <span
                  onClick={() => setModalOpen(true)}
                  className="text-[#c41446] cursor-pointer hidden md:block"
                >
                  Delete face data
                </span>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <span
            onClick={() => setModalArchiveOpen(true)}
            className="text-[#c41446] cursor-pointer text-[.9rem] font-semibold"
          >
            Archive Member
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default PeopleDrawer;
