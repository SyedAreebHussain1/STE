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
      <div
        style={{
          background: "white",
          borderRadius: "0.75rem",
          padding: "20px",
          paddingBottom: "5px",
        }}
      >
        <div
          className="flex justify-between mb-2 cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          <h1
            style={{
              color: "#1D2939",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Lead Source
          </h1>
          <span className="cursor-pointer">
            {showAll ? <UpOutlined /> : <DownOutlined />}
          </span>
        </div>

        {newMap?.map((item: any, i: any) => {
          return (
            <div key={i} style={{ marginTop: "18px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#344054",
                }}
              >
                <h2 style={{ fontSize: "0.813rem", fontWeight: "600" }}>
                  {item?.title}
                </h2>
                <span style={{ fontSize: "0.813rem", fontWeight: "500" }}>
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
