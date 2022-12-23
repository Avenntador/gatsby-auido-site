import React from "react";
import styled from "styled-components";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TypographyH6 } from "./typography";
import { NavButton } from "./Buttons";

const ThumbnailsStyle = styled.div`
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
      position: absolute;
      top: -25%;
      left: 50%;
      transform: translateX(-50%);
      width: 16rem;
    }
  }
`;

const Thumbnails = () => {
  return (
    <ThumbnailsStyle>
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
    </ThumbnailsStyle>
  );
};

export default Thumbnails;
