import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { DrawerProps } from "antd";
import LocationTableColumn from "./../../utils/tableColumns/LocationTableColumn.json";
import LocationDetailDrawer from "./LocationDetailDrawer";
import useToggle from "../../hooks/useToggle";

interface DataType {
  key: React.Key;
  name: string;
  address: string;
  radius: number;
}

const dataValue: DataType[] = [
  {
    key: "1",
    name: "Aly",
    address: "karachi",
    radius: 5000,
  },
];

const rowSelection = {};

const LocationTable: React.FC = () => {
  const [open, toggle] = useToggle();
  const [, setSelectedRowKey] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState([]);

  const handleRowClick = (record: any) => {
    setSelectedRowKey(record);
    toggle();
  };

  useEffect(() => {
    if (dataValue) {
      const data: any = dataValue?.map((item, i) => {
        return {
          key: i,
          name: item.name,
          address: item.address,
          radius: item.radius,
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, []);
  return (
    <>
      <div className="people-page">
        <LocationDetailDrawer open={open} onClose={toggle} />
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{ x: true }}
          columns={LocationTableColumn}
          dataSource={dataSource}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
      </div>
    </>
  );
};

export default LocationTable;
