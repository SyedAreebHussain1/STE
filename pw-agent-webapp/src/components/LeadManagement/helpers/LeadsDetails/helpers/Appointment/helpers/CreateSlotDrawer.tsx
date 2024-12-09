import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Input, Select } from "antd";
import moment from "moment";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../../../redux/store";
import TextInput from "../../../../../../../helpers/inputs/TextInput";
import { getFromStorage } from "../../../../../../../utils/storage";
import { MailOutlined } from "@ant-design/icons";
import {
  createPublicCalendarSlotListApi,
  getAgentCalendarSlotListApi,
} from "../../../../../../../redux/api/LeadManagement";
import selectTypeIcon from "../../../../../../../assets/selecttypeIcon.png";
import phoneIcon from "../../../../../../../assets/phoneicon.png";
import locationIcon from "../../../../../../../assets/locationIcon.png";
import clientIcon from "../../../../../../../assets/clientIcon.png";
import descriptionIcon from "../../../../../../../assets/desIcon.png";
import urlIcon from "../../../../../../../assets/share.png";
import dayjs from "dayjs";
const { TextArea } = Input;
type CountryInputProps = {
  name: string | undefined | null;
  placeholder: string | undefined | null;
  phone: any;
  setPhone: any;
};
type FinishType = {
  userId?: number | string;
  name?: string;
  email?: string;
  phone?: string;
  meetingSubject?: string;
  description?: string;
  givenTime?: string;
  meetingStartDateTime?: string;
  meetingEndDateTime?: string;
  meetingType?: string;
  location?: string;
  meetingUrl?: string;
};
const CountryInput: React.FC<CountryInputProps> = ({
  name,
  placeholder,
  phone,
  setPhone,
}: CountryInputProps) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      value={phone}
      onChange={setPhone}
      maxLength={14}
      country="PK"
      name={name}
      className="h-[44px] p-[9px] border rounded-[8px] mb-5 bg-[#F2F4F7]"
      defaultCountry="PK"
    />
  );
};

type CreateSlotDrawerType = {
  toggle: any;
  setToggle: any;
  data: any;
  selectDate: any;
  selectDateForCreate: any;
};

const CreateSlotDrawer: React.FC<CreateSlotDrawerType> = ({
  toggle,
  setToggle,
  data,
  selectDate,
  selectDateForCreate,
}: CreateSlotDrawerType) => {
  const dispatch: AppDispatch = useDispatch();
  const [phone, setPhone] = useState<string>("");
  const getLeadDataById = useSelector((state: any) => state?.getLeadDataById);
  const createPublicCalendarSlotList = useSelector(
    (state: any) => state?.createPublicCalendarSlotList
  );
  const [meetingType, setMeetingType] = useState<string>("Physical");
  const [form] = Form.useForm();
  function onFinish(value: FinishType) {
    const a = selectDateForCreate
      ? dayjs(selectDateForCreate).format("YYYY-MM-DD[T]")
      : dayjs().format("YYYY-MM-DD[T]");
    const b = dayjs().format("HH:mm:ss.SSS[Z]");
    const body = {
      userId: getFromStorage("user").userId,
      phone: phone,
      meetingStartDateTime: data?.meetingStartDTEncode,
      meetingEndDateTime: data?.meetingEndDTEncode,
      givenTime: selectDateForCreate
        ? a + b
        : dayjs().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"),
      ...value,
    };
    createPublicCalendarSlotListApi(dispatch, body, onSuccess);
  }
  useEffect(() => {
    if (getLeadDataById?.data) {
      form.setFieldValue("meetingType", "Physical");
      form.setFieldValue("email", getLeadDataById?.data?.client?.email);
      setPhone(getLeadDataById?.data?.client?.phone);
      form.setFieldValue("name", getLeadDataById?.data?.client?.name);
    }
  }, [getLeadDataById?.data]);
  function onSuccess() {
    setToggle(false);
    form.resetFields();
    setPhone("");
    getAgentCalendarSlotListApi(
      dispatch,
      selectDateForCreate
        ? dayjs(selectDateForCreate).format("YYYY-MM-DD")
        : dayjs().format("YYYY-MM-DD")
    );
  }

  return (
    <React.Fragment>
      <div>
        <div className="text-[#1D2939] mt-1 mb-1">
          <p className="text-[1rem] font-medium">
            {moment(data?.meetingStartDateTime).format("h:mm A")} -{" "}
            {moment(data?.meetingEndDateTime).format("h:mm A")}
          </p>
          <p className="font-medium text-[.8125rem] text-[#667085]">
            {!selectDate ? moment().format("dddd, MMMM YYYY") : selectDate}
          </p>
        </div>
      </div>
      <hr className="!text-primary" />
      <div className="p-[5px]">
        <Form
          onFinish={onFinish}
          name="create"
          form={form}
          autoComplete="off"
          initialValues={{ remember: true }}
        >
          <Row gutter={16}>
            <Col sm={24} xs={24} lg={24} md={24}>
              <Row gutter={16}>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex items-center gap-2 mt-1 mb-1">
                    <div>
                      <img src={selectTypeIcon} alt="" />
                    </div>
                    <div className="w-full h-[44px]">
                      <Form.Item name="meetingType">
                        <Select
                          className="w-full h-[44px] rounded-[8px] bg-[#F2F4F7]"
                          placeholder="Select Type"
                          value={meetingType}
                          onChange={(e) => setMeetingType(e)}
                          options={[
                            {
                              value: "Physical",
                              label: "Physical",
                            },
                            { value: "Phone", label: "Phone" },
                            { value: "Online", label: "Online" },
                          ]}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </Col>
                {meetingType !== "Phone" && (
                  <Col sm={24} xs={24} lg={24} md={24}>
                    <div className="flex items-center gap-2  mt-1 mb-1">
                      <div>
                        <img
                          src={
                            meetingType === "Online" ? urlIcon : locationIcon
                          }
                          alt=""
                        />
                      </div>
                      <div className="w-full h-[44px]">
                        <TextInput
                          required={true}
                          className="h-[44px] bg-[#F2F4F7]"
                          placeholder={
                            meetingType === "Online"
                              ? "Online Meeting"
                              : "Location"
                          }
                          name={
                            meetingType === "Online" ? "meetingUrl" : "location"
                          }
                        />
                      </div>
                    </div>
                  </Col>
                )}
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex items-center gap-2  mt-1 mb-1">
                    <div>
                      <img src={clientIcon} alt="" />
                    </div>
                    <div className="w-full h-[44px]">
                      <TextInput
                        className="h-[44px] bg-[#F2F4F7]"
                        placeholder="Name"
                        required={true}
                        name="name"
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex items-center gap-2  mt-1 mb-1">
                    <div>
                      <MailOutlined />
                    </div>
                    <div className="w-full h-[44px]">
                      <TextInput
                        className="h-[44px] bg-[#F2F4F7]"
                        placeholder="Email"
                        required={true}
                        name="email"
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex items-center gap-2  mt-1 mb-1">
                    <Row>
                      <Col lg={4} sm={4} md={4}>
                        <div className="mt-1">
                          <img src={phoneIcon} alt="" />
                        </div>
                      </Col>
                      <Col lg={20} sm={20} md={20}>
                        <div className="w-full h-[44px] ">
                          <CountryInput
                            name="phone"
                            placeholder={"Phone no"}
                            phone={phone}
                            setPhone={setPhone}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex items-center gap-2  mt-1 mb-1">
                    <div>
                      <img src={descriptionIcon} alt="" />
                    </div>
                    <div className="w-full h-[44px]">
                      <TextInput
                        className="h-[44px] bg-[#F2F4F7]"
                        placeholder="Subject"
                        required={true}
                        name="meetingSubject"
                      />
                    </div>
                  </div>
                </Col>
                <Col sm={24} xs={24} lg={24} md={24}>
                  <div className="flex gap-2  mt-1 mb-1">
                    <div>
                      <img src={descriptionIcon} alt="" />
                    </div>
                    <div className="w-full ">
                      <Form.Item name="description" required={true}>
                        <TextArea
                          maxLength={100}
                          placeholder="Description "
                          className="bg-[#F2F4F7]"
                          style={{ height: 78, resize: "none" }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={24} xs={24} lg={24} md={24}>
              <div className="flex w-full">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={createPublicCalendarSlotList?.loading}
                  className=" text-primary border border-primary flex gap-1 justify-center h-[36px] w-full items-center  text-[.8125rem] font-medium"
                >
                  <span className="text-[1.3rem]  font-light">+</span> Book Slot
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default CreateSlotDrawer;
