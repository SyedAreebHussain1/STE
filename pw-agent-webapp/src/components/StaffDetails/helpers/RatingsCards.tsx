import { Rate } from "antd";

const RatingsCards = ({ data }: { data: any }) => {
  return (
    <div className=" bg-[#F9FAFB] p-[20px] rounded-xl ">
      <div>
        <Rate disabled value={data?.rateStar} />
      </div>
      <div className="mt-[10px]">
        <p className="text-[#475467]">{data?.comment}</p>
      </div>
      <div className="flex justify-end">
        <div>
          <h2 className="text-[1rem] mt-[10px]">{data?.name}</h2>
          <p className="text-[#344054] text-[1rem]">{data?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsCards;
