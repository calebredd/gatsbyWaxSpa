import React from "react";
import "../Services.scss";
import BlackHeadNose from "../../images/BlackHeadNose.jpg";
const Facial=()=> (
    <div className="packageContent">
      <h2>Facial Packages</h2>
      <p className="packageDescription">
        Custom Facials available as well as Micro-blading.
      </p>
      <div className="packages">
        <div>
        <h3>Facial Services</h3>
          <ul>
            <li>Chemical Peels</li>
            <li>CIT Micro-needling</li>
            <li>Micro-dermabrasion</li>
            <li>Custom Facial</li>
            <li>Express Custom Facial</li>
            <li>Brow Tint</li>
            <li>Brow & Lash Tint</li>
            <li>Micro-blading</li>
          </ul>
        </div>
      </div>
      <img src={BlackHeadNose} alt="Nose Facial" />{" "}
    </div>
  );
export default Facial
