import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TypographyH6 } from "./typography";
import DefaultButton from "./Buttons/DefaultButton";
import { navButton } from "./Buttons/buttonStyle";
import rightArrow from "../assets/icons/icon-arrow-right.svg";

type ThumbnailsData = {
  strapiThumbnail: {
    thumbnails: {
      id: number;
      category: string;
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    }[];
  };
};

const ThumbnailsStyle = styled.div`
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
  const thumbnails: ThumbnailsData = useStaticQuery(getThumbnailData);

  return (
    <ThumbnailsStyle>
      {thumbnails.strapiThumbnail.thumbnails.map((item) => {
        const id = item.id;
        const category = item.category;
        const image = getImage(item.image.localFile);

        return (
          <div className="thumbnails-item" key={id}>
            <div className="thumbnails-item-image">
              <GatsbyImage image={image!} alt="thumbnail" />
            </div>
            <TypographyH6>{category}</TypographyH6>
            <DefaultButton
              to={category}
              variant={navButton}
              title={
                <>
                  shop&nbsp;
                  <img src={rightArrow} alt="" />
                </>
              }
            />
          </div>
        );
      })}
    </ThumbnailsStyle>
  );
};

export default Thumbnails;

const getThumbnailData = graphql`
  query getThumbnailData {
    strapiThumbnail {
      thumbnails {
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
