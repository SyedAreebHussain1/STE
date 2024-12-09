import React, { useEffect, useState } from "react";
import { Divider, Form, Modal, Steps } from "antd";
import { useForm } from "antd/es/form/Form";
import Button from "../Buttons/Button";
import { bookMeetingApi } from "./../../redux/api/Appointments/index";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage, infoMessage } from "../../utils/message";
import TeamMemberStep from "./Steps/TeamMemberStep";
import SlotsStep from "./Steps/SlotsStep";
import ConfirmationStep from "./Steps/ConfirmationStep";
import { clearMeetingList } from "../../redux/slice/Appointments/getMeetingList";
import moment from "moment";
import { getFromStorage } from "../../utils/storage";

const BookAppointment = ({ visible, toggle, id }) => {
  const dispatch = useDispatch();
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [form] = useForm();
  const [current, setCurrent] = useState(0);
  const [slotData, setSlotData] = useState(null);
  const confirmation = getFromStorage("confirmation");
  const bookMeeting = useSelector((state) => state.bookMeeting);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  function onFinish(data) {
    if (!slotData && selectedDate?._d) {
      errorMessage("Please select slot");
    }
    if (!selectedDate?._d) {
      errorMessage("Please select date");
    }
    if (data.hasOwnProperty("step-1")) {
      setSelectedUserId(data.userId);
      next();
    } else if (data.hasOwnProperty("step-2")) {
      if (selectedMeeting) {
        next();
      }
      // else {
      //   errorMessage("Please Select date");
      // }
    } else {
      const body = {
        userId: selectedUserId || id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        meetingSubject: data.subject,
        description: data.description,
        givenTime: selectedDate,
        meetingStartDateTime: selectedMeeting.meetingStartDateTime,
        meetingEndDateTime: selectedMeeting.meetingEndDateTime,
      };
      bookMeetingApi(dispatch, body, toggle);
      let newData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
      };
      localStorage.setItem("confirmation", JSON.stringify(newData));
    }
  }
  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
  };

  useEffect(() => {
    if (confirmation) {
      form.setFieldsValue({
        name: confirmation?.name,
        phone: confirmation?.phone,
        email: confirmation?.email,
      });
    }
  }, []);

  function handleBookNowClick(data) {
    if (data?.status === "Expired") {
      errorMessage("This Slot is Expired");
      return;
    } else if (data?.status === "Reserved") {
      infoMessage("This Slot is Reserved");
      return;
    }
    setSelectedMeeting(data);
  }
  function onDateClick(date) {
    setSelectedDate(date);
  }

  const steps = [
    {
      title: "Select Team Member",
      content: <TeamMemberStep form={form} id={id} />,
    },
    {
      title: "Book Slot",
      content: (
        <SlotsStep
          selectedDate={selectedDate}
          handleBookNowClick={handleBookNowClick}
          userId={selectedUserId || id}
          selectedMeeting={selectedMeeting}
          onDateClick={onDateClick}
          disabledDate={disabledDate}
          slotData={slotData}
          setSlotData={setSlotData}
        />
      ),
    },
    {
      title: "Confirmation",
      content: <ConfirmationStep />,
    },
  ];
  useEffect(() => {
    if (id) {
      setCurrent(1);
      form.setFieldValue("userId", id);
    }
  }, [id]);
  useEffect(() => {
    return () => {
      dispatch(clearMeetingList());
    };
  }, []);
  return (
    <Modal
      // title={<h3 className="text-[18px] font-semibold">Book Appointment</h3>}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
      width={900}
    >
      <Divider />
      <div className="agency-catalogue">
        <div>
          <Steps current={current} items={steps} />
          <div className="pt-5">
            <Form
              name="normal_login"
              form={form}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              {steps[current].content}
              <div className="flex justify-end mt-[55px] gap-2">
                <Button
                  className="text-base px-3 py-3"
                  variant={"outlined"}
                  label={"Back"}
                  disabled={current === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    prev();
                  }}
                />
                {current !== 2 ? (
                  <Button
                    className="text-base px-3 py-3"
                    htmlType="submit"
                    variant={"filled-inverse"}
                    label={"Next"}
                  />
                ) : (
                  <Button
                    loading={bookMeeting.loading}
                    className="text-base px-3 py-3"
                    htmlType="submit"
                    variant={"filled-inverse"}
                    label={"Confirm"}
                  />
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookAppointment;
