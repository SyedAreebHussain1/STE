import React,{useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import "./Main.css";
import img from "../images/1500.png";
import img1 from "../images/15001.png";
import img2 from "../images/15002.png";
import img3 from "../images/15003.png";
import appleImg from "../images/apple.png";
import googleImg from "../images/google.png";
import mobileleft from "../images/bykea.png";



// 
import HomeScreen from "../images/mobile-scroll-screeen/1.jpg"
import dashboard from "../images/mobile-scroll-screeen/Dashboard.jpg"
import inventry from "../images/mobile-scroll-screeen/Inventory.jpg"
import staff from "../images/mobile-scroll-screeen/Staff.jpg"
import commission from "../images/mobile-scroll-screeen/Commission.jpg"
import report from "../images/mobile-scroll-screeen/Report.jpg"
import digitalTools from "../images/mobile-scroll-screeen/tools.jpg"
import saleTarget from "../images/mobile-scroll-screeen/Target.jpg"


import AOS from "aos";
import "aos/dist/aos.css";
// 
const Main = () => {
  // zaman
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen={HomeScreen} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={dashboard} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={inventry} />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={staff} />,
    },{
      key: uuidv4(),
      content: <Card imagen={commission} />,
    },{
      key: uuidv4(),
      content: <Card imagen={report} />,
    },{
      key: uuidv4(),
      content: <Card imagen={digitalTools} />,
    },{
      key: uuidv4(),
      content: <Card imagen={saleTarget} />,
    }
  ];

  // let cards = [
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={img} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={img1} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={img2} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={img3} />,
  //   },
  // ];
  return (
    <div className="main_carousel_div">
    <div
      className="mobile_show"
      style={{
        display: "none",
        marginLeft: "5%",
        marginTop: "5%",
        width: "100%",
      }}
    >
      <h5 style={{ color: "grey" }}>Why Choose Property Wallet?</h5>
      <h3 style={{ color: "black" }}>We Are Reliable</h3>
      <p>
        All your personal and business information is secure with us and no
        one else will be able to access it without your consent.
      </p>
      {/* <br /> */}
      <h3 style={{ color: "black" }}>We Encourage Teamwork</h3>
      <p>
        We believe big things can be achieved through collaboration and
        cooperation and aim to facilitate businesses through better
        communication within teams.
      </p>
      <h3 style={{ color: "black" }}>We Are Transparent</h3>
      <p>
        We won’t keep you in the dark. We choose to be transparent in our
        processes and openly communicate any changes that may arise.
      </p>
      <div
        className="stores_icon"
        style={{
          marginTop: "3%",
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        <div>
          <a
            // href="https://play.google.com/store/apps/details?id=org.zam.automark"
            target="_blank"
          >
            <img
              src={appleImg}
              alt=""
              style={{ width: "180px", height: "50px" }}
            />
          </a>
        </div>
        <div>
          <a
            // href="https://play.google.com/store/apps/details?id=org.zam.automark"
            target="_blank"
          >
            <img
              src={googleImg}
              alt=""
              style={{
                width: "180px",
                marginLeft: "10%",
                height: "50px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
    <div className="main">
      <div
        className="desktop_show"
        style={{ width: "50%", marginLeft: "8%", marginTop: "3%" }}
      >
        <h5 style={{ color: "grey" }}>Why Choose Property Wallet?</h5>
        <h3 style={{ color: "black" }}>We Are Reliable</h3>
        <p>
          All your personal and business information is secure with us and no
          one else will be able to access it without your consent.
        </p>
        {/* <br /> */}
        <h3 style={{ color: "black" }}>We Encourage Teamwork</h3>
        <p>
          We believe big things can be achieved through collaboration and
          cooperation and aim to facilitate businesses through better
          communication within teams.
        </p>
        <h3 style={{ color: "black" }}>We Are Transparent</h3>
        <p>
          We won’t keep you in the dark. We choose to be transparent in our
          processes and openly communicate any changes that may arise.
        </p>
        <div
          style={{
            marginTop: "3%",
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          <div>
            <a
              // href="https://play.google.com/store/apps/details?id=org.zam.automark"
              target="_blank"
            >
              <img
                src={appleImg}
                alt=""
                style={{ width: "180px", height: "50px" }}
              />
            </a>
          </div>
          <div>
            <a
              // href="https://play.google.com/store/apps/details?id=org.zam.automark"
              target="_blank"
            >
              <img
                src={googleImg}
                alt=""
                style={{
                  width: "180px",
                  marginLeft: "10%",
                  height: "50px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <Carousel
        cards={cards}
        height="600px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  </div>

// zamanend


// areeb
  // let cards = [
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={HomeScreen} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={dashboard} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={inventry} />,
  //   },
  //   {
  //     key: uuidv4(),
  //     content: <Card imagen={staff} />,
  //   },{
  //     key: uuidv4(),
  //     content: <Card imagen={commission} />,
  //   },{
  //     key: uuidv4(),
  //     content: <Card imagen={report} />,
  //   },{
  //     key: uuidv4(),
  //     content: <Card imagen={digitalTools} />,
  //   },{
  //     key: uuidv4(),
  //     content: <Card imagen={saleTarget} />,
  //   }
  // ];
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, [])
  // return (
  //   <div className="main_carousel_div"  
  //   data-aos="fade-up"
  //   >
  //     <div
  //       className="mobile_show"
  //       style={{
  //         display: "none",
  //         marginLeft: "5%",
  //         marginTop: "5%",
  //         width: "100%",
  //       }}
  //     >
  //       <h5 style={{ color: "grey" }}>Why Choose Property Wallet?</h5>
  //       <h3 style={{ color: "black" }}>We Are Reliable</h3>
  //       <p>
  //         All your personal and business information is secure with us and no
  //         one else will be able to access it without your consent.
  //       </p>
  //       {/* <br /> */}
  //       <h3 style={{ color: "black" }}>We Encourage Teamwork</h3>
  //       <p>
  //         We believe big things can be achieved through collaboration and
  //         cooperation and aim to facilitate businesses through better
  //         communication within teams.
  //       </p>
  //       <h3 style={{ color: "black" }}>We Are Transparent</h3>
  //       <p>
  //         We won’t keep you in the dark. We choose to be transparent in our
  //         processes and openly communicate any changes that may arise.
  //       </p>
  //       <div
  //         className="stores_icon"
  //         style={{
  //           marginTop: "3%",
  //           display: "flex",
  //           flexDirection: "row",
  //           // justifyContent: "space-between",
  //         }}
  //       >
  //         <div>
  //           <a
  //             // href="https://play.google.com/store/apps/details?id=org.zam.automark"
  //             target="_blank"
  //           >
  //             <img
  //               src={appleImg}
  //               alt=""
  //               style={{ width: "180px", height: "50px" }}
  //             />
  //           </a>
  //         </div>
  //         <div>
  //           <a
  //             // href="https://play.google.com/store/apps/details?id=org.zam.automark"
  //             target="_blank"
  //           >
  //             <img
  //               src={googleImg}
  //               alt=""
  //               style={{
  //                 width: "180px",
  //                 marginLeft: "10%",
  //                 height: "50px",
  //               }}
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="main">
  //       <div
  //         className="desktop_show"
  //         style={{ width: "50%", marginLeft: "8%", marginTop: "3%" }}
  //       >
  //         <h5 style={{ color: "grey" }}>Why Choose Property Wallet?</h5>
  //         <h3 style={{ color: "black" }}>We Are Reliable</h3>
  //         <p>
  //           All your personal and business information is secure with us and no
  //           one else will be able to access it without your consent.
  //         </p>
  //         {/* <br /> */}
  //         <h3 style={{ color: "black" }}>We Encourage Teamwork</h3>
  //         <p>
  //           We believe big things can be achieved through collaboration and
  //           cooperation and aim to facilitate businesses through better
  //           communication within teams.
  //         </p>
  //         <h3 style={{ color: "black" }}>We Are Transparent</h3>
  //         <p>
  //           We won’t keep you in the dark. We choose to be transparent in our
  //           processes and openly communicate any changes that may arise.
  //         </p>
  //         {/* <div
  //           style={{
  //             marginTop: "3%",
  //             display: "flex",
  //             flexDirection: "row",
  //             // justifyContent: "space-between",
  //           }}
  //         >
  //           <div>
  //             <a
  //               // href="https://play.google.com/store/apps/details?id=org.zam.automark"
  //               target="_blank"
  //             >
  //               <img
  //                 src={appleImg}
  //                 alt=""
  //                 style={{ width: "180px", height: "50px" }}
  //               />
  //             </a>
  //           </div>
  //           <div>
  //             <a
  //               // href="https://play.google.com/store/apps/details?id=org.zam.automark"
  //               target="_blank"
  //             >
  //               <img
  //                 src={googleImg}
  //                 alt=""
  //                 style={{
  //                   width: "180px",
  //                   marginLeft: "10%",
  //                   height: "50px",
  //                 }}
  //               />
  //             </a>
  //           </div>
  //         </div> */}
  //       </div>
  //       <Carousel
  //         cards={cards}
  //         height="600px"
  //         width="30%"
  //         margin="0 auto"
  //         offset={2}
  //         showArrows={false}
  //       />
  //     </div>
  //   </div>
// areebend

  );
};
export default Main;
