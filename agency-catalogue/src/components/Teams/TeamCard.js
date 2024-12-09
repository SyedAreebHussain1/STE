import React from "react";
import { Rate } from 'antd';
import Button from "../Buttons/Button";


const TeamCard = ({ image, rating, name, experience, desc }) => {
  return (
    <div
      className="px-[1.625rem] py-6"
      style={{ boxShadow: "2px 8px 29.100000381469727px 2px #C9C9C940" }}
    >
      <div className="flex justify-center py-7">
        <div
          className="rounded-full w-[107px] h-[107px] overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
      <div className="flex justify-center my-3">
        <Rate value={rating} disabled={true} />
      </div>
      <div className="mb-6">
        <h3 className="text-[#344054] text-xl text-center font-bold mb-[0.125rem]">{name}</h3>
        <p className="text-[#667085] text-lg font-medium text-center">{experience}</p>
      </div>
      <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center">{desc}</p>
      <div className="flex justify-center gap-2">
          <Button label={"Book Appointment"} variant={"filled-inverse"} className={'!px-4 !py-3 !text-base font-medium'} />
          <Button label={"Live Chat"} variant={"outlined"} className={'!px-4 !py-3 !text-base font-medium'} />
      </div>
    </div>
  );
};

export default TeamCard;
