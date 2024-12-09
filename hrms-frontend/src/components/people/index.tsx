import React, { useState } from "react";
import { Button, Col, Row, Tabs, TabsProps } from "antd";
import type { DrawerProps } from "antd";

import PeopleTable from "./PeopleTable";
import AddMemberDrawer from "./AddMemberDrawer";

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: <b>Members</b>,
    children: <PeopleTable />,
  },
];
const People: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>("large");
  return (
    <>
      {open && <AddMemberDrawer open={open} setOpen={setOpen} />}
      <Row>
        <Col span={24}>
          <Tabs
            defaultActiveKey="1"
            items={tabs}
            size="large"
            tabBarStyle={{ padding: 20 }}
            tabBarExtraContent={
              <div className=" flex justify-end items-center align-middle h-[49px] ">
                <Button
                  onClick={() => setOpen(true)}
                  className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold "
                  htmlType="submit"
                >
                  Add Members
                </Button>
              </div>
            }
          />
        </Col>
      </Row>
    </>
  );
};
export default People;
