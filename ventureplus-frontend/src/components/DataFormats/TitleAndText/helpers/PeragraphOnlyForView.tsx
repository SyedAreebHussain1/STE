import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "./paragraphForPdf.css";

interface data {
  id: number;
  type: string;
  paragraph: string;
}

interface Props {
  apiData: any;
  setPushObject: any;
  index: number;
}

const ParagraphForPdf = ({ apiData, setPushObject, index }: Props) => {
  const quillRef = useRef<any>(null);
  const getTextContent = (data: any) => {
    const keys = Object.keys(data || {});
    if (keys.length > 0) {
      return data[keys[0]];
    }
    return "";
  };

  return (
    <div
      className="w-full h-max pb-2 pt-2 px-2 relative  !z-[2]  "
      ref={quillRef}
    >
      <ReactQuill
        theme="snow"
        readOnly={true}
        className={`h-max  quillNotFocus`}
        placeholder="write your content ...."
        value={getTextContent(apiData?.data)}
      ></ReactQuill>
    </div>
  );
};

export default ParagraphForPdf;
