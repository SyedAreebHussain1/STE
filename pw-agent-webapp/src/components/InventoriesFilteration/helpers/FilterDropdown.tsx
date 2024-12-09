import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import useToggle from "../../../hooks/useToggle";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

const FilterDropdown = (props: Props) => {
  const [open, toggle] = useToggle();
  return (
    <div className="border-b border-borderColor">
      <div
        className="flex items-center justify-between px-3 py-4 cursor-pointer"
        onClick={toggle}
      >
        <h4 className="text-base text-[#1D2939] font-medium">{props.label}</h4>
        {open ? <FaChevronUp fontSize={20} /> : <FaChevronDown fontSize={20} />}
      </div>
      <div className={`px-3 py-5 ${open ? "block" : "hidden"} `}>
        {props.children}
      </div>
    </div>
  );
};

export default FilterDropdown;
