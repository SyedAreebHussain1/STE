import { Button } from "antd";
import UserImg from "./../../../../../assets/user-1.png";

type Props = {};

const AssignLeads = (props: Props) => {
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
        <LeadItem img={UserImg} title="Fatima Ahmad" />
        <LeadItem img={UserImg} title="Fatima Ahmad" />
      </div>
    </div>
  );
};

function LeadItem(props: { img: string; title: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-borderColor ">
      <div className="flex items-center gap-[.375rem]">
        <img src={props.img} alt="" />
        <h5 className="text-[#475467] text-base font-medium">{props.title}</h5>
      </div>
      <Button
        type="primary"
        className="text-primary border-none shadow-none text-base font-medium"
      >
        <span className="underline">Contact</span>
      </Button>
    </div>
  );
}

export default AssignLeads;
