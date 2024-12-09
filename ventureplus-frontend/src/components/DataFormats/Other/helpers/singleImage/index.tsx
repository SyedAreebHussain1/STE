import React, { useState } from "react";
import { CustomStyleForImage } from "../ImageListEditor";
import { defaultImageForPlan } from "../../../../../assets";
import SingleImageModal from "./helpers/SingleImageModal";

interface Props {
  apiData: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  toggle: () => void;
  index: any;
}

const defaultData = [
  {
    caption: "Caption 1",
    file: null,
    url: "",
  },
];

const SingleImage = ({
  apiData,
  setPushObject,
  open,
  toggle,
  index,
}: Props) => {
  const [data, setData] = useState(apiData?.data?.images || defaultData);
  const [customStyle, setCustomStyle] = useState<CustomStyleForImage>(
    apiData?.data?.style || {
      Columns: {
        column: 1,
      },
      Captions: {
        Captions: true,
        "Vertical Position": "Bottom",
        "Horizontal Position": "Center",
      },
    }
  );

  const savesetPushObjectHandler = (modalData: any, style: any) => {
    setPushObject((pre: any) =>
      pre.map((item: any, ind: number) =>
        item?.map((innerItem: any) =>
          ind == index && innerItem?.id == apiData?.id
            ? {
                ...innerItem,
                data: { images: [...modalData], style: { ...style } },
              }
            : innerItem
        )
      )
    );
  };

  return (
    <>
      {open && (
        <SingleImageModal
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
        className="grid gap-4 mt-4 pb-[20px] px-[10px]"
        style={{
          gridTemplateColumns: `repeat(${customStyle.Columns.column}, minmax(0, 1fr))`,
        }}
      >
        {data.map((item: any, index: number) => (
          <div className="relative overflow-hidden w-full" key={index}>
            {customStyle.Captions["Vertical Position"] === "Top" &&
              customStyle.Captions.Captions && (
                <div
                  className={`mt-[10px] text-[18px] font-semibold ${
                    customStyle.Captions["Horizontal Position"] === "Center"
                      ? "text-center"
                      : customStyle.Captions["Horizontal Position"] === "Left"
                      ? "text-left"
                      : "text-right"
                  }`}
                >
                  {item.caption}
                </div>
              )}
            <div className="w-full ">
              {item.file ? (
                <img src={URL.createObjectURL(item.file)} className="w-full" />
              ) : (
                <img src={item.url || defaultImageForPlan} className="w-full" />
              )}
            </div>
            {customStyle.Captions["Vertical Position"] === "Bottom" &&
              customStyle.Captions.Captions && (
                <div
                  className={`mt-[10px] text-[18px] font-semibold ${
                    customStyle.Captions["Horizontal Position"] === "Center"
                      ? "text-center"
                      : customStyle.Captions["Horizontal Position"] === "Left"
                      ? "text-left"
                      : "text-right"
                  }`}
                >
                  {item.caption}
                </div>
              )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleImage;
