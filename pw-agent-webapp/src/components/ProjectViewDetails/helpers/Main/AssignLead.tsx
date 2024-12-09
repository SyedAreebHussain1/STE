import { useState } from "react";
import LeadContacts from "./LeadContacts";

type Props = { data: any };

const AssignLead = ({ data }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const troggle = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="mb-10">
      {open && <LeadContacts open={open} onClose={troggle} data={data} />}
      <h4 className="text-[#475467] text-[19.2px] font-medium mb-5">
        Assign Lead
      </h4>
      <div className="cursor-pointer" onClick={troggle}>
        {data.length > 0 ? (
          data.length > 4 ? (
            <div className="relative flex items-center projectAssignLeadClass">
              {data?.slice(0, 4)?.map((item: any, i: any) => (
                <div className="relative w-[18px]" key={i}>
                  <div className="absolute w-[25px] h-[25px] rounded-full bg-[#EFE3FF] text-black text-center  pt-[2px] ">
                    {item?.lead?.client?.name?.substring(0, 1).toUpperCase()}
                  </div>
                </div>
              ))}
              <div className="relative w-[18px]">
                <div className="absolute w-[25px] h-[25px] rounded-full bg-[#80808000] text-black border border-[#EFE3FF] text-center text-[.7rem] font-medium pt-[5px] ">
                  +{data?.length - 4}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center projectAssignLeadClass">
              {data?.map((item: any, i: any) => (
                <div className="relative w-[18px]  " key={i}>
                  <div className="absolute w-[25px] h-[25px] rounded-full bg-[#EFE3FF] text-black text-center  pt-[2px] ">
                    {item?.lead?.client?.name?.substring(0, 1).toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <h1>No lead has been assigned to this inventory.</h1>
        )}
      </div>
    </div>
  );
};

export default AssignLead;
