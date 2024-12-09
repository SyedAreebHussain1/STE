import React, { useEffect, useState } from "react";
import { ConfigProvider, Modal, Popover, Table } from "antd";
import { IoCloseOutline, IoSettingsOutline } from "react-icons/io5";
import moment, { MomentInput } from "moment";

interface props {
  troggle: () => void;
  open: boolean;
  type: string;
}

interface DataType {
  key: React.Key;
  timestamp: MomentInput;
  action: string;
  by: string;
  description: string;
  change: string;
}
const dataValue: DataType[] = [
  {
    key: "1",
    timestamp: "2023-09-04T05:56:28.382Z",
    action: "Policy Compliance",
    by: "Operating system",
    description: "Member was added to time off policy",
    change: "0",
  },
  {
    key: "2",
    timestamp: "2023-09-04T05:56:28.382Z",
    action: "Policy Compliance",
    by: "Operating system",
    description: "Member was added to time off policy",
    change: "0",
  },
];
const LeaveBalanceHistoryModal = ({ troggle, open, type }: props) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (dataValue) {
      const data: any = dataValue?.map((item) => {
        return {
          key: item.key,

          timestamp: (
            <h2 className="font-semibold">
              {moment(item?.timestamp).format("MMM D YYYY, h:mm a")}
            </h2>
          ),

          action: (
            <span className="text-[black] text-[.8rem] tracking-tighter leading-4">
              {item.action}
            </span>
          ),
          by: (
            <div className="flex items-center text-[#00000099] gap-1">
              <IoSettingsOutline className="text-[1rem]" />
              <span className=" text-[.8rem] tracking-tighter leading-5 font-bold">
                {item.by}
              </span>
            </div>
          ),
          description: (
            <>
              {item.description.length > 20 ? (
                <Popover
                  placement="bottom"
                  content={
                    <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5">
                      {item.description}
                    </span>
                  }
                >
                  <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5 ">
                    {item.description.substring(0, 20)}...
                  </span>
                </Popover>
              ) : (
                <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5 ">
                  {item.description}
                </span>
              )}
            </>
          ),
          change: (
            <span className="text-[#00000099] text-[.875rem] tracking-tighter leading-5">
              {item.change}
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
      <Modal
        title={
          <div className="  flex justify-between items-center ">
            <span className="text-[1.5rem] m-[0] p-[0] font-bold">
              Leave Balance History
            </span>
            <button
              className="text-[1.8rem] hover:bg-slate-200 rounded-full font-light p-[5px]"
              onClick={troggle}
            >
              <IoCloseOutline />
            </button>
          </div>
        }
        closeIcon={false}
        open={open}
        width={1000}
        onCancel={troggle}
        cancelButtonProps={{ disabled: true }}
        footer={null}
      >
        <div className="flex gap-3 mt-6">
          <div>
            <span className="text-[#00000099] text-[.75rem]  leading-3">
              Member:
            </span>
            <div className={` flex items-center gap-1 py-[5px] `}>
              <div className="w-[30px] h-[30px] rounded-full bg-black" />
              <h4 className="text-[.8rem] font-bold text-black">Aman Khan</h4>
            </div>
          </div>
          <div>
            <span className="text-[#00000099] text-[.75rem]  leading-3">
              Time Off Policy:
            </span>
            <div className={` flex items-center gap-1 my-[5px] h-[30px]`}>
              <h4 className="text-[.8rem] font-bold text-black  text-center">
                {type} Leave
              </h4>
            </div>
          </div>
          <div>
            <span className="text-[#00000099] text-[.75rem]  leading-3">
              Units:
            </span>
            <div className={` flex items-center gap-1 my-[5px] h-[30px]`}>
              <h4 className="text-[.8rem] font-bold text-black  text-center">
                Days
              </h4>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="mt-7 overflow-x-auto">
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  borderColor: "#D0D2D8",
                  colorBgContainer: "transparent",
                  rowHoverBg: "transparent",
                  headerBg: "transparent",
                  headerColor: "#4d4d4d",
                },
              },
            }}
          >
            <Table
              columns={[
                {
                  title: "Timestamp",
                  dataIndex: "timestamp",
                },
                {
                  title: "Action",
                  dataIndex: "action",
                  width: 70,
                },

                {
                  title: "By",
                  dataIndex: "by",
                },
                {
                  title: "Description",
                  dataIndex: "description",
                },
                {
                  title: "Change",
                  dataIndex: "change",
                },
              ]}
              dataSource={dataSource}
            />
          </ConfigProvider>
        </div>
      </Modal>
    </>
  );
};

export default LeaveBalanceHistoryModal;
