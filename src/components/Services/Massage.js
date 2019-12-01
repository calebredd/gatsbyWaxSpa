import React from "react";
import "../Services.scss";
import SuctionCup from "../../images/SuctionCupMassage.jpg";
const Massage = () => (
  <div className="packageContent">
    <h2>Massage Packages</h2>
    <p className="packageDescription">
      Up to 2 hours, minimum of 30 minutes with varying modalities.
    </p>
    <div className="packages">
      <div>
        <h3>Massage Services</h3>
        <ul>
          <li>Swedish</li>
          <li>Deep Tissue</li>
          <li>Reflexology</li>
          <li>Body Scrubs</li>
          <li>Cupping (Add-on)</li>
          <li>Gua Sha (Add-on)</li>
          <li>Aromatherapy (Add-on)</li>
        </ul>
      </div>
    </div>
    <img src={SuctionCup} alt="Suction Cup Massage" />
  </div>
);
export default Massage;
