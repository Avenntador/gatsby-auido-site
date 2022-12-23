import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  TypographyOverline,
  TypographyH1,
  TypographyH6,
  TypographyBody,
} from "../components/typography";
import { ColoredButton } from "../components/Buttons";
import { NavButton } from "../components/Buttons";

const HeaderWrapper = styled.header`
  max-width: var(--header-max-width);
  width: 100%;
  height: 72.9rem;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);

  .header-description {
    max-width: 39.8rem;
    position: absolute;
    top: 50%;
    left: 0%;
    color: var(--color-white);
    transform: translateY(-50%);

    h1 {
      margin: 2.4rem 0;
    }

    button {
      margin-top: 4rem;
    }
  }
`;

const ContentWrapper = styled.main`
  max-width: var(--content-max-width);
  margin: 0 auto;

  .thumbnails {
    margin: 20rem 0 16.8rem 0;
    display: flex;
    justify-content: space-between;

    .thumbnails-item {
      flex: 0.31;
      height: 20.4rem;
      background-color: var(--color-gray-primary);
      border-radius: 0.8rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      & > :not(:first-child) {
        margin-bottom: 3rem;
      }

      .thumbnails-item-image {
        width: 16rem;
        position: absolute;
        top: -25%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

const HomePageSecondSection = styled.div`
  margin: 16.8rem 0 4.8rem 0;
  border: 1px solid black;
  height: 56rem;
  border-radius: 0.8rem;
`;

const HomePageThirdSection = styled.div`
  margin-bottom: 4.8rem;
  display: flex;
  justify-content: space-between;
  height: 32rem;

  & > div {
    border: 1px solid red;
    flex: 0.49;
    border-radius: 0.8rem;
  }
`;

const IndexPage = () => {

  return (
    <Layout>
      {/* <GatsbyImage
        image={image!}
        alt="Some"
      /> */}
      <HeaderWrapper>
        <div className="header-description">
          <TypographyOverline>NEW PRODUCT</TypographyOverline>
          <TypographyH1 color="#ffffff">XX99 Mark II Headphones</TypographyH1>
          <TypographyBody color="#ffffff">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </TypographyBody>
          <ColoredButton title="See product" />
        </div>
      </HeaderWrapper>

      {/* <ContentWrapper>
        <div className="thumbnails">
          {thumbnailsArray.map((item) => {
            return (
              <div className="thumbnails-item" key={item.id}>
                <div className="thumbnails-item-image">
                  <GatsbyImage
                    image={item.childImageSharp.gatsbyImageData}
                    alt="thumbnail"
                  />
                </div>
                <TypographyH6>{item.name}</TypographyH6>
                <NavButton />
              </div>
            );
          })}
        </div>

        <HomePageSecondSection></HomePageSecondSection>
        <HomePageThirdSection>
          <div>1</div>
          <div>2</div>
        </HomePageThirdSection>
      </ContentWrapper> */}
    </Layout>
  );
};

// export const Head = () => {
//   return <title></title>;
// };

export default IndexPage;
