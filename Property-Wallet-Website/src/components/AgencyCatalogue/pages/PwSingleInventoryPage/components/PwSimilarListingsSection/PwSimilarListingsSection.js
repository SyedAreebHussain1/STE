import React from "react";
import Container from "../../../../components/Container";
import Slider from "../../../../components/Slider/Slider";
import SliderItem from "../../../../components/Slider/SliderItem";
import ListingsCard from "../../../../components/Listings/ListingsCard";

const PwSimilarListingsSection = () => {
  return (
    <div className="mb-14">
      <Container>
        <div className="">
          <h3 className="text-[#191F2B] text-2xl font-semibold mb-4">
            Similar Listings
          </h3>
        </div>
      </Container>
      <Slider gap={47}>
        <SliderItem width={400}>
          <ListingsCard
            image={"https://placehold.co/378x280"}
            price={"PKR 200,000"}
            title={"Central Park Tower Pent House"}
            location={"Gulshan-e-Iqbal Block 10, Karachi"}
            bedroom={2}
            baths={2}
            size={`120 Sq. Ft`}
          />
        </SliderItem>
        <SliderItem width={400}>
          <ListingsCard
            image={"https://placehold.co/378x280"}
            price={"PKR 200,000"}
            title={"Central Park Tower Pent House"}
            location={"Gulshan-e-Iqbal Block 10, Karachi"}
            bedroom={2}
            baths={2}
            size={`120 Sq. Ft`}
          />
        </SliderItem>
        <SliderItem width={400}>
          <ListingsCard
            image={"https://placehold.co/378x280"}
            price={"PKR 200,000"}
            title={"Central Park Tower Pent House"}
            location={"Gulshan-e-Iqbal Block 10, Karachi"}
            bedroom={2}
            baths={2}
            size={`120 Sq. Ft`}
          />
        </SliderItem>
        <SliderItem width={400}>
          <ListingsCard
            image={"https://placehold.co/378x280"}
            price={"PKR 200,000"}
            title={"Central Park Tower Pent House"}
            location={"Gulshan-e-Iqbal Block 10, Karachi"}
            bedroom={2}
            baths={2}
            size={`120 Sq. Ft`}
          />
        </SliderItem>
        <SliderItem width={400}>
          <ListingsCard
            image={"https://placehold.co/378x280"}
            price={"PKR 200,000"}
            title={"Central Park Tower Pent House"}
            location={"Gulshan-e-Iqbal Block 10, Karachi"}
            bedroom={2}
            baths={2}
            size={`120 Sq. Ft`}
          />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default PwSimilarListingsSection;
