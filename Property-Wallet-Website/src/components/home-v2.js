// import Banner from "./section-components/banner-v2";
// import Aboutv3 from "./section-components/about-v3";
// import Video from "./section-components/video-v2";
import Features from "./section-components/features-v1";
// import UpComingProduct from "./section-components/upcoming-product-v1";
// import ProductSlider from "./section-components/product-slider-v2";
// import Availability from "./section-components/availability";
// import Neighbour from "./section-components/neighbour";
// import Cateogory from "./section-components/category-v2";
// import Testimonial from "./section-components/testimonial-v2";
// import BlogSlider from "./blog-components/blog-slider-v1";
// import CallToActionV1 from "./section-components/call-to-action-v1";
// import DownloadApp from "./section-components/download-app";
// import Main from "./carousel/Main";
// import VideoV1 from "./section-components/video-v1";
// import HomeSilder from "./V2/home-slider";
// import Login from "./section-components/login";
// import Team from "./section-components/team-v1";
// import ShopDetails from "./shop-components/shop-details";

import React, { useEffect, useState } from "react";
import Navbar from "./global-components/navbar-v2";
import ApartmentV2 from "./section-components/apartment-v2";
import { useLocation } from "react-router-dom";
import Footer from "./global-components/footer";
import ModalPopup from "./V2/ModalPopup.js";
import Subscribe from "./V2/Homev2/ModalVideo/Subscribe";
import VideoBanner2 from "./V2/videobanner2";
import BottomLineBox from "./V2/BottomLineBoxes";
import ServicesPropertyWal from "./V2/services-property";
import ApartmentV2Crm from "./section-components/apartmentV2Crm";
import ApartmentCustomerVerificationApp from "./section-components/ApartmentCustomerVerificationApp";
import NavbarNew from "./global-components/NavbarNew";
import MainVideoBanner from "./V2/MainVideoBanner";

const Home_V2 = (props) => {
  let location = useLocation();
  const [load, setLoad] = useState(true);
  const [title, setTitle] = useState(
    "Pakistan’s 1st Real Estate App | Property Wallet"
  );
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (props.location.pathname === "/") {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    } else {
      setTitle("Pakistan’s 1st Real Estate App | Property Wallet");
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  const contentArry = [
    {
      title: "Easy to use",
      content:
        "You can easily navigate through our app without being a tech specialist.",
    },
    {
      title: "Free",
      content:
        "Avail all our services free of charge and manage your property business with the utmost ease.",
    },
    {
      title: "24/7 Service",
      content:
        "We’re never offline, hence, you can manage your properties online, anytime, anywhere.",
    },
  ];
  return (
    <>
      <ModalPopup />
      <NavbarNew />
      {/* <Navbar /> */}
      {/* <VideoV1 /> */}
      <MainVideoBanner />
      {/* <VideoBanner2 /> */}
      <BottomLineBox
        locationType={props?.location?.pathname}
        contentArry={contentArry}
        customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"
      />
      {/* <Features customClass="margin-top-fix-1 ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" /> */}
      <Subscribe />
      <div className="para-service container"
        style={{ marginTop: "7%" }}>

        <div className="text-align-center margin-bottom-60px go-top" >
          <div className="text-skyblue bold font-size-L" >

            Streamlining Real Estate with Seamless Efficiency

          </div>
          <div className="font-size-1_8rem fastImpossiblysimple bold text-black">Effortless Real Estate Management with Property Wallet App </div>
        </div>
      </div>
      <ApartmentV2 customClass="margin-top-fix-1" />
      <div className="para-service container"
        style={{ marginTop: "7%" }}>

        <div className="text-align-center margin-bottom-60px go-top" >
          <div className="text-skyblue bold font-size-L" >
            Simplifying Customer Verification with Versatile Solutions
          </div>
          <div className="font-size-1_8rem fastImpossiblysimple bold text-black">Streamlined Customer Verification with Property Wallet Customer Verification App</div>
        </div>
      </div>
      {/* <ApartmentCustomerVerificationApp customClass="margin-top-fix-1" /> */}
      <div className="para-service container"
        style={{ marginTop: "7%" }}>
        <div className="text-align-center margin-bottom-60px go-top" >
          <div className="text-skyblue bold font-size-L">
            Property wallet CRM
          </div>
          <div className="font-size-1_8rem fastImpossiblysimple bold text-black">In the above example, the navigate function from the useNavigate hook is</div>
        </div>
      </div>
      {/* <ApartmentV2Crm customClass="margin-top-fix-1" /> */}
      <Footer />

      {/* <Main /> */}
      {/* <HomeSilder /> */}
      {/* <DownloadApp customClass="margin-top-fix-2" /> */}
      {/* <ProductSlider /> */}
      {/* <Availability /> */}
      {/* <Neighbour /> */}
      {/* <Cateogory /> */}
      {/* <Team /> */}
      {/* <BlogSlider /> */}
      {/* <Testimonial /> */}
      {/* <CallToActionV1 /> */}
      {/* <Login /> */}
      {/* <ShopDetails/> */}
      {/* <UpComingProduct /> */}
      {/* <Banner /> */}
      {/* <Main /> */}
      {/* <Aboutv3 /> */}
      {/* <Video /> */}
    </>
  );
};

export default Home_V2;
