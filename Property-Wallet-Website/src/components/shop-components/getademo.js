import React, { useEffect, useState } from "react";
import Navbar from "../global-components/navbar-v2";
import PageHeader from "../global-components/page-header";
import ContactInfo from "../section-components/contact-info";
import ContactForm from "../section-components/contact-form";
import Map from "../section-components/map";

import Footer from "../global-components/footer";
import MoreServices from "./more-services";
import MoreVideos from "./more-videos";
import MoreVideoV2 from "./more-videosV2";
import NavbarNewTwo from "../global-components/NavbarNewTwo";
import NavbarSand from "../global-components/NavbarSand";

const GetAdemo = (props) => {
  const [title, setTitle] = useState("How To Use | Property Wallet");
  useEffect(() => {
    if (props.location.pathname == "/how-to-use") {
      setTitle("How To Use | Property Wallet")
    } else {
      setTitle("How To Use | Property Wallet")
    }
    // console.log(props.location.pathname)
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      {/* <Navbar /> */}
      {/* <NavbarNewTwo /> */}
      <NavbarSand />

      <PageHeader
        headertitle="How to Use"
        subheader="How to Use"
        content="Learn all the aspects of using our app including how to download, signup and register on Property Wallet."
      />
      {/* <ContactForm title="Get a demo" /> */}
      {/* <MoreVideos /> */}
      <MoreVideoV2 />
      {/* <ContactInfo /> */}

      {/* <Map /> */}
      {/* <CallToActionV1 /> */}
      <Footer />
    </div>
  );
};

export default GetAdemo;
