import React, { useEffect, useState } from "react";
import "./TableForPdf.css";
import TableForPdfModal from "./TableForPdfModal";
import { isNumber } from "@ant-design/plots/es/core/utils";

interface data {
  id: number;
  type: string;
  data: { table: any[] };
}

interface Props {
  apiData: data;
  setPushObject: React.Dispatch<React.SetStateAction<data>>;
  open: boolean;
  toggle: () => void;
  index: number;
}

const table = [
  {
    Product: "Digital Books",
    "Retail Price": "₨19000",
    "Wholesale Price": "₨17000",
    "Cost Price": "₨15000",
    Subscription: "₨500/month with ₨50 discount",
  },
  {
    Product: "Printed Books",
    "Retail Price": "₨32000",
    "Wholesale Price": "₨30000",
    "Cost Price": "₨25000",
    Subscription: "₨1000/month with ₨100 discount",
  },
];

const TableForPdf = ({
  apiData,
  setPushObject,
  open,
  toggle,
  index,
}: Props) => {
  const [tableHeader, setTableHeader] = useState<any[]>([]);
  const [tableRowData, setTableRowData] = useState<any[]>([]);

  useEffect(() => {
    if (apiData?.data?.table?.length > 0) {
      setTableHeader(Object.keys(apiData?.data?.table[0]));
      setTableRowData(
        apiData?.data?.table?.map((item: any) => {
          const rowData = [];
          for (const key in item) {
            if (key === "Bold") {
              rowData.push(
                item[key] == "false" || !item[key] ? "UnBold" : "Bold"
              );
            } else {
              rowData.push(item[key]);
            }
          }
          return rowData;
        })
      );
    } else {
      setTableHeader(Object.keys(table[0]));
      setTableRowData(table.map((item) => Object.values(item)));
    }
  }, [apiData?.data?.table]);

  const savesetPushObjectHandler = (modalheader: any, modalRow: any) => {
    // console.log(modalheader, modalRow)
    const convertedTable = modalRow.map((row: any) => {
      const obj: { [key: string]: string } = {};
      modalheader.forEach((header: any, index: any) => {
        if (row[index] == "Bold") {
          obj[header] = "true";
        } else if (row[index] == "UnBold") {
          obj[header] = "false";
        } else {
          obj[header] = row[index];
        }
      });
      return obj;
    });

    setPushObject((pre: any) =>
      pre.map((item: any, ind: number) =>
        item?.map((innerItem: any, i: number) => {
          return ind == index && innerItem?.id == apiData?.id
            ? { ...innerItem, data: { table: convertedTable } }
            : innerItem;
        })
      )
    );
  };

  return (
    <div>
      {open && (
        <TableForPdfModal
          open={open}
          close={toggle}
          data={{ header: tableHeader, row: tableRowData }}
          setData={{ setHeader: setTableHeader, setRow: setTableRowData }}
          savesetPushObjectHandler={savesetPushObjectHandler}
        />
      )}
      <table className="customtable h-max mb-4">
        <tbody>
          <tr
            style={{ backgroundColor: "#016A70" }}
            className="!bg-[#016A70] text-[white] "
          >
            {tableHeader
              ?.filter((item: string, index: number) => item !== "Bold")
              ?.map((item, index) => (
                <th
                  key={index}
                  className="text-left px-[8px] py-[5px] font-semibold bg-[#016A70]"
                >
                  {item}
                </th>
              ))}
          </tr>
          {tableRowData?.map((rows, index) => (
            <tr key={index}>
              {rows
                ?.filter((item: string) => item !== "Bold" && item !== "UnBold")
                ?.map((rowData: any, ind: number) => (
                  <td
                    key={"table" + index + ind}
                    className={`text-left px-[8px] py-[2px] ${
                      rows.includes("Bold") ? "font-semibold" : ""
                    }`}
                  >
                    {isNumber(rowData) ? rowData.toLocaleString() : rowData}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableForPdf;
