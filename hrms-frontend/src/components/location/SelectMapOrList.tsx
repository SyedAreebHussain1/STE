import { useState } from "react";

export enum ContentType {
  MAP,
  LIST,
}

type Props = {
  selected: ContentType,
  setSelected: (type: ContentType) => void
};

const SelectMapOrList = ({ selected, setSelected }: Props) => {
  return (
    <div className="flex items-center">
      <button
        className={`h-[1.5rem] w-[7.5rem] text-center border ${
          selected === ContentType.MAP
            ? "text-primary border-primary"
            : "text-[#B2B2B2] border-borderColor"
        }`}
        onClick={() => setSelected(ContentType.MAP)}
      > 
        Map
      </button>
      <button
        className={`h-[1.5rem] w-[7.5rem] text-center border ${
          selected === ContentType.LIST
            ? "text-primary border-primary"
            : "text-[#B2B2B2] border-borderColor"
        }`}
        onClick={() => setSelected(ContentType.LIST)}
      > 
        List
      </button>
    </div>
  );
};

export default SelectMapOrList;
