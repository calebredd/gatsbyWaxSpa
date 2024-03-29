import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
);

export default AboutPage;
