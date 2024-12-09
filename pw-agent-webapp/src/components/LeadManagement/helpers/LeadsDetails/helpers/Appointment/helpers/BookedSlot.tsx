import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Input, Select, DatePicker } from "antd";
import moment from "moment";
import TextInput from "../../../../../../../helpers/inputs/TextInput";
import { MailOutlined } from '@ant-design/icons';
import selectTypeIcon from "../../../../../../../assets/selecttypeIcon.png"
import phoneIcon from "../../../../../../../assets/phoneicon.png"
import locationIcon from "../../../../../../../assets/locationIcon.png"
import clientIcon from "../../../../../../../assets/clientIcon.png"
import { IoIosArrowBack } from "react-icons/io";
import descriptionIcon from "../../../../../../../assets/desIcon.png"
import urlIcon from "../../../../../../../assets/share.png"
import clockIcon from "../../../../../../../assets/clockIcon.png"
import calanderIcon from "../../../../../../../assets/calanderIcon.png"
import { useDispatch, useSelector } from "react-redux";
import { getAgentCalendarSlotListApi, slotRescheduleApi } from "../../../../../../../redux/api/LeadManagement";
import dayjs from "dayjs";
import { AppDispatch } from "../../../../../../../redux/store";
import { useNavigate } from "react-router-dom";
import { errorMessage } from "../../../../../../../utils/message";
const { TextArea } = Input;
type BookedSlotType = {
    toggle?: any;
    setToggle?: any;
    data?: any;
    selectDate?: any;
    selectDateForCreate?: any
    formSetValue?: any;
    reschudule: any;
    setReschudule: any
};

const BookedSlot: React.FC<BookedSlotType> = ({
    data, selectDate,
    formSetValue,
    reschudule, setReschudule
}: BookedSlotType) => {
    const getAgentCalendarSlotListForBooked = useSelector(
        (state: any) => state?.getAgentCalendarSlotListForBooked
    );
    const [meetingType, setMeetingType] = useState<any>();
    const [dataSource, setDataSource] = useState<any>([]);
    const [selectDateValue, setSelectDateValue] = useState<any>("");
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        if (formSetValue?.items) {
            form.setFieldsValue(formSetValue?.items?.[0])
            setMeetingType(formSetValue?.items?.[0]?.meetingType)
        }
    }, [formSetValue])

    useEffect(() => {
        if (getAgentCalendarSlotListForBooked.data) {
            const data = getAgentCalendarSlotListForBooked.data.map((item: any, i: number) => {
                return item;
            });
            setDataSource(data);
        } else {
            setDataSource([]);
        }
    }, [getAgentCalendarSlotListForBooked?.data]);

    const onFinish = (e: any) => {
        const body = {
            "meetingStartDateTime": e?.calendarSlotList?.split(" ")?.[0],
            "meetingEndDateTime": e?.calendarSlotList?.split(" ")?.[1]
        }
        if (formSetValue?.items?.[0]?.id && body && selectDateValue) {
            slotRescheduleApi(dispatch, body, formSetValue?.items?.[0]?.id, onSuccess)
        } else {
            errorMessage("Select Slot")
        }
    }
    useEffect(() => {
        if (reschudule || selectDateValue) {
            getAgentCalendarSlotListApi(dispatch, selectDateValue ? dayjs(selectDateValue).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD"), reschudule);
        }
    }, [reschudule, selectDateValue])
    useEffect(() => {
        if (selectDateValue === null) {
            form.setFieldValue("calendarSlotList", null)
        }
    }, [selectDateValue])
    function onSuccess() {
        form.resetFields()
        navigate("/webestate")
    }

    return (
        <React.Fragment>
            <div className="p-[5px]">
                {
                    reschudule ? <div>
                        <button onClick={() => setReschudule(false)} className="font-medium text-[.8125rem] text-[#667085]">
                            <IoIosArrowBack />    Back to Slot
                        </button>
                        <p className="text-[1rem] text-[#1D2939] font-medium">
                            Reschedule Slot
                        </p>
                    </div> : <div className="text-[#1D2939] mt-1 mb-1">
                        <p className="text-[1rem] font-medium">
                            {moment(data?.meetingStartDateTime).format("h:mm A")} -{" "}
                            {moment(data?.meetingEndDateTime).format("h:mm A")}
                        </p>
                        <p className="font-medium text-[.8125rem] text-[#667085]">
                            {!selectDate
                                ? moment().format("dddd, MMMM YYYY")
                                : selectDate}
                        </p>
                    </div>}
            </div>
            <hr className="!text-primary" />
            <div className="p-[5px]">

                {reschudule ? <Form
                    name="bookedSlot"
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                    initialValues={{ remember: true }}
                >  <Row gutter={16}>
                        <Col sm={24} xs={24} lg={24} md={24}>
                            <Col sm={24} xs={24} lg={24} md={24}>
                                <div className="flex items-center gap-2 mt-2 mb-1">
                                    <div>
                                        <img src={calanderIcon} alt="" />
                                    </div>
                                    <div className="w-full h-[44px]">
                                        <DatePicker onChange={(e) => setSelectDateValue(e)} className="w-full h-[44px] rounded-[8px] bg-[#F2F4F7]" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} xs={24} lg={24} md={24}>
                                <div className="flex items-center gap-2 mt-2 mb-1">
                                    <div>
                                        <img src={clockIcon} alt="" />
                                    </div>
                                    <div className="w-full h-[44px]">
                                        <Form.Item name="calendarSlotList" >
                                            <Select
                                                disabled={!selectDateValue}
                                                className="w-full h-[44px] rounded-[8px] bg-[#F2F4F7]"
                                                placeholder="Select Type"
                                                options={dataSource?.filter((val: any) => val.status === "Available").map((item: any) => {
                                                    return {
                                                        value: item?.meetingStartDTEncode + " " + item?.meetingEndDTEncode,
                                                        label: `${moment(item?.meetingStartDateTime).format("h:mm A")}-${moment(item?.meetingEndDateTime).format("h:mm A")}`
                                                    }
                                                })}
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                        <Col sm={24} xs={24} lg={24} md={24} className="mt-1">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className=" text-primary border border-primary flex gap-1 justify-center h-[36px] w-full items-center  text-[.8125rem] font-medium"
                            >
                                Save Changes
                            </Button>
                        </Col>
                    </Row>
                </Form>
                    : <Form
                        name="bookedSlot2"
                        form={form}
                        autoComplete="off"
                        initialValues={{ remember: true }}
                    >  <Col sm={24} xs={24} lg={24} md={24}>
                            <Row gutter={16}>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex items-center gap-2 mt-1 mb-1">
                                        <div>
                                            <img src={selectTypeIcon} alt="" />
                                        </div>
                                        <div className="w-full h-[44px]">
                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.meetingType}</div>
                                        </div>
                                    </div>
                                </Col>
                                {meetingType !== "Phone" &&
                                    <Col sm={24} xs={24} lg={24} md={24}>
                                        <div className="flex items-center gap-2  mt-1 mb-1">
                                            <div>
                                                <img src={meetingType === "Online" ? urlIcon : locationIcon} alt="" />
                                            </div>
                                            <div className="w-full h-[44px]">

                                                <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.meetingUrl || formSetValue?.items?.[0]?.location}</div>

                                            </div>
                                        </div>
                                    </Col>}

                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex items-center gap-2  mt-1 mb-1">
                                        <div>
                                            <img src={clientIcon} alt="" />
                                        </div>
                                        <div className="w-full h-[44px]">

                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.name || "-"}</div>

                                        </div>
                                    </div>
                                </Col>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex items-center gap-2  mt-1 mb-1">
                                        <div>
                                            <MailOutlined />
                                        </div>
                                        <div className="w-full h-[44px]">
                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.email || "-"}</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex items-center gap-2  mt-1 mb-1">

                                        <div>
                                            <img src={phoneIcon} alt="" />
                                        </div>
                                        <div className="w-full h-[44px] ">

                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.phone || "-"}</div>

                                        </div>
                                    </div>
                                </Col>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex items-center gap-2  mt-1 mb-1">
                                        <div>
                                            <img src={descriptionIcon} alt="" />
                                        </div>
                                        <div className="w-full h-[44px]">
                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.meetingSubject || "-"}</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <div className="flex gap-2  mt-1 mb-1">
                                        <div>
                                            <img src={descriptionIcon} alt="" />
                                        </div>
                                        <div className="w-full ">
                                            <div className="border border-spacing-0 p-[10px] rounded-lg">{formSetValue?.items?.[0]?.description || "-"}</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Col sm={24} xs={24} lg={24} md={24}>
                                <Col sm={24} xs={24} lg={24} md={24}>
                                    <Button
                                        type="primary"
                                        onClick={(e: any) => { e.preventDefault(); setReschudule(true) }}
                                        className=" text-primary border border-primary flex gap-1 justify-center h-[36px] w-full items-center  text-[.8125rem] font-medium"
                                    >
                                        Reschedule Slot
                                    </Button>
                                </Col>
                            </Col>
                        </Col>
                    </Form>
                }

            </div>
        </React.Fragment >
    );
};

export default BookedSlot;
