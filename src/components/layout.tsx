import "../styles/global.css";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

type LayoutData = {
  allStrapiCategory: {
    nodes: {
      title: string;
    }[];
  };
  strapiCommon: {
    cartLogo: {
      localFile: {
        publicURL: string;
      };
    };
    mainLogo: {
      localFile: {
        publicURL: string;
      };
    };
    socials: {
      socialLogo: {
        localFile: {
          publicURL: string;
        };
      };
      slug: string;
    }[];
  };
};

export type Categories = {
  categories: {
    title: string;
  }[];
  logo: string;
};

const Container = styled.div`
  max-width: var(--body-max-width);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Layout = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: any;
}) => {
  const data: LayoutData = useStaticQuery(getCategories);

  const categories = data.allStrapiCategory.nodes;
  const logo = data.strapiCommon.mainLogo.localFile.publicURL;

  const socials = data.strapiCommon.socials;

  return (
    <Container style={style}>
      <Navbar categories={categories} logo={logo} />
      {children}
      <Footer categories={categories} logo={logo} socials={socials} />
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
    strapiCommon {
      cartLogo {
        localFile {
          publicURL
        }
      }
      mainLogo {
        localFile {
          publicURL
        }
      }
      socials {
        socialLogo {
          localFile {
            publicURL
          }
        }
        slug
      }
    }
  }
`;
