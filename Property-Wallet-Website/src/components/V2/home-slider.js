import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../carousel/Card";
import Carousel from "../carousel/Carousel";


import HomeScreen from "../images/mobile-scroll-screeen/1.jpg"
import dashboard from "../images/mobile-scroll-screeen/Dashboard.jpg"
import inventry from "../images/mobile-scroll-screeen/Inventory.jpg"
import staff from "../images/mobile-scroll-screeen/Staff.jpg"
import commission from "../images/mobile-scroll-screeen/Commission.jpg"
import report from "../images/mobile-scroll-screeen/Report.jpg"
import digitalTools from "../images/mobile-scroll-screeen/tools.jpg"
import saleTarget from "../images/mobile-scroll-screeen/Target.jpg"

const HomeSilder = () => {
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
        }, {
            key: uuidv4(),
            content: <Card imagen={commission} />,
        }, {
            key: uuidv4(),
            content: <Card imagen={report} />,
        }, {
            key: uuidv4(),
            content: <Card imagen={digitalTools} />,
        }, {
            key: uuidv4(),
            content: <Card imagen={saleTarget} />,
        }
    ];
    return (
        <div  className="main_carousel_div"
            // data-aos="fade-up"
        >
            <div
                className="mobile_show"
                style={{
                    display: "none",
                    marginLeft: "5%",
                    marginTop: "5%",
                    width: "100%",
                    // border:"2px solid red"
                }}
            >
            </div>
            <div  className="main" style={{
                    border:""
            }}>
                <Carousel
                    cards={cards}
                    height="600px"
                    width="30%"
                    margin="0 auto"
                    offset={4}
                    showArrows={false}
                />
            </div>
        </div>
        
    )
}
export default HomeSilder
