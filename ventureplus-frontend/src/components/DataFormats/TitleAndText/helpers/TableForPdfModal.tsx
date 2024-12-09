import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import RoundedButton from "../../../button/RoundedButton";
import { cancelIcon } from "../../../../assets";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  open: boolean;
  close: () => void;
  data: {
    header: string[];
    row: string[][];
  };
  setData: {
    setHeader: (headers: string[]) => void;
    setRow: (rows: string[][]) => void;
  };
  savesetPushObjectHandler: (heading: any, row: any) => void;
}

const TableForPdfModal: React.FC<Props> = ({
  open,
  close,
  data,
  setData,
  savesetPushObjectHandler,
}) => {
  const [row, setRow] = useState<string[][]>([]);
  const [header, setHeader] = useState<string[]>([]);

  useEffect(() => {
    if (data?.row?.length > 0) {
      setRow(data.row.map((innerArray) => [...innerArray]));
    }
    if (data?.header?.length > 0) {
      setHeader([...data.header]);
    }
  }, [data.header, data.row]);

  const addRow = () => {
    const newRow = new Array(
      header?.filter((item: any) => item !== "Bold")?.length
    ).fill("");
    newRow[0] = `Row ${row.length + 1}`;
    setRow([...row, newRow]);
  };

  const addColumn = () => {
    const newHeader = [...header, `Column ${header.length + 1}`];
    setHeader(newHeader);
    const newRows = row.map((r) => [...r, ""]);
    setRow(newRows);
  };

  const deleteColumnHandler = (index: number) => {
    const newHeader = header.filter((_, i) => i !== index);
    const newRows = row.map((r) => r.filter((_, i) => i !== index));
    setHeader(newHeader);
    setRow(newRows);
  };

  const deleteRowHandler = (index: number) => {
    const newRows = row.filter((_, i) => i !== index);
    setRow(newRows);
  };
  function saveHandler() {
    close();
    savesetPushObjectHandler(header, row);
  }

  return (
    <Modal
      title={
        <div className="flex items-center justify-between py-2 pt-4 px-5 text-white border-b-[2px] border-[#016A70]">
          <h1 className="text-[23px]">Edit Element</h1>
          <div onClick={close}>
            <img src={cancelIcon} />
          </div>
        </div>
      }
      centered
      footer={null}
      open={open}
      onCancel={close}
      closeIcon={false}
      maskClosable={false}
      width="100%"
      className="m-0 py-[20px] tableforPdf rounded-xl overflow-hidden"
    >
      <div className="py-5 w-full px-5 overflow-auto custom-scrollbar h-[60vh]">
        <table className="min-w-full border-collapse w-full overflow-x-auto">
          <thead>
            <tr className="border border-strokes p-4 !bg-[#016A70] text-[white]">
              {header
                ?.filter((item: string, index: number) => item !== "Bold")
                ?.map((item: string, index: number) => (
                  <th
                    key={index}
                    className="border border-strokes p-3 cursor-pointer  min-w-60 bg-[#016A70] text-[white]"
                  >
                    <EditColumn
                      title={item}
                      setDataModal={(value) => {
                        const newHeaders = [...header];
                        newHeaders[index] = value;
                        setHeader(newHeaders);
                      }}
                      index={index}
                      deleteButton={true}
                      deleteHandler={() => deleteColumnHandler(index)}
                    />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {row.map((rows: string[], index1: number) => (
              <tr key={index1} className="border border-strokes p-4 ">
                {rows
                  ?.filter(
                    (item: string) => item !== "Bold" && item !== "UnBold"
                  )
                  .map((rowData: string, index2: number) => (
                    <td
                      key={index2}
                      className={`border border-strokes p-3 ${
                        rows.includes("Bold") ? "font-bold" : ""
                      }`}
                    >
                      <EditColumn
                        title={rowData}
                        setDataModal={(value) => {
                          const newRows = [...row];
                          newRows[index1][index2] = value;
                          setRow(newRows);
                        }}
                        index={index2}
                        deleteButton={index2 === 0}
                        deleteHandler={() => deleteRowHandler(index1)}
                      />
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full py-4 flex justify-between px-6">
        <div className="flex gap-2">
          <RoundedButton title="Add Row" onClick={addRow} sm />
          <RoundedButton
            title="Add Column"
            onClick={addColumn}
            disabled={header.length >= 10}
            sm
          />
        </div>
        <RoundedButton
          title="Save"
          sm
          onClick={saveHandler}
          type="primary"
          className="px-[20px]"
        />
      </div>
    </Modal>
  );
};

export default TableForPdfModal;

const EditColumn: React.FC<{
  title: string;
  setDataModal: (value: string) => void;
  index: number;
  deleteButton?: boolean;
  deleteHandler?: () => void;
}> = ({ title, setDataModal, index, deleteButton, deleteHandler }) => {
  const [headingEdit, setHeadingEdit] = useState(false);

  const changeHandler = (val: string) => {
    setDataModal(val);
  };

  const [deleteButtonShow, setDeleteButtonShow] = useState(false);

  return (
    <div
      className="w-full h-full relative text-[15px] text-center "
      onMouseEnter={() => {
        deleteButton && setDeleteButtonShow(true);
      }}
      onMouseLeave={() => {
        deleteButton && setDeleteButtonShow(false);
      }}
    >
      {deleteButtonShow && deleteButton && (
        <button
          className="absolute left-1 top-0 w-5 h-5  text-white text-red-500"
          onClick={deleteHandler}
        >
          <MdDeleteOutline className="w-5 h-5" />
        </button>
      )}
      {headingEdit ? (
        <input
          value={title}
          className="border-0  w-full bg-transparent text-center"
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
        <h1 className="w-full min-h-6 " onClick={() => setHeadingEdit(true)}>
          {title || ""}
        </h1>
      )}
    </div>
  );
};
