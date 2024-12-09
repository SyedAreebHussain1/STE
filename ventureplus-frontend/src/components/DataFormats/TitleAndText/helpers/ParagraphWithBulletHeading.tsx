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
}

const ParagraphWidthBulletHeading = ({ apiData, setPushObject }: Props) => {
  const [focus, setFocus] = useState(false);

  let modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  let formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const quillRef = useRef<any>(null);

  useEffect(() => {
    const quillElement = quillRef.current;

    if (quillElement) {
      const handleMouseEnter = () => {
        quillRef.current.mouseOver = true;
      };

      const handleMouseLeave = () => {
        quillRef.current.mouseOver = false;
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (quillRef.current && !quillElement.contains(event.target as Node)) {
          setFocus(false); // Click outside the Quill editor
        } else {
          setFocus(true); // Click inside the Quill editor
        }
      };

      quillElement.addEventListener("mouseenter", handleMouseEnter);
      quillElement.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("click", handleClickOutside);

      return () => {
        quillElement.removeEventListener("mouseenter", handleMouseEnter);
        quillElement.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [quillRef]);
  const handleProcedureContentChange = (content: any) => {
    setPushObject((pre: any) =>
      pre.map((item: any, index: number) =>
        item.id == apiData.id ? { ...item, data: { paragraph: content } } : item
      )
    );
  };
  const getTextContent = (data: any) => {
    const keys = Object.keys(data || {});
    let content = "";
    for (const key in data) {
      if (key == "heading") {
        content += `<ul><li><strong class="ql-size-large">${data[key]}</strong></li></ul>`;
      }
      if (key !== "heading" && keys.includes("heading")) {
        content += `${data[key]}`;
      } else if (key !== "heading") {
        content += data[key];
      }
    }

    return content;
  };

  return (
    <div className="w-full h-max relative  !z-[2] " ref={quillRef}>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onFocus={() => setFocus(true)}
        className={`h-max ${focus ? "quillFocus" : "quillNotFocus"
          } quillCustom`}
        placeholder="write your content ...."
        value={getTextContent(apiData?.data)}
        onChange={handleProcedureContentChange}
      ></ReactQuill>
    </div>
  );
};

export default ParagraphWidthBulletHeading;
