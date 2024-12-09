import React, { useState } from "react";
import BulletListModal from "./helpers/BulletListModal";
import { CustomStyle } from "../BulletAndNumberListEditor";

interface Props {
  apiData: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  toggle: () => void;
  index: number;
}

const defaultData = [
  {
    heading: "Bullet 1",
    lists: ["List 1", "List 2", "List 3"],
  },
  {
    heading: "Bullet 2",
    lists: ["List 1", "List 2", "List 3"],
  },
];
const BulletList = ({ apiData, setPushObject, open, toggle, index }: Props) => {
  const [data, setData] = useState(apiData?.data?.table || defaultData);
  const [customStyle, setCustomStyle] = useState<CustomStyle>(
    apiData?.data?.style || {
      Columns: {
        column: 1,
      },
      Headings: {
        Headings: true,
        "Heading UnderLine": true,
        "Headings Center": false,
      },
      "List Item": {
        "Show List Items": true,
        "Show Bullets": true,
        "Bold Items": true,
      },
    }
  );

  const savesetPushObjectHandler = (modalData: any, style: any) => {
    setPushObject((pre: any) =>
      pre.map((item: any, ind: number) =>
        item?.map((innerItem: any) =>
          index == ind && innerItem?.id == apiData?.id
            ? {
              ...innerItem,
              data: { table: [...modalData], style: { ...style } },
            }
            : innerItem
        )
      )
    );
  };
  return (
    <>
      {open && (
        <BulletListModal
          open={open}
          close={toggle}
          customStyle={customStyle}
          setCustomStyle={setCustomStyle}
          data={data}
          setData={setData}
          savesetPushObjectHandler={savesetPushObjectHandler}
        />
      )}
      <div
        className={`grid gap-4 mt-3 mb-2`}
        style={{
          gridTemplateColumns: `repeat(${customStyle.Columns.column}, minmax(0, 1fr))`,
        }}
      >
        {data?.map((item: any, index: number) => (
          <div className="w-full px-[10px] " key={index}>
            {customStyle?.Headings?.Headings && (
              <>
                <div
                  className={`w-full px-[8px] py-[2px] text-[18px] font-bold flex leading-5 ${customStyle?.Headings?.["Headings Center"]
                    ? "text-center"
                    : ""
                    }`}
                >
                  <h1 className="w-full ">{item.heading}</h1>
                </div>
                {customStyle?.Headings?.["Heading UnderLine"] && (
                  <div className="h-[1.5px] w-full bg-[#016A70]  rounded-lg mt-[5px] mb-[10px]"></div>
                )}
              </>
            )}
            {customStyle?.["List Item"]?.["Show List Items"] &&
              item?.lists?.length > 0 &&
              item?.lists?.map((listItem: any, innerIndex: number) => (
                <div className="w-full   px-[8px] py-[2px]  " key={innerIndex}>
                  <div className="flex w-full">
                    {customStyle?.["List Item"]?.["Show Numbers"] && (
                      <div className="text-[#016A70] text-[13px] pr-[10px]">
                        {index + 1}
                      </div>
                    )}
                    {customStyle?.["List Item"]?.["Show Bullets"] && (
                      <div className="pr-[10px] flex items-center h-[18px]">
                        <div className="bg-[#016A70] w-[8px] h-[8px] rounded-full"></div>
                      </div>
                    )}

                    <div
                      className={`flex text-[13px] flex-1 break-words overflow-x-hidden flex-wrap ${customStyle?.["List Item"]?.["Bold Items"]
                        ? "font-bold"
                        : "font-normal"
                        }`}
                    >
                      <h1 className="w-full text-[13px]">{listItem}</h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default BulletList;
