import React from "react";
import LogoGIF from "../images/11 11 GIF (3).gif";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from "../components/Home";
const IndexPage = () => (
  <div className="App">
    <img
      className="start"
      src={LogoGIF}
      alt="11:11 Wax Studio and Spa"
      // style={{ width: "50vw", height: "100vh" }}
    />
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  </div>
);

export default IndexPage;
