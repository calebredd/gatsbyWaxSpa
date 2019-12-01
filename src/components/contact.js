import React from "react";
import "./Contact.scss";
import KeepCalm from "../images/KeepCalmSpaDay.jpg";
const Contact = () => (
  <div className="Contact">
    <h2>Contact</h2>
    <div className="Main">
      <form netlify method="POST" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          minlength="10"
          required
        />
        <textarea col="50" rows="10" placeholder="Additional comments..." />
        <button type="submit">Submit</button>
      </form>
      <img src={KeepCalm} alt="Keep Calm and Have a Spa Day" />
    </div>
  </div>
);
export default Contact;
