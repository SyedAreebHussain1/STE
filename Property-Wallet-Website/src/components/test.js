import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import AboutV4 from "./section-components/about-v4";
import Features from "./section-components/features-v1";
import Team from "./section-components/team-v1";
import Testimonial from "./section-components/testimonial-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import { OurEthics } from "./section-components/our-ethics";

const TestComponent = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Test"
        content="Our mission is to provide complete convenience to all estate dealers through a safe, fast and reliable service that you can access anywhere, anytime,"
      />
     
    </div>
  );
};

export default TestComponent;
