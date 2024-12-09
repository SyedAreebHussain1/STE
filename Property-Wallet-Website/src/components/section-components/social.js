import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Social extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a href="#" title="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#" title="Linkedin">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="#" title="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#" title="Youtube">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
