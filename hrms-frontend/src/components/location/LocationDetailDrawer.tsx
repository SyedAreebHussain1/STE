import { Button, Drawer } from "antd";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit, MdArchive, MdGpsFixed } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";

type Props = {
  open: boolean;
  onClose: () => void;
};

const LocationDetailDrawer: React.FC<Props> = ({ open, onClose }: Props) => {
  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">View Location</h2>}
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
      footer={
        <div className="flex justify-end gap-1">
          <Button
            onClick={onClose}
            className="text-primary  font-semibold  border-[0] text-[1rem]"
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold px-4 w-[100px] text-[1rem]  h-[40px]"
            htmlType="submit"
          >
            Save
          </Button>
        </div>
      }
    >
      <div className="px-6 py-2">
        <div className="flex items-center justify-between mb-[.625rem]">
          <h4 className="text-[1.75rem] font-bold">Property Wallet</h4>
          <div className="flex items-center gap-3">
            <button className="flex justify-center items-center bg-[#F2F2F2] w-[32px] h-[32px] rounded-full">
              <MdOutlineEdit size={"20"} color="#424b63" />
            </button>
            <button className="flex justify-center items-center bg-[#F2F2F2] w-[32px] h-[32px] rounded-full">
              <MdArchive size={"20"} color="#424b63" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[.6875rem] text-[#b2b2b2]">
            24.87560269999999,67.08975579999999
          </span>
          <button>
            <MdGpsFixed color="#b2b2b2" />
          </button>
        </div>
        <span>Address</span>
        <div>
          <h4 className="text-[#1a1a1a]">Property Wallet</h4>
          <p>
            Machs, B-6(C Miran Mohammed Shah Rd, Mohammad Ali Society Muhammad
            Ali Chs (Machs), Karachi, Karachi City, Sindh 75350, Pakistan
          </p>
        </div>
        <div className="flex items-center gap-1 mt-6">
          <span>
            <GiSpeedometer color="#b2b2b2" />
          </span>
          <span className="text-sm text-[#b2b2b2]">300 Meters</span>
        </div>
      </div>
    </Drawer>
  );
};

export default LocationDetailDrawer;
