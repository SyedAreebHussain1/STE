import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import img1 from "../../components/images/home2.jpg";
import img2 from "../../components/images/homee1.jpg";
class AboutV4 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120--- pb-90 mt--30 go-top">
        <div className="margin-top-fix-1 container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src={img2} alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src={img1} alt="video popup bg image" />
                    <a
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                      data-rel="lightcase:myCollection"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <p style={{ color: "#27A3A3", fontSize: "20px" }}>
                  Close more deals with more convenience with the Property
                  Wallet app, powered by Square Foot Exchange, where we help
                  realtors manage and market their brands. Property Wallet is
                  Pakistan’s 1st Real Estate mobile app that enables realtors to
                  streamline their business processes. It is a free, easy-to-use
                  and a 24/7 service that assists users with managing their
                  staff, inventory, sales and much more on-the-go, with added
                  effectiveness and efficiency. Property Wallet offers you a
                  platform where you can manage and grow your business online
                  and create and maintain healthy business relationships, all
                  while protecting the confidentiality of your business data and
                  information. We also aim to simplify all complexities for
                  agents by managing and calculating their commissions for the
                  properties they successfully sell. Property Wallet is 360
                  degree business management in your pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV4;
