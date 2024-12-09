import React from "react";
import { Rate } from "antd";

const TeamAllCard = ({ image, rating, name, experience, desc }) => {
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
        <h3 className="text-[#344054] text-xl text-center font-bold mb-[0.125rem]">
          {name}
        </h3>
        <p className="text-[#667085] text-lg font-medium text-center">
          {experience}
        </p>
      </div>
      <p className="text-[#667085] text-base leading-[1.635rem] font-medium mb-6 text-center">
        {desc}
      </p>
      <div className="flex justify-center gap-2">
        <button
          className={`px-[8px] py-[10px] text-[#fff] bg-[#6C47FF] text-[1rem] rounded-[10px] transition hover:bg-[whitesmoke] hover:text-[#6C47FF] border border-[#6C47FF]`}
        >
          Book Appointment
        </button>
        <button
          className={`px-[8px] py-[10px] border border-[#6C47FF] text-[1rem] text-[#6C47FF] bg-[#fff] rounded-[10px]  transition hover:bg-[whitesmoke]`}
        >
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default TeamAllCard;
