import React from "react";
import { Link } from "gatsby";
// import ArmpitUnWaxed from "../images/ArmpitUnWaxed.jpg";
// import ArmPitWaxed from "../images/ArmpitWaxed.jpg";
// import EarWaxing from "../images/EarWaxing.jpg";
// import MassageTable from "../images/MassageTable.jpg";
import "./Home.scss";
const Home = () => (
  // const slideshow = () => {
  //   // console.log(document.getElementsByClassName("slideshowImg"));
  //   const slides = Array.from(document.getElementsByClassName("slideshowImg"));
  //   // console.log(slides);
  //   slides.map(slide => {
  //     return slide.classList.toggle("toggle");
  //   });
  // };
  // const schedule = () => {
  //   window.open(
  //     "https://square.site/book/EXBNAA5ZH3W6R/11-11-wax-studio-spa-phoenix-az",
  //     "__blank"
  //   );
  // };
  <div className="Home">
    <h2>Welcome!</h2>
    <h3>-Stimulating Inner Beauty, Enhancing Outer Beauty-</h3>
    <p>
      I'm Dee. Owner and Lead Esthetician of 11:11 Wax Studio & Spa. I am a
      Phoenix native esthetician specializing in BOTH male and female full body
      waxing. After starting in the skin care industry 10 years ago, I needed to
      explore aspects of my creativity. I decided to give waxing a try, fell in
      love immediately and 11:11 Wax Studio & Spa was born! I offer both Hard
      and Soft wax to cover everyone's specific waxing needs since everyone's
      hair is different. This allows me to get the finest of hairs to the most
      coarse. Because I offer both types of waxes I am able to create a unique
      customized wax for every individual.
    </p>
    <p>
      11:11 Wax Studio & Spa doesn't just offer waxing but skincare & massage
      services as well. Ranging from: Swedish, Deep Tissue, Reflexology, Body
      Scrubs, Chemical Peels, CIT Micro-needling, Micro-dermabrasion, and much
      more!!!
    </p>
    <Link to="/Schedule">
      <button
        className="call-to-action"
        // onClick={() => schedule()}
      >
        Schedule Now
      </button>
    </Link>
    {/* <div className="massageTable">
        <img src={MassageTable} alt="Massage Table" />
      </div>
      <div className="armpit">
        <p onClick={() => slideshow()}>{"<"}</p>
        <img
          className="slideshowImg toggle"
          src={ArmpitUnWaxed}
          alt="Armpit Before"
        />
        <img className="slideshowImg" src={ArmPitWaxed} alt="Armpit After" />
        <p onClick={() => slideshow()}>{">"}</p>
      </div>
      <img className="ear" src={EarWaxing} alt="Ear Waxing" /> 
      <button className="call-to-action" onClick={() => schedule()}>
        Schedule Now
      </button>*/}
  </div>
);
export default Home;
