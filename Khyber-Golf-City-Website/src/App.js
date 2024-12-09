import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";
import {
  // BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Amentities from "./components/amentities/Amentities";
import Myfooter from "./components/footer/MyFooter";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-modal-video/scss/modal-video.scss";
import "./css/styles.css";
// import "../node_modules/react-modal-video/scss/modal-video.scss";
import { Partners } from "./components/partners/Partners";
import Peshawar from "./components/Peshawar/Peshawar";
import Home from "./components/home/Home";
import Projectfacilities from "./components/projectFacilities/Projectfacilities";
import About from "./components/about/about";
import SpecialProject from "./components/specialProject/SpecialProject";
import ProjectLocation from "./components/location/Location";
import { useTranslation } from "react-i18next";
import CommunityCenters from "./components/amentities/pages/CommunityCenters";
import { detect } from "detect-browser";
import Restaurants from "./components/amentities/pages/Restaurants";
import Shoppings from "./components/amentities/pages/Shoppings";
import GymFacilities from "./components/amentities/pages/GymFacilities";
import Hospitals from "./components/amentities/pages/Hospitals";
import Mosques from "./components/amentities/pages/Mosques";
import RoadNetworks from "./components/amentities/pages/RoadNetworks";
import Schools from "./components/amentities/pages/Schools";
import Parks from "./components/amentities/pages/Parks";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import Commercials from "./components/commercial/commercials";
import Builtup from "./components/builtupproperties/builtup";
import FurtherDetails from "./components/faq/FurtherDetails";
import socketIOClient from "socket.io-client";
import Feedback from "./components/feedback/feedback";
import Privacy from "./components/privacypolicy/privacypolicy";
import BallotinDetail from "./components/balloting/ballotingdetail";
import ProjectfacilitiesV2 from "./components/projectFacilities/ProjectfacilitiesV2";
import Luxury from "./components/76elites/luxury";

const ENDPOINT = "http://localhost:5000";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { i18n, t } = useTranslation();
  const data = useSelector((state) => state.language.lang);
  const brow = detect();
  useEffect(() => {
    // console.log("BORDSWES",brow.name)
    i18n.changeLanguage(data);
    // console.log("LANGUAGEDATA", data);
    // console.log("FACEBOOK PIXEL TESTING 4");
  }, []);
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   console.log("SOKCET", socket);
  // }, []);
  return (
    <HashRouter  onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />
      {/* {(!window.location.pathname.includes("/admin/dashboard") &&
        !window.location.pathname.includes("/user/dashboard")) &&
        !window.location.pathname.includes("/reset/:rstoken") 
      
      &&    <header className="header-bg">
      <Navbar />
      <Header />
    </header>
    } */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/Project-facilities" component={ProjectfacilitiesV2} />
        <Route path="/special-projects" component={SpecialProject} />
        <Route path="/location" component={ProjectLocation} />
        
        <Route path="/comunitycenter" component={CommunityCenters} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/shoppings" component={Shoppings} />
        <Route path="/gym" component={GymFacilities} />
        <Route path="/hospitals" component={Hospitals} />
        <Route path="/mosques" component={Mosques} />
        <Route path="/roads" component={RoadNetworks} />
        <Route path="/schools" component={Schools} />
        <Route path="/parks" component={Parks} />
        <Route path="/infrastructure" component={Infrastructure} />
        <Route path="/builtup" component={Builtup} />
        <Route path="/commercials" component={Commercials} />
        <Route path="/furtherdetails" component={FurtherDetails} />
        <Route path="/contact" component={Feedback} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/balloting" component={BallotinDetail} />
        <Route path="/76elites" component={Luxury} />
      </Switch>
      {!window.location.pathname.includes("/admin/dashboard") &&
        !window.location.pathname.includes("/user/dashboard") &&
        !window.location.pathname.includes("/reset/:rstoken") && <Myfooter />}
    </HashRouter>
    // <>
    //   <header className="header-bg">
    //     <Navbar />
    //     <Header />
    //   </header>
    //   <Subscribe />
    //   <Partners />
    //   <Amentities />
    //   {/* <Features data-aos="fade-up" /> */}
    //   {/* <Download /> */}
    //   <Peshawar />
    //   <Faq />
    //   <Myfooter />
    //   {/* <Footer /> */}
    // </>
  );
}

export default App;
