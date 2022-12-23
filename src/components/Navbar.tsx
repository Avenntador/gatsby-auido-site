import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import cart from "../assets/icons/icon-cart.svg";
import { useStaticQuery, graphql } from "gatsby";

const NavbarContainer = styled.nav`
  max-width: var(--navbar-max-width);
  width: 100%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #b69e9e;
  text-transform: uppercase;
  padding: 3rem 0;

  .nav-list {
    list-style: none;
    display: flex;

    .nav-list-item {
      margin-right: 3.4rem;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 2.5rem;
      letter-spacing: 0.2rem;
      cursor: pointer;

      &:hover {
        color: var(--color-orange-primary);
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="audiophile" />

      <img src={cart} alt="audiophile-cart" />
    </NavbarContainer>
  );
};

export default Navbar;
