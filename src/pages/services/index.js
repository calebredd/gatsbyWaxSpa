import React from "react";
// import { Link } from "gatsby";
import { Router } from "@reach/router";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Wax from "../../components/Services/Wax.js";
import Massage from "../../components/Services/Massage.js";
import Facial from "../../components/Services/Facial.js";
import All from "../../components/Services/All.js";
const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Router>
      <Wax path="/services/wax" />
      <Facial path="/services/facial" />
      <Massage path="/services/massage" />
      <All path="/services" />
    </Router>
  </Layout>
);

export default ServicesPage;
