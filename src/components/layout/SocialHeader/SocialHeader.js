import React, { Component } from "react";
import "./SocialHeader.css";
import twitter from "./twitter.svg";

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
        <div className="social-rectangle"></div>
        <div className="social-rectangle"></div>
      </div>
    );
  }
}

export default SocialHeader;
