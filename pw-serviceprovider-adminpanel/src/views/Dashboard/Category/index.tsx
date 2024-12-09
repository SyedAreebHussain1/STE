import { Tabs, TabsProps } from "antd";
import Category from "./helpers";
import SpaceWrapper from "../../../utils/helpers/wrappers/SpaceWrapper";
import ServicesCategory from "./helpers/Services";

const CategoryMain = () => {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Category</b>,
      children: <Category />,
    },
    {
      key: "2",
      label: <b>Services</b>,
      children: <ServicesCategory />,
    },
  ];
  return (
    <SpaceWrapper>
      <Tabs defaultActiveKey="1" items={tabs} size="large" />
    </SpaceWrapper>
  );
};

export default CategoryMain;
