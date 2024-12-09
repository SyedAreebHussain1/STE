import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import type { DrawerProps } from "antd";
import peopleTableColumn from "../../utils/tableColumns/peopleTableColumn.json";
import PeopleDrawer from "./PeopleDrawer";

interface DataType {
  key: React.Key;
  member: React.ReactNode;
  email: React.ReactNode;
  group: React.ReactNode;
  lastActive: React.ReactNode;
  name: React.ReactNode;
}

const dataValue: DataType[] = [
  {
    key: "1",
    member: "Member",
    email: "alyshah.vadsaria4@gmail.com",
    name: "Aly",
    group: "-",
    lastActive: "8 days ago",
  },
  {
    key: "2",
    member: "Member",
    email: "sareeb65@gmail.com",
    name: "Areeb",
    group: "-",
    lastActive: "3 days ago",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({}),
};

const PeopleTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>("large");
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState([]);

  const handleRowClick = (record: any) => {
    setSelectedRowKey(record);
    setOpen(true);
  };

  useEffect(() => {
    if (dataValue) {
      const data: any = dataValue?.map((item, i) => {
        return {
          key: i,
          member: (
            <div className="flex items-center">
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://jibble-prod-storage.s3.amazonaws.com/b77ce1f1-4086-4b9e-8cd2-bb2db980212f"
                  alt=""
                />
              </div>
              <div className="p-[10px]">
                <span className="font-bold text-[#000000de]">{item.name}</span>
                <p className="text-[#00000099] text-[.75rem] tracking-tighter leading-5">
                  {item.member}
                </p>
              </div>
            </div>
          ),
          email: (
            <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5">
              {item.email}
            </span>
          ),
          group: (
            <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5">
              {item.group}
            </span>
          ),
          lastActive: (
            <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5">
              {item.lastActive}
            </span>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, []);
  return (
    <>
      {selectedRowKey !== null && (
        <PeopleDrawer
          size={size}
          open={open}
          setOpen={setOpen}
          selectedRowKey={selectedRowKey}
        />
      )}
      <div className="people-page">
        <Divider />
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{ x: true }}
          columns={peopleTableColumn}
          dataSource={dataSource}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      </div>
    </>
  );
};

export default PeopleTable;
