import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import RoundedButton from "../../button/RoundedButton";
import { infoMessage } from "../../../utils/message";

type ColType = { title: string; key: string };

interface EditableTableI {
  dataSource: any[];
  setDataSource: React.Dispatch<React.SetStateAction<any[]>>;
  columns: ColType[];
  isColumnEditable?: boolean;
}

// make the table keys unique
const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime()}`;
};

// selfNote:Changing the dataSource will change the columns itself, no need to set it explicitly
const EditableTable = ({
  dataSource,
  setDataSource,
  columns,
  isColumnEditable,
}: EditableTableI) => {
  const [editingCell, setEditingCell] = useState<{
    key: null | string;
    column: null | any;
  }>({ key: null, column: null });
  const [editingHeader, setEditingHeader] = useState<any>(null);

  const handleCellClick = (key: string, column: any) => {
    setEditingCell({ key: null, column: null });
    setEditingCell({ key, column });
  };

  const handleHeaderClick = (columnKey: string) => {
    setEditingHeader(columnKey);
  };

  const handleCellChange = (e: any, colKey?: any) => {
    let { value } = e.target;
    if (!value) return;
    const { key, column } = editingCell;

    if (colKey === "name") {
      setDataSource(
        dataSource.map((item) => {
          return item.key === key ? { ...item, [column]: value } : item;
        })
      );
    } else {
      setDataSource(
        dataSource.map((item) => {
          return item.key === key ? { ...item, [column]: Number(value) } : item;
        })
      );
    }

    setEditingCell({ key: null, column: null });
  };

  const handleHeaderChange = (e: any) => {
    if (e.target.value.toUpperCase() === editingHeader.toUpperCase()) {
      return;
    }

    if (e.target.value.toLowerCase() === "name") {
      infoMessage("This column already exists");
      return;
    }
    let newDataSource = dataSource;
    newDataSource = newDataSource.map((obj) => {
      const { [editingHeader]: value, ...rest } = obj; // Extract the old key value
      return { ...rest, [e.target.value]: value }; // Create new object with new key name
    });

    setDataSource(newDataSource);
  };

  const handleDeleteColumn = (columnKey: string) => {
    if (isColumnEditable) return;
    setDataSource(
      dataSource.map((row) => {
        const { [columnKey]: _, ...rest } = row;
        return rest;
      })
    );
  };

  const handleAddColumn = () => {
    if (columns.length > 10) {
      infoMessage("Maximimum column length has been reached");
      return;
    }
    const key = generateKey(`column`);
    let newDataSource = dataSource;
    newDataSource = newDataSource.map((item) => ({ ...item, [key]: 0 }));

    setDataSource([...newDataSource]);
  };

  const handleDeleteRow = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const handleAddRow = () => {
    if (dataSource.length > 8) {
      infoMessage("Maximimum column length has been reached");
      return;
    }
    const length = (dataSource?.length + 1).toString();
    const key = generateKey(`row${length}`);
    const newDataSource = dataSource;
    let columnData: any = {};
    columns.map((column: ColType) => {
      if (column.key !== "name" && column.key !== "key") {
        columnData[column.key] = 0;
      }
    });

    newDataSource.push({
      key,
      name: `row${length}`,
      ...columnData,
    });
    setDataSource([...newDataSource]);
  };

  const EditableCell = ({ title, editable, children, ...restProps }: any) => {
    return (
      <td className="border border-strokes p-3">
        <div className="w-full">
          {editable ? (
            <input
              defaultValue={children}
              onBlur={(e) => handleCellChange(e, restProps.column.key)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleCellChange(e, restProps.column.key)
              }
              className="border-none rounded focus:outline-none  bg-transparent m-0 p-0 text-center w-full"
              autoFocus
              onKeyPress={(event) => {
                if (restProps.column.key !== "name")
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                  }
              }}
            />
          ) : (
            <div
              className="relative text-center gap-1 bg-pink-100 cursor-pointer"
              onClick={() => {
                handleCellClick(restProps.record.key, restProps.column.key);
              }}
            >
              {children}
              {restProps.column.key === "name" && (
                <button
                  className="absolute top-0 left-0 p-1 text-red-500"
                  onClick={() => handleDeleteRow(restProps.record.key)}
                >
                  <MdDeleteOutline className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </td>
    );
  };

  const editableHeaderCell = (text: string, column: any) => {
    return (
      <>
        {isColumnEditable ? (
          <div className="relative w-full cursor-default whitespace-nowrap">
            {" "}
            {text}
          </div>
        ) : (
          <div className="relative w-full">
            {editingHeader === column.key ? (
              column.key !== "name" ? (
                <input
                  type="text"
                  defaultValue={text}
                  onBlur={(e) => handleHeaderChange(e)}
                  onKeyDown={(e) => e.key === "Enter" && handleHeaderChange(e)}
                  className="w-full  rounded min-w-32 bg-transparent focus:outline-none"
                  autoFocus
                />
              ) : (
                <h1 className="max-w-8 h-full cursor-default whitespace-nowrap">
                  {text}
                </h1>
              )
            ) : (
              <div className="flex items-center justify-between min-w-32">
                {text}
                {column.key !== "name" && (
                  <button
                    className="text-red-500 ml-2"
                    onClick={() => handleDeleteColumn(column.key)}
                  >
                    <MdDeleteOutline className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  const columnsWithEditHeader = columns?.map((col) => ({
    ...col,
    title: editableHeaderCell(col.title, col),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="heading-xs font-medium">Chart Data</h1>
        <div className="p-4 flex gap-2 justify-end">
          {!isColumnEditable && (
            <RoundedButton
              title={"Add Column"}
              xs
              type="primary"
              onClick={handleAddColumn}
            />
          )}
          <RoundedButton
            title={"Add Row"}
            xs
            type="primary"
            onClick={handleAddRow}
          />
        </div>
      </div>
      <div className="w-full h-[200px] overflow-auto custom-scrollbar">
        <table className="min-w-full border-collapse  rounded-md relative z-50">
          <thead>
            <tr className="border border-strokes p-4 ">
              {columnsWithEditHeader.map((col) => (
                <th
                  key={col.key}
                  className="border border-strokes p-3 cursor-pointer bg-gray-100 text-para min-w-32"
                  onClick={() => handleHeaderClick(col.key)}
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" overflow-y-auto">
            {dataSource.map((record) => (
              <tr key={record.key} className="border border-strokes p-4 ">
                {columnsWithEditHeader.map((col) => (
                  <td className="border border-strokes p-3">
                    <div className="w-full">
                      {editingCell.key === record.key &&
                      editingCell.column === col.key ? (
                        <input
                          defaultValue={record[col.key]}
                          onBlur={(e) => handleCellChange(e, col.key)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleCellChange(e, col.key)
                          }
                          className="border-none rounded focus:outline-none  bg-transparent m-0 p-0 text-center w-full"
                          autoFocus
                          onKeyPress={(event) => {
                            if (col.key !== "name")
                              if (!/[0-9,.]/.test(event.key)) {
                                event.preventDefault();
                              }
                          }}
                        />
                      ) : (
                        <div
                          className="relative text-center gap-1 cursor-pointer"
                          onClick={() => {
                            handleCellClick(record.key, col.key);
                          }}
                        >
                          {record[col.key]}
                          {col.key === "name" && (
                            <button
                              className="absolute top-0 left-0 p-1 text-red-500"
                              onClick={() => handleDeleteRow(record.key)}
                            >
                              <MdDeleteOutline className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTable;
