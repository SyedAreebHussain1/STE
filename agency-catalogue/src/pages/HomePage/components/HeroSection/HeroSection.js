import React from "react";
import { Carousel } from "antd";
import Container from "../../../../components/Container";
import HeroImage from "./../../../../assets/images/hero-image.png";

const contentStyle = {
  margin: 0,
  height: "605px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HeroSection = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Container>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <img src={HeroImage} alt="" />
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default HeroSection;
