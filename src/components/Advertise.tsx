import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TypographyBody, TypographyH2 } from "./typography";

type AdvertiseType = {
  strapiAdvertising: {
    text: string;
    title: string;
    image: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
  };
};

const AdvertiseStyle = styled.div`
  width: 100%;
  height: 58.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .advertise-desc {
    max-width: 44.5rem;

    h2 {
      margin-bottom: 3.2rem;
    }

    .styled-text {
      color: var(--color-orange-primary);
    }
  }

  .advertise-img {
    border-radius: 0.8rem;
    overflow: hidden;
  }
`;

const Advertise = () => {
  const advertiseData: AdvertiseType = useStaticQuery(getAdvertiseData);
  const advertiseImage = getImage(
    advertiseData.strapiAdvertising.image.desktop.localFile
  );
  const advertiseTitle = advertiseData.strapiAdvertising.title;
  const advertiseDesc = advertiseData.strapiAdvertising.text;

  const styledAdvertiseTitle = advertiseTitle.split(" ").map((word, index) => {
    if (word === "best") {
      return (
        <span key={index} className="styled-text">
          {word}{" "}
        </span>
      );
    }

    return <React.Fragment key={index}>{word} </React.Fragment>;
  });

  return (
    <AdvertiseStyle>
      <div className="advertise-desc">
        <TypographyH2>{styledAdvertiseTitle}</TypographyH2>
        <TypographyBody>{advertiseDesc}</TypographyBody>
      </div>
      <div className="advertise-img">
        <GatsbyImage image={advertiseImage!} alt="advertise-img" />
      </div>
    </AdvertiseStyle>
  );
};

export default Advertise;

const getAdvertiseData = graphql`
  query getAdvertiseData {
    strapiAdvertising {
      text
      title
      image {
        desktop {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
