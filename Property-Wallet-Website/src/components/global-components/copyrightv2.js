import React, { Component } from "react";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import SocialLarge from "../section-components/social-large";

class CopyRightV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        <div className="container-fluid ltn__border-top-2"
         style={{textAlign:"center",alignItems:"center"}}>
          {/* <div className="row">
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-end"> */}
                {/* <Social /> */}
                <SocialLarge />
                {/* <ul className="go-top">
                  <li>
                    <Link to="/about">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/about">Claim</Link>
                  </li>
                  <li>
                    <Link to="/about">Privacy &amp; Policy</Link>
                  </li>
                </ul> */}
              {/* </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default CopyRightV2;