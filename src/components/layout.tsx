import "../styles/normalize.css";
import "../styles/fonts.css";
import "../styles/global.css";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.main`
  max-width: 144rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {/* Navbar всегда тут */}
      <Navbar />
      {children}

      {/* Footer всегда тут */}
      <Footer />
    </Container>
  );
};

export default Layout;
