import { Button, Drawer } from "antd";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  data: any;
};

const LeadContacts = ({ open, onClose, data }: Props) => {
  function getInitials(name: any) {
    const words = name?.split(" ");
    const firstTwoWords = words?.slice(0, 2);
    const initials = firstTwoWords?.map((word: any) => word?.substring(0, 1));
    return initials?.join("");
  }

  const navigate = useNavigate();

  return (
    <Drawer
      title={<h2 className="text-[1.25rem] font-bold">Assigned Lead</h2>}
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
          className="border-[0] text-[1rem] flex justify-center items-center shadow-none"
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
        </div>
      }
    >
      <div>
        {data?.map((item: any, i: any) => (
          <div
            className="flex justify-between items-center py-[15px] pl-[10px] mx-[20px] border-b "
            onClick={() =>
              navigate(`/lead-management/detail/${item?.lead?.id}`)
            }
          >
            <div className="gap-3 flex items-center ">
              <div className=" w-[35px] h-[35px] rounded-full bg-[#EFE3FF] text-black text-center font-semibold pt-[6px] ">
                {getInitials(item?.lead?.client?.name).toUpperCase()}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#344054] text-[.9rem] leading-[1rem] font-medium">
                  {item?.lead?.client?.name}
                </h3>
                <span className="text-[#98A2B3] text-[0.75rem]">
                  {" "}
                  {item?.lead?.client?.phone}
                </span>
              </div>
            </div>
            <div className="cursor-pointer">
              <MdDeleteOutline fontSize={20} />
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default LeadContacts;
