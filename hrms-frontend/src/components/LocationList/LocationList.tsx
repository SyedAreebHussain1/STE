import { Table, TableColumnsType } from "antd";
import { useState } from "react";

interface DataType1 {
  key: "1";
  id: number;
  name: string;
  compensation: string;
  units: string;
  member: string;
  action: any;
}

const LocationList = () => {
  const [dataSource] = useState([]);
  const columns: TableColumnsType<DataType1> = [
    {
      title: "Id",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => Number(a.name) - Number(b.name),
    },
    {
      title: "Compensation",
      dataIndex: "compensation",
      defaultSortOrder: "descend",
      sorter: (a, b) => Number(a.compensation) - Number(b.compensation),
    },
    {
      title: "Units",
      dataIndex: "units",
      defaultSortOrder: "descend",
      sorter: (a, b) => Number(a.units) - Number(b.units),
    },
    {
      title: "Member",
      dataIndex: "member",
      defaultSortOrder: "descend",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  return (
    <div className="px-[30px] mt-[50px]">
      <Table scroll={{ x: true }} columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default LocationList;
