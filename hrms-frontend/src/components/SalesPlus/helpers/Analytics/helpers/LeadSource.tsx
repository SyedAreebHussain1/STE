import React, { useEffect, useState } from "react";
import { LeadSourceField } from "../../..";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

type Props = {
  fields: LeadSourceField[];
};

const LeadSource = ({ fields }: Props) => {
  const bottomText = [0, 500];
  const [newMap, setNewMap] = useState<any>([]);
  const [showAll, setShowAll] = useState<any>(false);
  function calculateWidth(value: number | string) {
    let width: string | number = 0;
    width =
      ((Number(value) - bottomText[0]) / bottomText[bottomText.length - 1]) *
      100;
    return `${width}%`;
  }

  useEffect(() => {
    if (showAll) {
      const onlyShowThreeItem = [];
      for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        onlyShowThreeItem.push(element);
      }
      setNewMap(onlyShowThreeItem);
    } else {
      const onlyShowThreeItem = [];
      for (let i = 0; i < 3; i++) {
        const element = fields[i];
        onlyShowThreeItem.push(element);
      }
      setNewMap(onlyShowThreeItem);
    }
  }, [fields, showAll]);

  return (
    <>
      <div className="bg-white rounnded-[.75rem] p-[20px] pb-[5px] dark:bg-dark-grayprimary dark:text-white">
        <div
          className="flex justify-between mb-2 cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          <h1 className="!select-none text-[1rem] font-semibold text-[#1D2939] dark:text-white">
            Lead Source
          </h1>
          <span className="cursor-pointer">
            {showAll ? <UpOutlined /> : <DownOutlined />}
          </span>
        </div>

        {newMap?.map((item: any) => {
          return (
            <div key={item?.id} style={{ marginTop: "18px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#344054",
                }}
              >
                <h2 className="dark:text-white text-[0.813rem] font-[600]">
                  {item?.title}
                </h2>
                <span className="dark:text-white text-[0.813rem] font-[500]">
                  {item?.value}
                </span>
              </div>

              <div
                style={{
                  marginTop: "6px",
                  width: "100%",
                  height: "7px",
                  background: "#F2F4F7",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    borderRadius: "5px",
                    background: item?.color,
                    width: calculateWidth(item?.value),
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          );
        })}

        <div
          style={{
            display: "flex",
            position: "relative",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          {bottomText.map((item, i) => (
            <div
              key={i}
              style={{
                color: "#98A2B3",
                fontSize: "0.75rem",
                transform: "translateX(35%)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeadSource;
