import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";
import { useStaticQuery, graphql } from "gatsby";

const NavbarContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  color: #ffffff;
`;
const NavbarContent = styled.nav`
  border-bottom: 1px solid #b69e9e;
  padding: 35px 0;
`;

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);
  
  console.log(data);

  return (
    <NavbarContainer>
      <NavbarContent>
        <img src={logo} alt="" />
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
