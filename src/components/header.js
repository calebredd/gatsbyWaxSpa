import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Emblem from "../images/11 11 3D NewEmblem.png";
// import LogoGIF from "../images/11 11 GIF (3).gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faYelp
} from "@fortawesome/free-brands-svg-icons";
import "./Nav.scss";
const Header = ({ siteTitle }) => {
  const toggleNav = e => {
    const navbar = document.getElementsByClassName("Nav")[0];
    navbar.classList.toggle("toggle");
  };
  const [arrow, setArrow] = useState(true);
  const dropDown = () => {
    //toggle services dropdown menu
    document
      .getElementsByClassName("servicesList")[0]
      .classList.toggle("hidden");
    document.getElementsByClassName("servicesList")[0].classList.toggle("flex");
    setArrow(!arrow);
  };
  return (
    <header
      style={{
        background: `black`,
        marginBottom: `1.45rem`
      }}
    >
      {/* <img className="start" src={LogoGIF} alt="11:11 Wax Studio and Spa" /> */}
      <div className="title">
        {/* <div className="logoImg"> */}
        {/* <img src={Logo} alt="" /> */}
        {/* <img src={LogoGIF} alt="11:11" /> */}
        {/* </div> */}
        {/* <h1 className="full">11:11 Wax Studio and Spa</h1> */}
        {/* <h1 className="mobile">11:11</h1> */}
        <Link to="/">
          <div className="logo mobile">
            <img src={Emblem} alt="11:11" />
            {/* <img src={Logo} alt="11:11" /> */}
            <p>11:11 Wax Studio and Spa</p>
          </div>
        </Link>
        <div className="hamburger-nav">
          <i onClick={() => toggleNav()} className="fa fa-bars"></i>
        </div>
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
          <div onClick={() => dropDown()} className="servicesGeneral">
            Services{" "}
            <span className="arrow">
              {arrow ? (
                <FontAwesomeIcon icon={faAngleLeft} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </span>
          </div>
          {/* </Link> */}
          <div className="servicesList hidden">
            <Link to="/services/wax">
              <div className="servicesWax">Wax</div>
            </Link>
            <Link to="/services/facial">
              <div className="servicesFacial">Facial</div>
            </Link>
            <Link to="/services/massage">
              <div className="servicesMassage">Massage</div>
            </Link>
          </div>
        </div>
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
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
