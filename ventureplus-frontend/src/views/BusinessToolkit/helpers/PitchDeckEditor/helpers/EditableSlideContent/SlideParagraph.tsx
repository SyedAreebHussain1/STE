import { useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { editComponentIcon } from "../../../../../../assets/ReusableComponents";
import "./SlideParagraph.css";
import SlideParagraphModal from "./SlideParagraphModal";
import { sparklesIcon } from "../../../../../../assets/chatbotAssets";
import { OpenAIFilled } from "@ant-design/icons";
import useToggle from "../../../../../../hooks/useToggle";
import { sparklesGreenIcon } from "../../../../../../assets";
import { Rnd } from "react-rnd";

interface data {
  id: number;
  type: string;
  paragraph: string;
}

interface Props {
  apiData: any;
  setSlideContent: any;
  slideNo: string;
  index: number;
  onResize: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag: (e: any, data: any, index: number) => void;
}

const SlideParagraph = ({
  apiData,
  setSlideContent,
  slideNo,
  index,
  onResize,
  onDrag,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [modalData, setModalData] = useState("");
  const [open, toggle] = useToggle();
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [hold, setHold] = useState(false);

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

  const handleLinkClick = (event: any) => {
    const link = event.target.closest("a");
    if (link) {
      let url = link.getAttribute("href");
      // logic to route outside of the domain
      if (url) {
        if (!url.includes("https://")) {
          url = `https://${url}`;
        }
        // Open the link in a new tab
        if (url) window.open(url, "_blank");
        event.preventDefault();
      }
    }
  };

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
          setFocus(false);
        } else {
          setFocus(true);
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
  }, []);
  const handleProcedureContentChange = (content: any) => {
    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === slideNo
          ? {
              [slideNo]: item[slideNo].map((innerItem: any, i: number) =>
                i === index
                  ? { ...innerItem, data: { ...innerItem.data, text: content } }
                  : innerItem
              ),
            }
          : item
      )
    );
  };

  const getTextContent = (data: any) => {
    const keys = Object.keys(data || {});
    if (keys.length > 0) {
      return data[keys[0]];
    }
    return "";
  };

  useEffect(() => {
    if (apiData?.data) {
      setModalData(apiData?.data?.text);
    }
  }, [apiData?.data]);

  const saveModalData = (content: string) => {
    if (content !== apiData?.data?.text) {
      setSlideContent((prevData: any) =>
        prevData.map((item: any) =>
          Object.keys(item)[0] === slideNo
            ? {
                [slideNo]: item[slideNo].map((innerItem: any, i: number) =>
                  i === index
                    ? {
                        ...innerItem,
                        data: { ...innerItem.data, text: content },
                      }
                    : innerItem
                ),
              }
            : item
        )
      );
    }
    toggle();
  };

  return (
    <>
      {open && (
        <SlideParagraphModal
          text={modalData}
          open={open}
          toggle={toggle}
          saveModalData={saveModalData}
        />
      )}
      <Rnd
        size={{
          width: apiData?.dimensions?.width,
          height: apiData?.dimensions?.height,
        }}
        position={{
          x: apiData?.position?.x,
          y: apiData?.position?.y,
        }}
        disableDragging={hold}
        onDragStop={(e, data) => onDrag(e, data, index)}
        onResizeStop={(e, data, ref, delta, position) =>
          onResize(e, data, ref, delta, position, index)
        }
        minWidth={100}
        minHeight={100}
        bounds="parent"
        className="hover:border hover:border-primary rounded-lg overflow-visible"
      >
        <div className="w-full h-full relative" ref={quillRef}>
          <div
            onClick={handleLinkClick}
            onMouseEnter={() => setShowEditIcon(true)}
            onMouseLeave={() => setShowEditIcon(false)}
            className={`bg-transparent  p-4 relative rounded-lg h-full w-full ${
              hold ? "" : "cursor-move"
            } `}
          >
            {showEditIcon && (
              <div
                onClick={toggle}
                className="rounded-full cursor-pointer absolute top-2 right-2 bg-[white] flex items-center justify-center z-10 shadow-lg  py-1 px-2 border border-primary"
              >
                <img src={sparklesGreenIcon} alt="" className="z-20 relative" />
                <p className="text-primary font-medium">Edit with AI</p>
              </div>
            )}

            {showEditIcon && (
              <div
                onClick={() => setHold((st: any) => !st)}
                className="rounded-full cursor-pointer absolute bottom-2 right-2 bg-[white] flex items-center justify-center z-10 shadow-lg  py-1 px-2 border border-primary"
              >
                <img src={sparklesGreenIcon} alt="" className="z-20 relative" />
                <p className="text-primary font-medium">
                  {hold ? "Drag" : "Edit"}
                </p>
              </div>
            )}
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              onFocus={() => setFocus(true)}
              className={`h-max max-h-full overflow-hidden ${
                focus && hold ? "quillFocus" : "quillNotFocus"
              }`}
              placeholder="write your content ...."
              value={getTextContent(apiData?.data)}
              onChange={handleProcedureContentChange}
            ></ReactQuill>
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default SlideParagraph;
