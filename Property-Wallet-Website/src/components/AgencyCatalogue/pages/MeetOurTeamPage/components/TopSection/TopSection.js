import React from "react";
import Container from "../../../../components/Container";
import TeamBg from './../../../../assets/images/teams-bg.svg'

const TopSection = () => {
  return (
    <div className="pb-[5.813rem] pt-[3.125rem]">
      <Container className="relative">
        <img src={TeamBg} alt="" className="absolute left-0 top-0" />
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="max-w-[860.17px] text-[#344054] text-[2.5rem] leading-[3.844rem] font-semibold text-center">
            Meet our Team
          </h2>
          <p className="max-w-[765px] text-[#667085] text-xl font-medium leading-[2.044rem] text-center">
            Discover your perfect home with us! As your trusted real estate
            partner, we specialize in turning dreams into addresses.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopSection;
