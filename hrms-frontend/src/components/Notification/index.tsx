import React from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { Col } from "antd";
import RoundedButton from "../../helpers/button/RoundedButton";
import notificationsicon from "../../assets/notification.svg";
import useToggle from "../../hooks/useToggle";
import AddNotification from "./helpers/AddNotification";
import NotificationTable from "./helpers/NotificationTable";

const Notification = () => {
  const [open, toggle] = useToggle();
  return (
    <>
      {open && <AddNotification open={open} onClose={toggle} />}
      <PageContainer>
        <h1 className="text-[1.404rem] text-black dark:text-white font-semibold leading-6">
          Notifications
        </h1>
        <p className="text-[0.938rem] text-black dark:text-white font-medium">
          Seamlessly Integrating Push Notification Settings
        </p>
        <Col xs={12} md={10} className="mt-5">
          <div className="w-full bg-white dark:bg-dark-grayprimary p-[18px] rounded-md">
            <div className="p-[8px] rounded-md bg-[#E5E2FB]  mb-3 w-max">
              <img src={notificationsicon} alt="Notification Icon" />
            </div>
            <h1 className="text-[1.204rem] text-black dark:text-white font-semibold">
              Push Notification
            </h1>
            <p className="text-[0.738rem] text-[#667085] dark:text-[#D0D5DD] font-medium">
              Delivering Important Updates and Valuable Information via Push
              Notifications
            </p>
            <div className=" mt-3 w-full ">
              <RoundedButton
                onClick={toggle}
                title={"Generate  Notification"}
                className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white rounded-md w-full"
              />
            </div>
          </div>
        </Col>
        <div className="mt-6">
          <NotificationTable />
        </div>
      </PageContainer>
    </>
  );
};

export default Notification;
