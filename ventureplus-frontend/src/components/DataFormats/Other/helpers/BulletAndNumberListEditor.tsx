import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoundedButton from "../../../button/RoundedButton";
import { deleteIcon } from "../../../../assets";

type ColumnsStyle = {
  column: number;
};

type HeadingsStyle = {
  Headings: boolean;
  "Heading UnderLine": boolean;
  "Headings Center": boolean;
};

type ListItemStyle = {
  "Show List Items": boolean;
  "Show Bullets"?: boolean;
  "Show Numbers"?: boolean;
  "Bold Items": boolean;
};

export type CustomStyle = {
  Columns: ColumnsStyle;
  Headings: HeadingsStyle;
  "List Item": ListItemStyle;
};

interface SideBarProps {
  data: any;
  title: string;
  setCustomStyleModal: React.Dispatch<React.SetStateAction<CustomStyle>>;
  customStyleModal: CustomStyle;
};

const SideBarForBulletAndNumberModal: React.FC<SideBarProps> = ({
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
      } else if (title === "Headings") {
        newCustomStyle.Headings = {
          ...newCustomStyle.Headings,
          [key]: value,
        };
      } else if (title === "List Item") {
        newCustomStyle["List Item"] = {
          ...newCustomStyle["List Item"],
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
                  {item.type === "boolean" ? (
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

const EditListHeader: React.FC<{
  title: string;
  setData: (value: string) => void;
  customStyleModal: CustomStyle;
}> = ({ title, setData, customStyleModal }) => {
  const [headingEdit, setHeadingEdit] = useState(false);

  const changeHandler = (val: string) => {
    setData(val);
  };

  return (
    <div
      className={`w-full h-full relative  bg-[#99C3C6] px-[8px] py-[10px] text-[white] text-[20px] flex  ${
        customStyleModal?.Headings?.["Headings Center"] ? "text-center" : ""
      }`}
    >
      {headingEdit ? (
        <input
          value={title}
          className={`border-0 outline-none w-full bg-transparent ${
            customStyleModal?.Headings?.["Headings Center"] ? "text-center" : ""
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setHeadingEdit(false);
            }
          }}
          onBlur={() => setHeadingEdit(false)}
          autoFocus
          onChange={(e) => changeHandler(e.target.value)}
        />
      ) : (
        <h1 className="w-full " onClick={() => setHeadingEdit(true)}>
          {title || ""}
        </h1>
      )}
    </div>
  );
};

const ListContainerForBulletAndNumberModal = ({
  data,
  customStyleModal,
  deleteHandler,
  setData,
  index,
}: {
  data: any;
  customStyleModal: CustomStyle;
  deleteHandler: () => void;
  setData: any;
  index: number;
}) => {
  const [deleteButtonShow, setDeleteButtonShow] = useState(false);

  const editTitleHandler = (value: string) => {
    setData((pre: any) =>
      pre.map((item: any, i: number) =>
        i == index ? { ...item, heading: value } : item
      )
    );
  };

  const listDeleteHandler = (innerIndex: number) => {
    setData((pre: any) =>
      pre?.map((item: any, ind: number) =>
        ind === index
          ? {
              ...item,
              lists: item?.lists?.filter(
                (_: any, innerind: number) => innerind !== innerIndex
              ),
            }
          : item
      )
    );
  };
  const addListItemHandler = () => {
    setData((pre: any) =>
      pre?.map((item: any, ind: number) =>
        ind === index
          ? {
              ...item,
              lists: [...item?.lists, `List ${item?.lists.length + 1}`],
            }
          : item
      )
    );
  };
  const addListItemTitleHandler = (value: string, innerIndex: number) => {
    setData((pre: any) =>
      pre?.map((item: any, ind: number) =>
        ind === index
          ? {
              ...item,
              lists: item?.lists?.map((listItem: string, innerInd: number) =>
                innerInd === innerIndex ? value : listItem
              ),
            }
          : item
      )
    );
  };

  return (
    <div
      className="  rounded-lg relative overflow-hidden"
      onMouseEnter={() => {
        setDeleteButtonShow(true);
      }}
      onMouseLeave={() => {
        setDeleteButtonShow(false);
      }}
    >
      {deleteButtonShow && (
        <button
          className="absolute right-2 top-4 w-5 h-5  cursor-pointer z-10  "
          onClick={deleteHandler}
        >
          <img src={deleteIcon} alt="delect icon" />
        </button>
      )}
      {customStyleModal?.Headings?.Headings && (
        <>
          <EditListHeader
            title={data?.heading}
            customStyleModal={customStyleModal}
            setData={editTitleHandler}
          />
          {customStyleModal?.Headings?.["Heading UnderLine"] && (
            <div className="h-[2.5px] w-full bg-[#016A70]  rounded-lg"></div>
          )}
        </>
      )}

      {customStyleModal?.["List Item"]?.["Show List Items"] &&
        data?.lists?.length > 0 &&
        data?.lists?.map((listitem: any, listIndex: number) => (
          <EditListContain
            key={listIndex}
            data={{ title: listitem }}
            index={listIndex}
            customStyleModal={customStyleModal}
            setData={(value: string) =>
              addListItemTitleHandler(value, listIndex)
            }
            deleteHandler={() => listDeleteHandler(listIndex)}
          />
        ))}
      {customStyleModal?.["List Item"]?.["Show List Items"] &&
        deleteButtonShow && (
          <div
            className="w-full rounded-bl-lg rounded-br-lg px-[8px] py-[15px] text-[15px] text-center border-[green] border-[1px] text-[green]"
            onClick={addListItemHandler}
          >
            Add List Item
          </div>
        )}
    </div>
  );
};
const EditListContain: React.FC<{
  data: { title: string };
  setData: (value: string) => void;
  index: number;
  deleteHandler: () => void;
  customStyleModal: CustomStyle;
}> = ({ data, setData, index, deleteHandler, customStyleModal }) => {
  const [listEdit, setListEdit] = useState(false);
  const [list, setList] = useState(data?.title);

  useEffect(() => {
    setList(data?.title);
  }, [data?.title]);

  const changeHandler = (val: string) => {
    setList(val);
    setData(val);
  };

  const [deleteButtonShow, setDeleteButtonShow] = useState(false);

  return (
    <div
      className="w-full h-full relative   hover:bg-[#FFFFEB] bg-[#CCE1E2]  px-[8px] py-[15px] border-b-[1px] border-[#FFFFEB]"
      onMouseEnter={() => {
        setDeleteButtonShow(true);
      }}
      onMouseLeave={() => {
        setDeleteButtonShow(false);
      }}
    >
      {deleteButtonShow && (
        <button
          className="absolute right-1 top-4  w-5 h-5  "
          onClick={deleteHandler}
        >
          <img src={deleteIcon} alt="delect icon" />
        </button>
      )}
      <div className="flex w-full">
        {customStyleModal?.["List Item"]?.["Show Numbers"] && (
          <div className="text-[#016A70] text-[15px] pr-[20px]">
            {index + 1}
          </div>
        )}
        {customStyleModal?.["List Item"]?.["Show Bullets"] && (
          <div className="pr-[20px] flex items-center h-[22px]">
            <div className="bg-[#016A70] w-[12px] h-[12px]"></div>
          </div>
        )}

        <div
          className={`flex text-[15px] flex-1 break-words overflow-x-hidden flex-wrap ${
            customStyleModal?.["List Item"]?.["Bold Items"]
              ? "font-bold"
              : "font-normal"
          }`}
        >
          {listEdit ? (
            <input
              value={list}
              className="border-0 outline-none w-full bg-transparent"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setListEdit(false);
                }
              }}
              onBlur={() => setListEdit(false)}
              autoFocus
              onChange={(e) => changeHandler(e.target.value)}
            />
          ) : (
            <h1
              className="w-full text-[15px]"
              onClick={() => setListEdit(true)}
            >
              {list || ""}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export { SideBarForBulletAndNumberModal, ListContainerForBulletAndNumberModal };
