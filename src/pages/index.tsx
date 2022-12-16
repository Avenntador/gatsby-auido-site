import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  TypographyOverline,
  TypographyH1,
  TypographyBody,
} from "../styles/typography";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      hero_image: any;
    };
  };
  children?: React.ReactNode;
};

const HomePageHeaderContent = styled.div`
  max-width: 111rem;
  width: 100%;
  height: 72.9rem;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
`;

const HomePageHeaderDesc = styled.div`
  max-width: 39.8rem;
  position: absolute;
  top: 50%;
  left: 0%;
  z-index: 1001;
  color: #ffffff;
  transform: translateY(-50%);
`;

const HomePageContent = styled.div`
  max-width: 111rem;
  margin: 0 auto;
`;

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      {/* Header for homepage */}
      <GatsbyImage
        // С этим стилем можно растянуть на всю ширину
        // style={{
        //   width: "100vw",
        //   position: "relative",
        //   left: "50%",
        //   right: "50%",
        //   marginLeft: "-50vw",
        //   marginRight: "-50vw",
        // }}
        image={image!}
        alt="Some"
      />
      <HomePageHeaderContent>
        <HomePageHeaderDesc>
          <TypographyOverline>NEW PRODUCT</TypographyOverline>
          <TypographyH1>XX99 Mark II Headphones</TypographyH1>
          <TypographyBody>
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </TypographyBody>
        </HomePageHeaderDesc>
      </HomePageHeaderContent>

      <HomePageContent>sadasdas</HomePageContent>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataProps>) => {
  return <title>{data.mdx.frontmatter.title}</title>;
};

export default IndexPage;
