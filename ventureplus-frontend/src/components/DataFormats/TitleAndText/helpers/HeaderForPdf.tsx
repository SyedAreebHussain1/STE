import React, { useEffect, useRef, useState } from "react";

interface data {
  id: number;
  type: string;
  title: string;
}

interface Props {
  apiData?: any;
  setPushObject: any;
  index: any;
  subheadingNumber?: any;
  edit?: boolean;
}
const title = "Our Mission";

const HeaderForPdf = ({
  apiData,
  setPushObject,
  index,
  subheadingNumber,
  edit = true,
}: Props) => {
  const [headingEdit, setHeadingEdit] = useState(false);

  return (
    <div className="h-max flex w-full gap-2 mb-1 mt-4  rounded-md items-center  text-[16px] font-medium leading-4">
      <h1>
        {subheadingNumber && subheadingNumber !== "undefined"
          ? subheadingNumber
          : ""}
      </h1>
      <div className="flex-1 ">
        {headingEdit && edit ? (
          <input
            value={apiData?.data?.heading}
            className="!border-0 outline-none w-full bg-transparent"
            onKeyDown={(e) => {
              if (e.code == "Enter") {
                e.preventDefault();
                setHeadingEdit(false);
                return;
              }
            }}
            onBlur={(e) => setHeadingEdit(false)}
            autoFocus
            onChange={(e) =>
              setPushObject((pre: any) =>
                pre.map((item: any, ind: number) =>
                  item?.map((innerItem: any, i: any) =>
                    ind == index && innerItem.id == apiData.id
                      ? { ...innerItem, data: { heading: e.target.value } }
                      : innerItem
                  )
                )
              )
            }
          />
        ) : (
          <h1
            className=" w-full min-h-[16px] text-[17px]"
            onClick={() => {
              setHeadingEdit(true);
            }}
          >
            {apiData?.data?.heading}
          </h1>
        )}
      </div>
    </div>
  );
};

export default HeaderForPdf;
