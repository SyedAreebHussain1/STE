import React from "react";
import Container from "../../../../components/Container";
import Button from "../../../../components/Buttons/Button";
import QuoteIcon from "./../../../../assets/images/testimonial-quote.png";
import { Rate } from "antd";

const TestimonialsSection = () => {
  return (
    <div className="my-[11.938rem]">
      <Container>
        <div className="flex justify-between items-center  mb-[3rem] flex-col lg:flex-row">
          <div>
            <img src={QuoteIcon} alt="" />
            <h4 className="text-[#6C47FF] text-base mt-3 mb-[0.625rem] tracking-[0.2rem]">
              TESTINOMIALS
            </h4>
            <h1 className="text-[#344054] text-[2.5rem] font-semibold">
              What Our Clients Say
            </h1>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row">
            <Button variant={"filled-inverse"} label="Leave a Review" />
            <Button variant={"outlined"} label="See All Reviews" />
          </div>
        </div>
        <div className="flex gap-[2.125rem] justify-center flex-col lg:flex-row">
          <div>
            <div className="my-3">
              <Rate value={3} disabled={true} />
            </div>
            <p className="italic text-[#344054] text-base mb-[1.375rem]">
              “DIGTECH has been a tremendous help in expediting certain
              development efforts. What would have taken us 6 months only took
              them 1.5 months. “
            </p>
            <div>
              <h3 className="text-[#344054] text-2xl font-semibold">John Western</h3>
              <p className="text-[#667085] text-lg">Co-Founder and Ceo @ Logit</p>
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate value={3} disabled={true} />
            </div>
            <p className="italic text-[#344054] text-base mb-[1.375rem]">
              “DIGTECH has been a tremendous help in expediting certain
              development efforts. What would have taken us 6 months only took
              them 1.5 months. “
            </p>
            <div>
              <h3 className="text-[#344054] text-2xl font-semibold">John Western</h3>
              <p className="text-[#667085] text-lg">Co-Founder and Ceo @ Logit</p>
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate value={3} disabled={true} />
            </div>
            <p className="italic text-[#344054] text-base mb-[1.375rem]">
              “DIGTECH has been a tremendous help in expediting certain
              development efforts. What would have taken us 6 months only took
              them 1.5 months. “
            </p>
            <div>
              <h3 className="text-[#344054] text-2xl font-semibold">John Western</h3>
              <p className="text-[#667085] text-lg">Co-Founder and Ceo @ Logit</p>
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate value={3} disabled={true} />
            </div>
            <p className="italic text-[#344054] text-base mb-[1.375rem]">
              “DIGTECH has been a tremendous help in expediting certain
              development efforts. What would have taken us 6 months only took
              them 1.5 months. “
            </p>
            <div>
              <h3 className="text-[#344054] text-2xl font-semibold">John Western</h3>
              <p className="text-[#667085] text-lg">Co-Founder and Ceo @ Logit</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
