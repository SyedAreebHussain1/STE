import { Button } from "antd";
import SectionTitle from "../SectionTitle";

type Props = {};

const HelloAndHolidays = (props: Props) => {
  return (
    <div className="flex gap-[2.5rem] flex-wrap">
      <div className="p-6 bg-white rounded-[.5rem] shadow-sm flex-1">
        <h2 className="text-[1.75rem] font-bold mb-[.625rem]">Hello Aman</h2>
        <p className="text-[rgba(0,0,0,.87)] font-base">Here's what's happening at <br />Property Wallet</p>
      </div>
      <div className="p-6 bg-white rounded-[.5rem] shadow-sm flex-1">
        <SectionTitle title={'UPCOMING HOLIDAYS'} />
        <div className="flex flex-col gap-4">
            <Holiday month="MAR" day={11} event="Ramazan Bank Holiday" />
            <Holiday month="MAR" day={11} event="Ramazan Bank Holiday" />
            <Holiday month="MAR" day={11} event="Ramazan Bank Holiday" />
        </div>
      </div>
    </div>
  );
};

export default HelloAndHolidays;

function Holiday({ day, month, event }: { day: number, month: string, event: string }){
    return (
        <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center flex-col">
                <span className="text-[.6875rem] font-bold">{month}</span>
                <span className="text-base font-bold">{day}</span>
            </div>
            <div className="w-[1px] h-[50px] bg-primary" />
            <p className="text-base">{event}</p>
        </div>
    )
}