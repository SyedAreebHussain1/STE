import { Divider, Dropdown, MenuProps, Space } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import {
  getCompanyLocationApi,
  patchCompanyLocationApi,
} from "../../redux/api/Location";
import { useDispatch } from "react-redux";
import { set } from "@ant-design/plots/es/core/utils";
import { Background } from "reactflow";

function RadiusButton({ radiusValue }: any) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [kilometreArray, setKilometerArray] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
  useEffect(() => {
    if (kilometreArray.filter((item: any) => item == radiusValue)) {
      setSelected(radiusValue.toString());
    } else {
      setKilometerArray((pre: any) => [...pre, radiusValue]);
      setSelected(radiusValue);
    }
  }, []);
  const dispatch = useDispatch();

  function onClick(value: string) {
    if (selected == value) {
      return;
    }

    setSelected(value);
    const formData = new FormData();
    formData.append("locationRadius", value);
    patchCompanyLocationApi(formData, dispatch, onSuccess);
  }
  const onSuccess = () => {
    getCompanyLocationApi(dispatch);
  };

  const items: MenuProps["items"] = kilometreArray?.map(
    (item: any, key: any) => ({
      key: key + 1,
      label: (
        <p
          className={`px-4 py-2 relative rounded-sm dark:text-white ${
            selected === item
              ? "bg-light-primary dark:bg-dark-borderColor text-white"
              : ""
          }`}
          onClick={() => onClick(item)}
        >
          {item} kilometre
          {selected === item && (
            <IoCheckmarkOutline
              className="absolute right-1 top-[50%] translate-y-[-50%] text-white"
              size={"20"}
            />
          )}
        </p>
      ),
    })
  );

  return (
    <Dropdown
      menu={{ items }}
      open={open}
      dropdownRender={(menu) => (
        <div className="bg-white dark:bg-dark-grayprimary w-[179px] rounded-lg shadow-md  ">
          {React.cloneElement(menu as React.ReactElement, {
            style: { boxShadow: "none", background: "transparent" },
          })}
          <Divider style={{ margin: 0 }} />
        </div>
      )}
    >
      <button
        className="flex items-center gap-1 dark:text-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-[#4D4D4D] font-bold text-sm dark:text-white">
          Radius
        </span>
        <IoMdArrowDropup
          size={"18"}
          className={`${open ? "rotate-0" : "rotate-180"} transition-transform`}
        />
      </button>
    </Dropdown>
  );
}

export default RadiusButton;
