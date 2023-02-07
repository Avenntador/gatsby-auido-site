import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import DefaultButton from "../Buttons/DefaultButton";
import { mainButton } from "../Buttons/buttonStyle";
import { TypographyH3, TypographyH5 } from "../typography";

type OthersPropsType = {
  others: {
    image: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
    category: {
      title: string;
    };
    name: string;
    id: string;
    slug: string;
  }[];
};

const OtherProductsWrapper = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 6.4rem;
  }

  .others-list {
    display: flex;
    justify-content: space-between;

    & > * {
      flex: 0.3155;
    }

    .others-item-img {
      border-radius: 0.8rem;
      margin-bottom: 4rem;
    }

    .others-item-title {
      margin-bottom: 3.2rem;
    }
  }
`;

const Others = ({ others }: OthersPropsType) => {
  return (
    <OtherProductsWrapper>
      <TypographyH3>You may also like</TypographyH3>
      <div className="others-list">
        {others.map((item) => {
          const image = getImage(item.image.desktop.localFile);

          return (
            <div className="others-item" key={item.id}>
              <GatsbyImage
                className="others-item-img"
                image={image!}
                alt="others-img"
              />
              <TypographyH5 className="others-item-title">
                {item.name}
              </TypographyH5>
              <DefaultButton
                to={`${item.category.title}/${item.slug}`}
                variant={mainButton}
                title="See product"
              />
            </div>
          );
        })}
      </div>
    </OtherProductsWrapper>
  );
};

export default Others;
