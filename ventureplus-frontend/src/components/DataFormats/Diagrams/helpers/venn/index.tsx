import React, { useEffect, useState } from "react";
import VennDiagramComponent from "./helpers/VennDiagramComponent";
import VennDiagramModal from "./helpers/VennDiagramModal";
import "./helpers/VennDiagram.css";

interface Props {
  apiData: any;
  setPushObject: React.Dispatch<React.SetStateAction<any[]>>;
  open: boolean;
  toggle: () => void;
  index: number;
}
const defaultData = [
  {
    sets: ["Good"],
    value: 2,
    name: "Good",
  },
  {
    sets: ["Fast"],
    value: 2,
    name: "Fast",
  },
  {
    sets: ["Cheap"],
    value: 2,
    name: "Cheap",
  },
  {
    sets: ["Fast", "Good"],
    value: 1,
    name: "More expensive",
  },
  {
    sets: ["Cheap", "Good"],
    value: 1,
    name: "Will take time to deliver",
  },
  {
    sets: ["Cheap", "Fast"],
    value: 1,
    name: "Not the best quality",
  },
  {
    sets: ["Cheap", "Fast", "Good"],
    value: 1,
    name: "They're dreaming",
  },
];

const VennDiagram = ({
  apiData,
  setPushObject,
  open,
  toggle,
  index,
}: Props) => {
  const [data, setData] = useState(apiData?.data?.diagram || defaultData);
  const [customStyle, setCustomStyle] = useState(apiData?.data?.style || {});
  const colors = [
    "#add8e6", // Light Blue
    "#90ee90", // Light Green
    "#ffb6c1", // Light Pink
    "#ffe4c4", // Light Beige
    "#fff0f5", // Lavender Blush
    "#dda0dd", // Plum
    "#e0ffff", // Light Cyan
    "#fffacd", // Lemon Chiffon
    "#faebd7", // Antique White
    "#f0e68c", // Khaki
  ];
  useEffect(() => {
    if (!apiData?.data?.style) {
      let newArrColor: string[] = [];

      if (data.length <= colors.length) {
        newArrColor = colors.slice(0, data.length);
      } else {
        newArrColor = [...colors];
        const additionalColorsNeeded = data.length - colors.length;
        newArrColor = [
          ...newArrColor,
          ...Array(additionalColorsNeeded).fill("#000"), // Add "#000" for extra items
        ];
      }
      setCustomStyle({
        title: { style: { display: "none" } },
        colors: [...newArrColor],
        chart: {
          borderWidth: 2,
          borderColor: "#fff",
          borderRadius: 20,
          animation: false,
          height: 300,
          width: 300,
        },
        series: [
          {
            type: "venn",
            // name: "Decline Reasons",
            data: data,
          },
        ],
      });
    }
  }, [data]);

  const savesetPushObjectHandler = (modalData: any, style: any) => {
    setPushObject((pre: any) =>
      pre.map((item: any, ind: number) =>
        item?.map((innerItem: any) =>
          ind == index && innerItem?.id == apiData?.id
            ? {
                ...innerItem,
                data: { diagram: [...modalData], style: { ...style } },
              }
            : innerItem
        )
      )
    );
  };

  return (
    <>
      {open && (
        <VennDiagramModal
          open={open}
          close={toggle}
          customStyle={customStyle}
          setCustomStyle={setCustomStyle}
          data={data}
          setData={setData}
          savesetPushObjectHandler={savesetPushObjectHandler}
        />
      )}
      <div>
        <VennDiagramComponent customStyle={customStyle} />
      </div>
    </>
  );
};

export default VennDiagram;
