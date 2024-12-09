import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CallToActonV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>Watch tutorial</h1>
                </div>
                <div className="btn-wrapper go-top">
                  {/* <Link className="btn btn-effect-3 btn-white" to="/contact">
                    Explore Properties <i className="icon-next" />
                  </Link> */}
                  <div className="btn-wrapper animated">
                    {/* <Link
                              to="/about"
                              className="theme-btn-1 btn btn-effect-1"
                            >
                              Download App
                            </Link> */}
                    <a
                      className="ltn__video-play-btn bg-white"
                      href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0"
                      data-rel="lightcase"
                    >
                      <i className="icon-play" style={{ color: "#27A3A3" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToActonV1;
