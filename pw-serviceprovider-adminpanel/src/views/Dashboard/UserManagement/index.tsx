import { Tabs, TabsProps } from "antd";
import RolesManagement from "./helpers/RolesManagement";
import AllUsers from "./helpers/AllUsers";
import SpaceWrapper from "../../../utils/helpers/wrappers/SpaceWrapper";

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: <b>All Users</b>,
    children: <AllUsers />,
  },
  {
    key: "2",
    label: <b>Roles Management</b>,
    children: <RolesManagement />,
  },
];
const UserManagement = () => {
  return (
    <SpaceWrapper>
      <Tabs defaultActiveKey="1" items={tabs} size="large" />
    </SpaceWrapper>
  );
};
export default UserManagement;
