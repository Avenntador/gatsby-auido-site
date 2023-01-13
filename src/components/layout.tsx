import "../styles/global.css";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

export type categoryData = {
  allStrapiCategory: {
    nodes: {
      title: string;
    }[];
  };
};

const Container = styled.div`
  max-width: var(--body-max-width);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const categories: categoryData = useStaticQuery(getCategories);

  return (
    <Container>
      <Navbar categories={categories} />
      {children}
      <Footer categories={categories} />
    </Container>
  );
};

export default Layout;

export const getCategories = graphql`
  query getCategories {
    allStrapiCategory {
      nodes {
        title
      }
    }
  }
`;
