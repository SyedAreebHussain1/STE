import { Divider } from "antd";
import dayjs from "dayjs";
import { IoLogoWhatsapp } from "react-icons/io";

const BookedSlotsCards = ({ data }: { data: any }) => {
  return (
    <div className=" border border-[#F0F1F3]  p-[20px] rounded-xl">
      <div className="flex justify-between">
        <div>
          <h2 className="text-[1rem]">{data?.name}</h2>
          <p className="text-[#344054] text-[1rem]">{data?.phone}</p>
        </div>

        <div>
          <div className="flex gap-4 items-center  w-[100%]">
            <div className="border-r-[#F0F1F3] border-r-[1px] px-[20px]">
              <IoLogoWhatsapp className="text-[#27A3A3] w-[25px] h-[25px]" />
            </div>
            <div>
              <h3 className="text-[1rem] text-[#27A3A3]">
                {dayjs(data?.meetingStartDateTime)?.format("HH:mm ")}-
                {dayjs(data?.meetingEndDateTime)?.format("HH:mm a")}
              </h3>
              <p className="text-[#667085] text-[1rem]">
                {dayjs(data?.meetingStartDateTime)?.format("dddd, DD MMM")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <h4 className="text-[#1D2939] text-[1rem] font-semibold">
          {data?.meetingSubject}
        </h4>
        <p className="text-[#475467]">{data?.description}</p>
      </div>
    </div>
  );
};

export default BookedSlotsCards;
