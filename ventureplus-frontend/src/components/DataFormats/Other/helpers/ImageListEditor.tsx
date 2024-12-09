import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoundedButton from "../../../button/RoundedButton";
import { defaultImageForPlan, deleteIcon } from "../../../../assets";
import { Select } from "antd";
import UploadImageInPlan from "./uploadImageInPlan";

export type CustomStyleForImage = {
  Columns: {
    column: number;
  };
  Captions: {
    Captions: boolean;
    "Vertical Position": string;
    "Horizontal Position": string;
  };
};

interface SideBarProps {
  data: any;
  title: string;
  setCustomStyleModal: React.Dispatch<
    React.SetStateAction<CustomStyleForImage>
  >;
  customStyleModal: CustomStyleForImage;
};

const SideBarForImageModal: React.FC<SideBarProps> = ({
  data,
  title,
  setCustomStyleModal,
  customStyleModal,
}) => {
  const [show, setShow] = useState(false);
  const [arrData, setArrData] = useState<any>([]);
  useEffect(() => {
    if (data) {
      const newArray = Object.keys(data).map((key) => ({
        title: key,
        value: data[key],
        type: typeof data[key],
      }));
      setArrData(newArray);
    }
  }, [data]);

  const handleChange = (key: string, value: any) => {
    setCustomStyleModal((prevStyle) => {
      const newCustomStyle = { ...prevStyle };
      if (title === "Columns") {
        newCustomStyle.Columns = {
          ...newCustomStyle.Columns,
          [key]: value,
        };
      } else if (title === "Captions") {
        newCustomStyle.Captions = {
          ...newCustomStyle.Captions,
          [key]: value,
        };
      }
      return newCustomStyle;
    });
  };

  return (
    <>
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px]"
        onClick={() => setShow(!show)}
      >
        {title}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", padding: "0 10px" }}
          >
            {arrData &&
              arrData.map((item: any) => (
                <div
                  key={item.title}
                  className="py-[10px]  flex flex-col gap-2 text-[#fff]"
                >
                  {/* the first condition is only work when the Captions in uncheck  */}
                  {(item.title === "Vertical Position" ||
                    item.title === "Horizontal Position") &&
                  !data.Captions ? null : item.title === "Vertical Position" ? (
                    <>
                      <span className="text-[13px] font-normal">
                        {item.title}
                      </span>
                      <Select
                        className="w-full min-h-[38px]"
                        value={item.value}
                        onChange={(e) => handleChange(item.title, e)}
                      >
                        {["Top", "Bottom"].map((item: any) => (
                          <Select.Option key={item} value={item}>
                            {item}
                          </Select.Option>
                        ))}
                      </Select>
                    </>
                  ) : item.title === "Horizontal Position" ? (
                    <>
                      <span className="text-[13px] font-normal">
                        {item.title}
                      </span>
                      <Select
                        className="w-full min-h-[38px]"
                        value={item.value}
                        onChange={(e) => handleChange(item.title, e)}
                      >
                        {["Left", "Center", "Right"].map((item: any) => (
                          <Select.Option key={item} value={item}>
                            {item}
                          </Select.Option>
                        ))}
                      </Select>
                    </>
                  ) : item.type === "boolean" ? (
                    <div className="flex gap-2 text-[13px]">
                      <input
                        type="checkbox"
                        checked={item.value}
                        onChange={(e) =>
                          handleChange(item.title, e.target.checked)
                        }
                      />
                      <p>{item.title}</p>
                    </div>
                  ) : item.type === "number" ? (
                    <>
                      <span className="text-[13px] font-normal">
                        {item.title}
                      </span>
                      <input
                        type="text"
                        className="py-[2px] px-[10px] outline-none text-[black] rounded-md text-[20px]"
                        value={item.value}
                        onChange={(e) => {
                          let valueInNumber = Number(e.target.value);
                          if (valueInNumber <= 0) {
                            valueInNumber = 0;
                          }
                          handleChange(item.title, valueInNumber);
                        }}
                        onKeyDown={(e) => {
                          const numericRegex = /^[0-9]$/;

                          if (
                            numericRegex.test(e.key) ||
                            e.key === "Backspace" ||
                            e.key === "Tab" ||
                            e.key === "ArrowLeft" ||
                            e.key === "ArrowRight"
                          ) {
                            return;
                          }

                          e.preventDefault();
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-[13px] font-normal">
                        {item.title}
                      </span>
                      <input
                        type="text"
                        className="py-[2px] px-[10px] outline-none text-[black] rounded-md text-[20px]"
                        value={item.value}
                        onChange={(e) =>
                          handleChange(item.title, e.target.value)
                        }
                      />
                    </>
                  )}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ListContainerForImageModal = ({
  data,
  customStyleModal,
  deleteHandler,
  setData,
  index,
}: {
  data: any;
  customStyleModal: CustomStyleForImage;
  deleteHandler: () => void;
  setData: any;
  index: number;
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      {customStyleModal.Captions["Vertical Position"] === "Top" &&
        customStyleModal.Captions.Captions && (
          <div
            className={`mt-[10px] text-[18px] font-semibold ${
              customStyleModal.Captions["Horizontal Position"] === "Center"
                ? "text-center"
                : customStyleModal.Captions["Horizontal Position"] === "Left"
                ? "text-left"
                : "text-right"
            }`}
          >
            {data.caption}
          </div>
        )}
      <div className="w-full ">
        {data.file ? (
          <img src={URL.createObjectURL(data.file)} className="w-full" />
        ) : (
          <img src={data.url || defaultImageForPlan} className="w-full" />
        )}
      </div>
      {customStyleModal.Captions["Vertical Position"] === "Bottom" &&
        customStyleModal.Captions.Captions && (
          <div
            className={`mt-[10px] text-[18px] font-semibold ${
              customStyleModal.Captions["Horizontal Position"] === "Center"
                ? "text-center"
                : customStyleModal.Captions["Horizontal Position"] === "Left"
                ? "text-left"
                : "text-right"
            }`}
          >
            {data.caption}
          </div>
        )}
    </div>
  );
};

const ImageContainerForImageModal = ({
  data,
  deleteHandler,
  setData,
  index,
}: {
  data: any;
  deleteHandler: () => void;
  setData: any;
  index: number;
}) => {
  const [show, setShow] = useState(false);
  const handleChange = (value: string) => {
    setData((pre: any) =>
      pre.map((item: any, ind: number) =>
        ind === index ? { ...item, caption: value } : item
      )
    );
  };
  const [deleteButtonShow, setDeleteButtonShow] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setDeleteButtonShow(true);
      }}
      onMouseLeave={() => {
        setDeleteButtonShow(false);
      }}
    >
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px] relative"
        onClick={() => setShow(!show)}
      >
        {`Image ${index + 1}`}
        {deleteButtonShow && (
          <button
            className="absolute right-2 top-3 w-5 h-5  cursor-pointer z-10  "
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler();
            }}
          >
            <img src={deleteIcon} alt="delect icon" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", padding: "0 10px" }}
          >
            <div className="mt-[10px]">
              <UploadImageInPlan
                key={index}
                data={{ file: data.file, url: data.url }}
                setData={setData}
                name={`image${index}`}
                index={index}
                supportedFileTypes={["jpg", "png", "jpeg"]}
              />
            </div>
            <div className="py-[10px]  flex flex-col gap-2 text-[#fff]">
              <>
                <span className="text-[13px] font-normal">Caption</span>
                <input
                  type="text"
                  className=" px-[10px]  outline-none text-[black] rounded-md text-[15px] py-[6px]"
                  value={data.caption}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export {
  SideBarForImageModal,
  ListContainerForImageModal,
  ImageContainerForImageModal,
};
