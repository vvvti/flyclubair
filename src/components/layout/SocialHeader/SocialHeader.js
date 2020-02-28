import React, { Component } from "react";
import "./SocialHeader.css";
import twitter from "./twitter.svg";

class SocialHeader extends Component {
  render() {
    return (
      <div className="social-header">
        <a href="/">
          <div className="social-rectangle">
            <div>
              <img src={twitter} alt="" />
            </div>
          </div>
        </a>
        <div className="social-rectangle"></div>
        <div className="social-rectangle"></div>
      </div>
    );
  }
}

export default SocialHeader;
