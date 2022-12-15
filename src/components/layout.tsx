import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        maxWidth: "1110px",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        zIndex: "1",
        borderBottom: "1px solid black",
      }}
    >
      {/* Navbar всегда тут */}
      <Navbar />
      {children}
      {/* Footer всегда тут */}
      <Footer />
    </main>
  );
};

export default Layout;
