import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import "./paragraphForPdf.css";
import ParagraphForPdfModal from "./ParagraphForPdfModal";
import History from "quill";

Quill.register("modules/history", History);

interface data {
  id: number;
  type: string;
  paragraph: string;
}

interface Props {
  apiData: any;
  setPushObject: any;
  index: number;
  open: boolean;
  toggle: () => void;
  setSaveChangesDisabled: any;
}

const ParagraphForPdf = ({
  apiData,
  setPushObject,
  index,
  open,
  toggle,
  setSaveChangesDisabled
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [modalData, setModalData] = useState("");
  const [currentContent, setCurrentContent] = useState(
    apiData?.data?.paragraph || ""
  );

  const quillRef = useRef<ReactQuill | null>(null);
  const quillContainerRef = useRef<any>(null);

  const modules = {
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
    history: {
      delay: 1000,
      userOnly: true,
    },
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

  useEffect(() => {
    if (apiData?.data) {
      const keys = Object.keys(apiData?.data || {});
      if (keys.length > 0) {
        if (apiData?.data[keys[0]] !== modalData) {
          setModalData(apiData?.data[keys[0]]);
        } else return;
      } else {
        setModalData("");
      }
    }
  }, [apiData?.data]);

  const handleLinkClick = (event: any) => {
    const link = event.target.closest("a");
    if (link) {
      let url = link.getAttribute("href");
      if (url) {
        if (!url.includes("https://")) {
          url = `https://${url}`;
        }
        window.open(url, "_blank");
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
   if(setSaveChangesDisabled)  setSaveChangesDisabled(true); 
  }, []);

  const handleProcedureContentChange = (content: any) => {
    if (content !== apiData?.data?.paragraph) {
      setPushObject((pre: any) =>
        pre.map((item: any, ind: number) =>
          item.map((innerItem: any, i: number) =>
            ind === index && innerItem.id == apiData.id
              ? { ...innerItem, data: { paragraph: content } }
              : innerItem
          )
        )
      );
    }

    if (quillRef.current) {
      setSaveChangesDisabled(false);
    } else {
      setSaveChangesDisabled(true);
    }
    setCurrentContent(content);
  };

  const saveModalData = (content: string) => {
    if (content !== apiData?.data?.paragraph) {
      setPushObject((pre: any) =>
        pre.map((item: any, ind: number) =>
          item.map((innerItem: any, i: number) =>
            ind === index && innerItem.id == apiData.id
              ? { ...innerItem, data: { paragraph: content } }
              : innerItem
          )
        )
      );
    }

    setSaveChangesDisabled(false);
    toggle();
  };

  const execFnct = () => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      const history = quillEditor.history;
      if (history) {
        history.undo();
      }
    }
  };

  const getTextContent = (data: any) => {
    const keys = Object.keys(data || {});
    if (keys.length > 0) {
      return data[keys[0]];
    }
    return "";
  };

  useEffect(() => {
    const quillElement = quillContainerRef.current;

    if (quillElement) {
      const handleMouseEnter = () => {
        quillContainerRef.current.mouseOver = true;
      };

      const handleMouseLeave = () => {
        quillContainerRef.current.mouseOver = false;
      };

      const handleClickOutside = (event: MouseEvent) => {
        if (
          quillContainerRef.current &&
          !quillElement.contains(event.target as Node)
        ) {
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
  }, [quillContainerRef]);

  return (
    <div className="w-full h-max relative">
      {open && (
        <ParagraphForPdfModal
          text={modalData}
          open={open}
          toggle={toggle}
          saveModalData={saveModalData}
        />
      )}
      <div onClick={handleLinkClick} ref={quillContainerRef}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`h-max ${focus ? "quillFocus" : "quillNotFocus"}`}
          placeholder="write your content ...."
          value={getTextContent(apiData?.data)}
          onChange={handleProcedureContentChange}
          ref={quillRef}
        ></ReactQuill>
        <div className="flex justify-end">
          <button
            onClick={execFnct}
            className={`undo-button ${
              focus
                ? "flex justify-end px-4 py-2 rounded-md bg-[#016A70] text-[#FFFFFF]"
                : "hidden"
            }`}
          >
            Undo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParagraphForPdf;