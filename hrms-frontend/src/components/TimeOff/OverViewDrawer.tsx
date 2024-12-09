import { Button, Drawer } from "antd";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import moment from "moment";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
  data: any;
};

export const OverViewDrawer: React.FC<Props> = ({
  open,
  onClose,
  data,
}: Props) => {
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">View Time Off</h2>}
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
    >
      {data?.status == "Rejected" ? (
        <div className="bg-[#c41446] text-white font-semibold  pl-[20px] py-[5px] flex items-center">
          <span className="text-[1.2rem] pr-[5px]">
            <MdCancel />
          </span>
          <p className="text-[.9rem]">{data?.status}</p>
        </div>
      ) : (
        <div className="bg-[#35b435] text-white font-semibold  pl-[20px] py-[5px] flex items-center">
          <span className="text-[1.2rem] pr-[5px]">
            <FaCheckCircle />
          </span>
          <p className="text-[.9rem]">{data?.status}</p>
        </div>
      )}
      <div className="flex items-center  border-[#e0e0e0] border-b-[1px]  h-[100px] pl-[20px] mt-[10px]">
        <div>
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={data?.img}
            alt=""
          />
        </div>
        <div className="p-[10px]">
          <p className="text-[#00000099] font-semibold text-[.75rem] tracking-tighter leading-5">
            {data?.name}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100%] mt-[20px] h-[60px]   ">
        <div className="px-[20px]">
          <LiaSuitcaseSolid className="w-[25px] h-[25px]  " />
        </div>
        <div className="w-[100%] border-[#e0e0e0] border-b-[1px]  h-[30px]">
          <span>Vacation Leave</span>
        </div>
      </div>

      <div className="flex justify-between w-[100%] mt-[20px] ">
        <div className="px-[20px]">
          <CiCalendar className="w-[25px] h-[25px] " />
        </div>
        <div className="w-[100%]  border-[#e0e0e0] border-b-[1px] h-[60px]">
          <span>
            {moment(data?.startDate).format("ddd, DD MMM")} - {""}
            {moment(data?.endDate).format("ddd, DD MMM")}
          </span>
          <h3>{data?.duration}</h3>
        </div>
      </div>
    </Drawer>
  );
};
