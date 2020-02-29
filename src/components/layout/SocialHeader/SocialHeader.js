import React, { Component } from "react";
import "./SocialHeader.css";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";

class SocialHeader extends Component {
  render() {
    return (
      <div className="social-header">
        <div className="social-rectangle">
          <div>
            <a href="/">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="social-rectangle">
          <div>
            <a href="/">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <div className="social-rectangle">
          <div>
            <a href="/">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialHeader;
