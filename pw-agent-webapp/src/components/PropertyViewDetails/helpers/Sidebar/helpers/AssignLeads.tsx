import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type Props = { data: any };

const AssignLeads = ({ data }: Props) => {
  function getInitials(name: any) {
    const words = name?.split(" ");
    const firstTwoWords = words?.slice(0, 2);
    const initials = firstTwoWords?.map((word: any) => word?.substring(0, 1));
    return initials?.join("");
  }
  return (
    <div className="border border-borderColor rounded-xl p-[1rem]">
      <div className="mb-4 flex justify-between items-center">
        <h4 className=" text-[#1D2939] text-base font-medium">Assign Lead</h4>
        <Button
          type="primary"
          className="text-primary border-none shadow-none text-base font-medium"
        >
          See All
        </Button>
      </div>

      <div className="flex flex-col">
        {data?.map((item: any, i: any) => (
          <LeadItem
            key={i}
            img={getInitials(item?.lead?.client?.name).toUpperCase()}
            title={item?.lead?.client?.name}
            leadId={item?.leadId}
          />
        ))}
      </div>
    </div>
  );
};

function LeadItem(props: { img: string; title: string; leadId: any }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-4 border-b border-borderColor ">
      <div className="flex items-center gap-[.375rem]">
        <div className="relative w-[35px] h-[35px] rounded-full bg-[#EFE3FF] text-black text-center font-medium pt-[6px] ">
          {props?.img}
        </div>
        <h5 className="text-[#475467] text-base font-medium">{props.title}</h5>
      </div>
      <Button
        type="primary"
        className="text-primary border-none shadow-none text-base font-medium"
        onClick={() => {
          navigate(`/lead-management/detail/${props.leadId}`);
        }}
      >
        <span className="underline">Contact</span>
      </Button>
    </div>
  );
}

export default AssignLeads;
