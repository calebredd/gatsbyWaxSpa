import { Link } from "gatsby";
import React from "react";
import Emblem from "../images/11 11 3D NewEmblem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faYelp
} from "@fortawesome/free-brands-svg-icons";
import "./Nav.scss";
const Footer = () => (
  <footer
    style={{
      background: `black`
    }}
  >
    <div className="icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/1111waxstudioandspa/"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/1111waxstudioandspa/"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.yelp.com/biz/11-11-wax-studio-and-spa-phoenix"
      >
        <FontAwesomeIcon icon={faYelp} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/11:11+Wax+Studio+%26+Spa/@33.4836513,-112.0468216,17z/data=!3m1!4b1!4m5!3m4!1s0x872b0d8a40efa981:0x6969f5fbe34c7f94!8m2!3d33.4836513!4d-112.0446329"
      >
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
    <div className="Nav">
      <div className="logo">
        <Link to="/">
          <img src={Emblem} alt="11:11" />
          {/* <img src={Logo} alt="11:11" /> */}
        </Link>
        <Link to="/">
          <p>11:11 Wax Studio and Spa</p>
        </Link>
        <a href="tel:6024007291">
          <p>(602) 400-7291</p>
        </a>
      </div>
      <Link to="/">
        <div className="nav-item">Home</div>
      </Link>
      <div className="nav-item">
        {/* <Link to="/Services"> */}
        {/* <div onClick={() => dropDown()} className="servicesGeneral">
          Services{" "}
          <span className="arrow">
            {arrow ? (
              <FontAwesomeIcon icon={faAngleLeft} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </div> */}
        {/* </Link> */}
        {/* <div className="nav-item"> */}
        <Link to="/services/wax">
          <div className="servicesWax">Wax</div>
        </Link>
        <Link to="/services/facial">
          <div className="nav-item">Facial</div>
        </Link>
        <Link to="/services/massage">
          <div className="nav-item">Massage</div>
        </Link>
      </div>
      {/* </div> */}
      <Link to="/schedule">
        <div className="nav-item">Schedule</div>
      </Link>
      <Link to="/about">
        <div className="nav-item">About</div>
      </Link>
      <Link to="/contact">
        <div className="nav-item">Contact</div>
      </Link>
    </div>
    <p className="credits">
      Created by{" "}
      <a className="author" target="__blank" href="https://www.cjredd.com">
        Caleb Redd
      </a>
      , Technology Solutions Expert
    </p>
  </footer>
);

export default Footer;
