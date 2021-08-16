import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog.jpeg"
      />
    </Layout>
  );
}
