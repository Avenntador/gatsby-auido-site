import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg";
import cart from "../assets/icons/icon-cart.svg";
import { Link } from "gatsby";
import { categoryData } from "./layout";

const NavbarContainer = styled.nav`
  max-width: var(--navbar-max-width);
  width: 100%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #b69e9e;
  text-transform: uppercase;
  padding: 3rem 0;

  .logo:hover {
    cursor: pointer;
  }

  .cart:hover {
    cursor: pointer;
    filter: invert(56%) sepia(47%) saturate(659%) hue-rotate(336deg)
      brightness(91%) contrast(84%);
  }

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
      text-decoration: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-orange-primary);
      }
    }
  }
`;

const Navbar = ({ categories }: { categories: categoryData }) => {
  return (
    <NavbarContainer>
      <Link to="/">
        <img className="logo" src={logo} alt="audiophile" />
      </Link>

      <div className="nav-list">
        <Link className="nav-list-item" to={`/`}>
          home
        </Link>

        {categories.allStrapiCategory.nodes.map((category, index) => {
          return (
            <Link
              className="nav-list-item"
              key={index}
              to={`/${category.title}`}
            >
              {category.title}
            </Link>
          );
        })}
      </div>

      <img className="cart" src={cart} alt="audiophile-cart" />
    </NavbarContainer>
  );
};

export default Navbar;
