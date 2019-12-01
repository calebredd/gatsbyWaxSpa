import React from "react";
// import { Link } from "gatsby";
import Schedule from "../components/Schedule";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <Schedule />
  </Layout>
);

export default SchedulePage;
