import React, { useEffect, useState } from "react";
import { Navbar, Header, Subscribe, Faq } from "../../components";
import Amentities from "../amentities/Amentities";
import Balloting from "../balloting/balloting";
import Card from "../cards/card";
import Peshawarcard from "../cards/peshawarcard";
import ProjectFeatures from "../features/ProjectFeature";
import Topbar from "../header/Topbar";
import { Partners } from "../partners/Partners";
import Peshawar from "../Peshawar/Peshawar";
import Slider from "../Slider/Slider";
// import videoBg from "../assets/videoBg.mp4";
import Videobg from "../bgvideo/bgvideo";

const Home = (props) => {
  const [title, setTitle] = useState("Khyber Golf City");
  // console.log(props)
  useEffect(() => {
    window.fbq("track", "HomePage");
  }, []);


  useEffect(() => {
    if (props.location.pathname == "/") {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    } else {
      setTitle("Khyber Golf City | Modern Lifestyle Housing Project")
    }
  }, []);
  useEffect(() => {
    document.title = title;
  }, [title]);





  return (
    <>
      <Navbar />
      <Videobg />
      <Peshawar />
      <Subscribe />
      <ProjectFeatures />
      {/* <Amentities /> */}
      <Balloting />
      {/* <Faq /> */}
      <Partners />
    </>
  );
};
export default Home;
