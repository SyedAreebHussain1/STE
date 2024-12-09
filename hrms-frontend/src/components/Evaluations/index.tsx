import { Tabs } from "antd";
import type { TabsProps } from "antd";
import EvaluatedUsers from "./helpers/EvaluatedUsers";
import EvaluationsOne from "./helpers/EvaluationsOne";
import SpaceWrapper from "../wrappers/SpaceWrapper";
import { useState } from "react";

const Evaluations = () => {
  const [forApiCalling, setForApiCalling] = useState<any>(null);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Evaluations</b>,
      children: <EvaluationsOne forApiCalling={forApiCalling} />,
    },
    {
      key: "2",
      label: <b>Evaluated Users</b>,
      children: <EvaluatedUsers forApiCalling={forApiCalling} />,
    },
  ];
  return (
    <SpaceWrapper>
      <Tabs
        defaultActiveKey="1"
        onChange={(e) => setForApiCalling(e)}
        items={items}
        size="large"
      />
    </SpaceWrapper>
  );
};

export default Evaluations;
