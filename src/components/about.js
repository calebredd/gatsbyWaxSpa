import React from "react";
import DeeWorking from "../images/DeeWorking.jpg";
import elevenEleven from "../images/11:11on11_11.png";
import "./About.scss";
const About = () => (
  <div className="About">
    <h2>About Us</h2>
    <h3>Meet Dee!</h3>
    <img src={DeeWorking} alt="Dee Carter" />
    <p>
      Dee Carter is a 2012 graduate of South West Institute of Natural
      Aesthetics (SWINA) in Tempe, AZ. Her passion for aesthetics & massage has
      awarded her many opportunities to share her talents, abilities, gifts and
      skills with non-profit and for-profit agencies that aid in supporting men
      and women and bridging community relations. Her mantra for the aesthetic
      industry is: "Stimulating Inner Beauty, Enhancing Outer Beauty." Enjoy one
      of her many mastered modalities of massage, facials, body treatments and
      full body waxing. Indulge in Dee's quality services that one has to
      experience!
    </p>
    <img src={elevenEleven} alt="11:11 on 11-11" />
  </div>
);
export default About;
