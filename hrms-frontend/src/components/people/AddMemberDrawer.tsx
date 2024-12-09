import React, { useState } from "react";
import { Drawer, Space, TabsProps, Col, Row, Tabs, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import InviteByEmailOrPhoneNoTabChildren from "./InviteByEmailOrPhoneNoTabChildren";
import InviteByLinkTabChildren from "./InviteByLinkTabChildren";

type AddMemberDrawerProps = {
  open?: boolean;
  setOpen?: any;
};

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span className="text-[1rem] font-bold text-[#00000099]">
        Invite by link
      </span>
    ),
    children: <InviteByLinkTabChildren />,
  },
  {
    key: "2",
    label: (
      <span className="text-[1rem] font-bold text-[#00000099]">
        Invite by email or phone no
      </span>
    ),
    children: <InviteByEmailOrPhoneNoTabChildren />,
  },
];
const AddMemberDrawer: React.FC<AddMemberDrawerProps> = ({
  open,
  setOpen,
}: AddMemberDrawerProps) => {
  const [showFooterBtn, setShowFooterBtn] = useState("1");

  return (
    <>
      <Drawer
        title={<span className="text-[1.25rem] font-bold">Add Members</span>}
        placement="right"
        width={720}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        footer={
          showFooterBtn === "2" && (
            <div className="flex justify-end mt-[30px] gap-3">
              <Button className="h-[40px] font-normal">Cancel</Button>
              <Button
                type="primary"
                className="dark:bg-dark-primary bg-light-primary !text-[white] border-none h-[40px] font-normal"
              >
                Save
              </Button>
            </div>
          )
        }
        className="drawer-bg-color"
        extra={
          <Space>
            <CloseOutlined onClick={() => setOpen(false)} />
          </Space>
        }
      >
        <Row gutter={16}>
          <Col lg={24} sm={24} md={24}>
            <p>
              We recommend letting employees create their own profile so they
              can clock in from their own devices and view their timesheets.
              Send them an invite to get started.
            </p>
          </Col>
          <Col lg={24} sm={24} md={24}>
            <Tabs
              defaultActiveKey="1"
              items={tabs}
              onChange={() => setShowFooterBtn("2")}
              size="large"
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default AddMemberDrawer;
