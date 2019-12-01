import React from "react";
import "../Services.scss";
import ManBack from "../../images/ManBack.jpg";
const Wax = () => (
  <div className="packageContent">
    <h2>Waxing Packages</h2>
    <p className="packageDescription">
      Guys and girls, don't be shy, we offer a wide variety of waxing services.
    </p>
    <div className="packages">
      <div>
        <h3>Female Services</h3>
        <ul>
          <li>Full Leg</li>
          <li>Half Leg</li>
          <li>Inner Thigh</li>
          <li>Bikini</li>
          <li>Full Brazilian</li>
          <li>Brazilian Modified</li>
          <li>Butt Strip</li>
          <li>Butt Cheeks</li>
          <li>Full Stomach Strip</li>
          <li>Stomach Strip</li>
          <li>Full Arms & Hands</li>
          <li>Half Arms & Hands</li>
          <li>Hands</li>
          <li>Underarm</li>
          <li>Full Face</li>
          <li>Cheeks</li>
          <li>Chin</li>
          <li>Lip</li>
          <li>Neck</li>
          <li>Sideburns</li>
          <li>Brow Shaping</li>
          <li>Lip & Brow</li>
          <li>Lip, Brow & Chin</li>
          <li>Full Body</li>
        </ul>
      </div>
      <div>
        <h3>Male Services</h3>
        <ul>
          <li>Full Leg</li>
          <li>Half Leg</li>
          <li>Groin</li>
          <li>Butt Crack & Cheeks</li>
          <li>Butt Cheeks</li>
          <li>Full Brazilian</li>
          <li>Brazilian Modified</li>
          <li>Chest & Abs</li>
          <li>Chest</li>
          <li>Abs</li>
          <li>Full Back & Shoulders</li>
          <li>Half Back</li>
          <li>Underarm</li>
          <li>Hands & Fingers</li>
          <li>Full Arm & Hands</li>
          <li>Half Arm</li>
          <li>Deltoids</li>
          <li>Brow & Nose</li>
          <li>Nose</li>
          <li>Ears</li>
          <li>Brow Shaping</li>
          <li>Full Body</li>
        </ul>
      </div>
    </div>
    <img src={ManBack} alt="Back Waxing" />
  </div>
);
export default Wax;
