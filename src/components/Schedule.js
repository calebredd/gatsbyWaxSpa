import React, { useEffect } from "react";
import BusinessCard from "../images/11 11 Logo Flat PNG V2.png";
import "./schedule.scss";
const Schedule = () => {
  //Add redirect to SquareUp Scheduling Page
  let script = "";
  useEffect(() => {
    script = document.createElement("script");

    script.src =
      "https://square.site/appointments/buyer/widget/c473a546-2448-49b0-b583-6d62746dd0b4/EXBNAA5ZH3W6R.js";
    script.async = true;
    // console.log(document.getElementsByClassName("schedule")[0]);
    document.getElementsByClassName("embedded")[0].appendChild(script);
    // console.log(script);
    return () => {
      document.getElementsByClassName("embedded")[0].removeChild(script);
    };
  }, []);

  // const schedule = () => {
  //   window.open(
  //     "https://square.site/book/EXBNAA5ZH3W6R/11-11-wax-studio-spa-phoenix-az",
  //     "__blank"
  //   );
  // };
  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <div className="embedded"></div>
      <div className="Buttons">
        {/* <button onClick={() => schedule()}>Schedule Online</button> */}
        <a href="tel:6024007291">
          <button className="call-to-action">Call Now</button>
        </a>
      </div>
      <img
        className="Bussiness-Card"
        src={BusinessCard}
        alt="Call (602) 400-7291"
      />
    </div>
  );
};
export default Schedule;
