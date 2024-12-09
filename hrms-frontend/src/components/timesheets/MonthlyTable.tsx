import { Table, ConfigProvider } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import UsersSearch from "./UsersSearch";

interface DataType {
  name: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  total: string;
}

const data: DataType[] = [];

const MonthlyTable = () => {
  const [columns, setColumns] = useState<TableProps<DataType>["columns"]>([
    {
      title: "-",
      dataIndex: "name",
      key: "name",
      width: 700,
    },
  ]);
  function generateColumns() {
    enum days {
      MONDAY,
      TUESDAY,
      WEDNESDAY,
      THURSDAY,
      FRIDAY,
      SATURDAY,
      SUNDAY,
    }
    const startingDayOfMonth: days = days.THURSDAY;
    const startingDateOfMonth: number = 1;
    const endDateOfMonth: number = 29;
    const columnsForTable: TableProps<DataType>["columns"] = [];
    for (let i: number = startingDateOfMonth - 1; i < endDateOfMonth; i++) {
      const dayToStore: string = days[(startingDayOfMonth + i) % 7];
      columnsForTable[i] = {
        title: <Column title={dayToStore[0]} day={String(i + 1)} />,
        dataIndex: dayToStore.toLowerCase(),
        key: dayToStore.toLowerCase(),
        width: 28,
      };
    }
    columnsForTable.push({
      title: <Column title="Total" />,
      dataIndex: "total",
      key: "total",
    });
    return columnsForTable;
  }

  useEffect(() => {
    setColumns([
      {
        title: <UsersSearch />,
        dataIndex: "name",
        key: "name",
        width: 700,
      },
      ...generateColumns(),
    ]);
  }, []);

  return (
    <ConfigProvider
      theme={{
        inherit: true,
        components: {
          Table: {
            cellPaddingInline: 0,
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 1100 }}
      />
    </ConfigProvider>
  );
};

function Column({ title, day }: { title?: string; day?: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[.75rem]">{title}</span>
      <span className="text-[.75rem]">{day}</span>
    </div>
  );
}

export default MonthlyTable;
