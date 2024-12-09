import { Dropdown, Input, MenuProps } from "antd";
import LangIcon from "./../../assets/language-logo.svg";
import { useState } from "react";
type Props = {};

const LanguageSelect = (props: Props) => {
  const [current, setCurrent] = useState("");
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Roman Urdu",
      onClick: () => setCurrent("Roman Urdu"),
    },
    {
      key: "2",
      label: "English",
      onClick: () => setCurrent("English"),
    },
    {
      key: "3",
      label: "Urdu",
      onClick: () => setCurrent("Urdu"),
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="flex items-center w-[207px] bg-white rounded-[.625rem] px-[1rem]">
        <div className="w-[16px] h-[16px] flex-shrink-0">
          <img src={LangIcon} className="w-[16px] h-[16px]" alt="" />
        </div>
        <Input
          className="text-base font-medium caret-transparent cursor-pointer h-[48px] bg-transparent border-none focus-visible:outline-none focus-within:outline-none focus-within:shadow-none"
          onKeyPress={(e) => e.preventDefault()}
          value={current}
        />
      </div>
    </Dropdown>
  );
};

export default LanguageSelect;
