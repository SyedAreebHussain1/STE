import { useState } from "react";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";

type SizeType = ConfigProviderProps["componentSize"];

const YearsTabs = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group value={size} onChange={onChange}>
        <Radio.Button value="2023">2023</Radio.Button>
        <Radio.Button value="2024">2024</Radio.Button>
        <Radio.Button value="2025">2025</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" size={size} />
    </div>
  );
};
export default YearsTabs;
