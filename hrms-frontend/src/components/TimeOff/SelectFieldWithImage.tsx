import { Dropdown, Input } from "antd";
import type { MenuProps } from "antd/lib";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { CiUser } from "react-icons/ci";

type Props = {
  data: any[];
};

const SelectFieldWithImage = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("0");

  const [stateVal, setStateVal] = useState({
    name: "",
    value: "",
    img: "",
  });

  const rotateClasses = ["rotate-[180deg]", "rotate-[0deg]"];
  const items1: MenuProps["items"] = data.map((item) => {
    return {
      key: item.key,
      label: (
        <>
          <div
            className={`flex items-center h-[35px] justify-between  px-[10px] py-[20px] rounded-[5px] ${
              activeId === item.key ? "activeMember" : "noActveMember"
            }`}
            onClick={() => {
              setActiveId(item.key);
              setStateVal(item);
            }}
          >
            <div className="flex items-center">
              <div>
                {item.img ? (
                  <img
                    src={item.img}
                    className="h-[30px] w-[30px] rounded-[50%] overflow-hidden  bg-[gray] "
                  />
                ) : (
                  <CiUser className="h-[30px] w-[30px] rounded-[50%] overflow-hidden  bg-[gray] p-[5px]" />
                )}
              </div>
              <div className="pl-[10px]">
                <h1>{item.name}</h1>
              </div>
            </div>
            <div className="check">
              <FaCheck />
            </div>
          </div>
        </>
      ),
    };
  });

  return (
    <>
      <div className="border-solid border-gray border-[1px] rounded-[10px] h-[70px] ">
        <Dropdown
          menu={{ items: [...items1] }}
          trigger={["click"]}
          onOpenChange={(val) => {
            setOpen(val);
          }}
          dropdownRender={(node) => {
            return (
              <div className="w-[100%] !bg-white  rounded-[10px] overflow-hidden relative border">
                <Input
                  placeholder="Search Member..."
                  className=" w-[100%] !bg-white h-[40px] z-[3] px-[10px] border-[0] border-b-[1px] !border-[#c7c6c6] rounded-none"
                />
                {node}
              </div>
            );
          }}
        >
          <div className="flex items-center h-[100%] justify-between  px-[10px] w-[100%]">
            <div className="flex items-center">
              <div>
                {stateVal.img ? (
                  <img
                    src={stateVal.img}
                    className="h-[50px] w-[50px] rounded-[50%] overflow-hidden bg-[gray]  mr-[10px]"
                  />
                ) : (
                  <CiUser className="h-[50px] w-[50px] rounded-[50%] overflow-hidden  mr-[5px]" />
                )}
              </div>

              <div>
                {stateVal.name ? (
                  <h1>{stateVal.name}</h1>
                ) : (
                  <span className="text-[#00000060] text-[.8rem]">
                    Select a Member
                  </span>
                )}
              </div>
            </div>
            <div
              className={`flex justify-center cursor-pointer transition-all duration-[] ${
                open ? rotateClasses[1] : rotateClasses[0]
              }`}
            >
              <IoMdArrowDropup className="w-[20px] h-[20px]" />
            </div>
          </div>
        </Dropdown>
      </div>
    </>
  );
};
export default SelectFieldWithImage;
