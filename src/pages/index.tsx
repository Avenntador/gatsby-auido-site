import React from "react";
import "../styles/normalize.css";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Photo from "../assets/home/desktop/image-hero.jpg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Header for homepage */}
      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <img style={{ width: "100%" }} src={Photo} alt="" />
      </div>
      <div
        style={{
          maxWidth: "389px",
          position: "absolute",
          top: "50%",
          left: "0%",
          zIndex: "1001",
          color: "#ffffff",
          transform: "translateY(-50%)",
        }}
      >
        <p style={{ fontSize: "14px" }}>NEW PRODUCT</p>
        <h1 style={{ fontSize: "56px" }}>XX99 Mark II Headphones</h1>
        <p style={{ fontSize: "15px" }}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
