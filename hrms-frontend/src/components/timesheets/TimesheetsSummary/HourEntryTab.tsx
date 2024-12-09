import { DatePicker, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import HourAndMinInputField from "./HourAndMinInputField";

function HourEntryTab() {
  const [hourVal, setHourVal] = useState<number>(0);
  const [minVal, setMinVal] = useState<number>(0);

  return (
    <div>
      <HourAndMinInputField
        hourVal={hourVal}
        setHourVal={setHourVal}
        minVal={minVal}
        setMinVal={setMinVal}
      />

      <DatePicker className="w-full mt-2 h-[3rem]" />
      <Select
        options={[]}
        className="w-full mt-2 h-[3rem]"
        placeholder="Select an activity"
      />
      <Select
        options={[]}
        className="w-full mt-2 h-[3rem]"
        placeholder="Select a project"
      />
      <TextArea rows={4} className="w-full mt-2" placeholder="Add a note" />
    </div>
  );
}

export default HourEntryTab;
