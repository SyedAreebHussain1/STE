import { Button, Drawer, Tabs } from "antd";
import { IoMdClose } from "react-icons/io";
import type { TabsProps } from "antd";
import TimeEntryTab from "./TimeEntryTab";
import HourEntryTab from "./HourEntryTab";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AddTimeEntryDrawer: React.FC<Props> = ({
  open,
  onClose,
}: Props) => {

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Time entry</b>,
      children: <TimeEntryTab onClose={onClose} />,
    },
    // {
    //   key: "2",
    //   label: <b>Hour entry</b>,
    //   children: <HourEntryTab />,
    // },
  ];
  return (
    <Drawer
      title={
        <h2 className="text-[1.25rem] font-bold">Add Manual Time Entry</h2>
      }
      placement="right"
      width={400}
      closable={false}
      onClose={onClose}
      styles={{
        body: {
          padding: 0,
        },
      }}
      open={open}
      extra={
        <Button
          onClick={onClose}
          className="border-[0] text-[1rem] flex justify-center items-center"
        >
          <IoMdClose className="w-[30px] h-[30px]" />
        </Button>
      }
    // footer={
    //   <div className="flex justify-end gap-1">
    //     <Button
    //       onClick={onClose}
    //       className="text-primary  font-semibold  border-[0] text-[1rem]"
    //     >
    //       Cancel
    //     </Button>
    //     <Button
    //       className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold px-4 w-[100px] text-[1rem]  h-[40px]"
    //       htmlType="submit"
    //     >
    //       Save
    //     </Button>
    //   </div>
    // }
    >
      <div className="px-6">
        <div className="flex items-center gap-2 border-b border-borderColor py-6">
          <div className="w-20 h-20 bg-black rounded-full" />
          <div className="flex flex-col">
            <h4 className="font-bold">Aman</h4>
            <span className="text-[#808080] text-[.75rem]">
              Clocking from GMT+5
            </span>
            <span className="text-[#808080] text-[.75rem]">
              Split time: 12:00 am
            </span>
            <span className="text-[#808080] text-[.75rem]">
              Last out 2 days ago
            </span>
          </div>
        </div>
        <Tabs defaultActiveKey="1" items={items} size="large" centered />
      </div>
    </Drawer>
  );
};
