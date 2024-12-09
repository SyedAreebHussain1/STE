import React, { useEffect, useState } from "react";
import { ColorPicker, Modal, Select } from "antd";
import RoundedButton from "../../../../../button/RoundedButton";
import { AnimatePresence, motion } from "framer-motion";
import { cancelIconWhite, deleteIcon } from "../../../../../../assets";
import VennDiagramComponent from "./VennDiagramComponent";
import { infoMessage } from "../../../../../../utils/message";

interface Props {
  open: boolean;
  close: () => void;
  customStyle: any;
  setCustomStyle: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  savesetPushObjectHandler: (data: any, style: any) => void;
}

const VennDiagramModal: React.FC<Props> = ({
  open,
  close,
  customStyle,
  setCustomStyle,
  data,
  setData,
  savesetPushObjectHandler,
}) => {
  const [customStyleModal, setCustomStyleModal] = useState<any>({});
  const [modalData, setModalData] = useState<any[]>([]);
  const [arrOfColor, setArrOfColor] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setArrOfColor([...customStyle.colors]);
      setModalData([...data]);
    }
  }, [data]);

  useEffect(() => {
    setShow(false);
    setCustomStyleModal({
      ...customStyle,
      colors: [...arrOfColor],
      series: [
        {
          ...customStyle.series[0],
          data: modalData,
        },
      ],
    });
  }, [arrOfColor, modalData]);

  useEffect(() => {
    if (customStyle) {
      setCustomStyleModal({ ...customStyle });
    }
  }, [customStyle]);

  useEffect(() => {
    customStyleModal && setShow(true);
  }, [customStyleModal]);

  const saveHandler = () => {
    setCustomStyle({ ...customStyleModal });
    setData([...modalData]);
    close();
    savesetPushObjectHandler(modalData, customStyleModal);
  };

  const deleteHandler = (deleteName: string) => {
    setModalData((pre: any) =>
      pre.filter((item: any, ind: number) => item?.name !== deleteName)
    );
  };

  return (
    <Modal
      centered
      footer={null}
      open={open}
      onCancel={close}
      closeIcon={false}
      closable={false}
      maskClosable={false}
      width="100%"
      className="m-0 p-0 tableforPdf rounded-xl overflow-hidden"
    >
      <div className="flex w-full max-h-max">
        <div className="flex-1 h-[90vh] overflow-y-auto py-[15px] px-[10px]">
          <h1 className="text-[#040615] text-[23px] font-medium border-b-2 border-[#040615] pb-[8px] px-[8px]">
            Venn
          </h1>
          <div className={`mt-[20px] px-[20px] `}>
            {show && <VennDiagramComponent customStyle={customStyleModal} />}
          </div>
        </div>
        {/* side bar */}
        <div className="w-max py-[15px] px-[10px] h-[90vh] flex flex-col bg-[#016A70]">
          <div className="flex justify-between border-b-2 border-[#F8FAFC] items-center px-[8px] pb-[8px]">
            <h1 className="text-[#fff] text-[23px] font-medium">Editor</h1>
            <div onClick={close}>
              <img src={cancelIconWhite} alt="cancel icon" />
            </div>
          </div>
          <div className="h-full overflow-y-auto px-[5px]">
            <div className="h-max py-[10px] w-[300px]">
              {modalData.map((item: any, index: number) => (
                <SideBarForVennDiagramModal
                  key={index}
                  data={item}
                  modalData={modalData}
                  setModalData={setModalData}
                  index={index}
                  colors={arrOfColor}
                  setColors={setArrOfColor}
                  deleteHandler={deleteHandler}
                />
              ))}
              <SideBarVennDiagramForAddModal
                colors={arrOfColor}
                setColors={setArrOfColor}
                modalData={modalData}
                setModalData={setModalData}
                index={modalData.length}
              />
            </div>
          </div>
          <div className="flex w-full pt-[10px]">
            <RoundedButton
              title={"Save"}
              sm
              className="rounded-lg w-full"
              type="default"
              onClick={saveHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VennDiagramModal;

interface SideBarProps {
  data: any;
  colors: string[];
  setColors: any;
  modalData: any;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  index: number;
  deleteHandler: (deleteName: string) => void;
}
interface SideBarPropsForAdd {
  colors: string[];
  setColors: any;
  modalData: any;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  index: number;
}

const SideBarForVennDiagramModal: React.FC<SideBarProps> = ({
  data,
  colors,
  setColors,
  modalData,
  setModalData,
  index,
  deleteHandler,
}) => {
  const [show, setShow] = useState(false);

  const handleChange = (key: string, value: any) => {
    if (key == "value" && !value) {
      setModalData((prev: any) =>
        prev.map((item: any, ind: number) =>
          ind === index ? { ...item, [key]: value, sets: [] } : item
        )
      );
    } else {
      setModalData((prev: any) =>
        prev.map((item: any, ind: number) =>
          ind === index ? { ...item, [key]: value } : item
        )
      );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    const nameExists = modalData.some(
      (item: any, idx: number) => idx !== index && item.name === newName
    );

    if (nameExists) {
      e.preventDefault();
      return;
    }

    setModalData((prevData: any) =>
      prevData.map((item: any, idx: number) => {
        if (idx === index) {
          return {
            ...item,
            name: newName,
            sets: item.sets.map((set: any) =>
              set === data.name ? newName : set
            ),
          };
        }
        return {
          ...item,
          sets: item.sets.map((set: any) =>
            set === data.name ? newName : set
          ),
        };
      })
    );
  };

  return (
    <>
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px] flex items-center justify-between"
        onClick={() => setShow(!show)}
      >
        <h1>{data?.name}</h1>
        <div>
          <img
            src={deleteIcon}
            onClick={(e) => {
              deleteHandler(data.name);
              e.preventDefault();
              e.stopPropagation();
            }}
            className="w-[18px]"
          />
        </div>
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
            <div className="py-[10px] flex flex-col gap-2 text-[#fff]">
              <span className="text-[13px] font-normal">Name</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data.name}
                onChange={handleNameChange}
              />
              <span className="text-[13px] font-normal">Value</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data.value}
                onChange={(e) => {
                  let valueInNumber = Number(e.target.value);
                  if (valueInNumber <= 0) {
                    valueInNumber = 0;
                  }
                  handleChange("value", valueInNumber);
                }}
                onKeyDown={(e) => {
                  const numericRegex = /^[0-9]$/;

                  if (
                    numericRegex.test(e.key) ||
                    e.key === "Backspace" ||
                    e.key === "ArrowLeft" ||
                    e.key === "ArrowRight" ||
                    e.key === "Delete"
                  ) {
                    return;
                  } else {
                    e.preventDefault();
                  }
                }}
              />
              <span className="text-[13px] font-normal">Sets</span>
              <Select
                className="w-full !min-h-[36px]"
                popupClassName={"!min-h-[36px]"}
                value={data.sets}
                allowClear
                mode="multiple"
                disabled={!data.value}
                onChange={(e) => {
                  const uniqueSets = Array.from(new Set(e));
                  setModalData((prev: any) =>
                    prev.map((item: any, innerIndex: number) =>
                      innerIndex === index
                        ? { ...item, sets: uniqueSets }
                        : item
                    )
                  );
                }}
              >
                {modalData.map((item: any, idx: number) => (
                  <Select.Option
                    className="h-[33px]"
                    value={item.name}
                    key={idx}
                  >
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
              <span className="text-[13px] font-normal">Color</span>
              <div className="w-full vennDiagram">
                <ColorPicker
                  value={colors[index]}
                  className="h-[36px] !w-full"
                  size="large"
                  onChange={(e: any, hax: string) => {
                    setColors((pre: any) => {
                      return pre.map((item: string, ind: number) =>
                        ind == index ? hax : item
                      );
                    });
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SideBarVennDiagramForAddModal: React.FC<SideBarPropsForAdd> = ({
  modalData,
  setModalData,
  colors,
  setColors,
  index,
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    sets: [],
    value: 0,
    name: "",
  });
  const colorArr = [
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

  const [newListColor, seteNewListColor] = useState(
    colorArr.length >= colors.length ? colorArr[index] : "#000"
  );

  const handleChange = (key: string, value: any) => {
    if (key == "value" && !value) {
      setData((prev: any) => ({ ...prev, [key]: value, sets: [] }));
    } else {
      setData((prev: any) => ({ ...prev, [key]: value }));
    }
  };
  const addListHandler = () => {
    if (!data.name) {
      infoMessage("Add Name First");
      return;
    }
    setColors((pre: any) => {
      const arr = [...pre];
      arr.push(newListColor);
      return arr;
    });
    setModalData((pre: any) => {
      let arr = [...pre];
      arr.push({ ...data });
      return arr;
    });
    setData({
      sets: [],
      value: 0,
      name: "",
    });
    setShow(false);
  };

  return (
    <>
      <div
        className="w-[300px] bg-[#fff] mt-[10px] p-[10px] rounded-xl text-[18px]"
        onClick={() => setShow(!show)}
      >
        New List
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
            <div className="py-[10px] flex flex-col gap-2 text-[#fff]">
              <span className="text-[13px] font-normal">Name</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data.name}
                onChange={(e) => {
                  handleChange("name", e.target.value);
                }}
              />
              <span className="text-[13px] font-normal">Value</span>
              <input
                type="text"
                className="py-[6px] px-[10px] outline-none text-[black] rounded-md text-[16px]"
                value={data.value}
                onChange={(e) => {
                  let valueInNumber = Number(e.target.value);
                  if (valueInNumber <= 0) {
                    valueInNumber = 0;
                  }
                  handleChange("value", valueInNumber);
                }}
                onKeyDown={(e) => {
                  const numericRegex = /^[0-9]$/;

                  if (
                    numericRegex.test(e.key) ||
                    e.key === "Backspace" ||
                    e.key === "ArrowLeft" ||
                    e.key === "ArrowRight" ||
                    e.key === "Delete"
                  ) {
                    return;
                  } else {
                    e.preventDefault();
                  }
                }}
              />
              <span className="text-[13px] font-normal">Sets</span>
              <Select
                className="w-full !min-h-[36px]"
                popupClassName={"!min-h-[36px]"}
                value={data.sets}
                allowClear
                disabled={!data.value}
                mode="multiple"
                onChange={(e) => {
                  const uniqueSets = Array.from(new Set(e));
                  setData((prev: any) => ({ ...prev, sets: uniqueSets }));
                }}
              >
                {modalData.map((item: any, idx: number) => (
                  <Select.Option
                    className="h-[33px]"
                    value={item.name}
                    key={idx}
                  >
                    {item.name}
                  </Select.Option>
                ))}
                <Select.Option
                  className="h-[33px]"
                  value={data.name}
                  key={data.name + index}
                >
                  {data.name}
                </Select.Option>
              </Select>

              <span className="text-[13px] font-normal">Color</span>
              <div className="w-full vennDiagram">
                <ColorPicker
                  value={newListColor}
                  className="h-[36px] !w-full"
                  size="large"
                  onChange={(e: any, hax: string) => {
                    seteNewListColor(hax);
                  }}
                />
              </div>
              <div className="flex w-full mt-4 justify-center">
                <RoundedButton
                  title={"Add List"}
                  sm
                  className="rounded-lg py-[20px] px-[30px] text-[16px]"
                  type="secondary"
                  onClick={addListHandler}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
