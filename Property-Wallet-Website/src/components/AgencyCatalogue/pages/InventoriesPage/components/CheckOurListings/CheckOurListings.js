import React from "react";
import InventoriesBg from "./../../../../assets/images/inventories-bg.png";
import Container from "../../../../components/Container";

const CheckOurListings = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[2.5rem]">
        <div>
          <h2 className="text-[#344054] mb-1 text-[2.5rem] text-center md:!text-left font-semibold">
            Check our Inventories
          </h2>
          <p className="text-[#667085] font-medium text-xl text-center md:!text-left">
            Best Real Estate Agency for your need
          </p>
        </div>
        <img src={InventoriesBg} alt="" />
      </div>
    </Container>
  );
};

export default CheckOurListings;
