import { useState } from "react";
import { Table } from "antd";
import YearsTabs from "./YearsTabs";
import NoTableData from "./NoTableData";
import AddHolidayDrawer from "./AddHolidayDrawer";

const columns = [
  {
    title: (
      <>
        <YearsTabs />
      </>
    ),
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Date",
    className: "column-money",
    dataIndex: "date",
  },
  {
    title: "Days",
    dataIndex: "days",
  },
];

const HolidaysTables = () => {
  const [addHoliday, setAddHoliday] = useState(false);
  return (
    <>
      {addHoliday && (
        <AddHolidayDrawer open={addHoliday} setOpen={setAddHoliday} />
      )}
      <Table
        columns={columns}
        dataSource={[]}
        scroll={{ x: true }}
        locale={{
          emptyText: (
            <NoTableData
              handleOnClick={setAddHoliday}
              text="No holidays"
              buttonText="Add Holiday"
            />
          ),
        }}
      />
    </>
  );
};
export default HolidaysTables;
