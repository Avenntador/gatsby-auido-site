import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type GalleryPropsType = {
  images: {
    first: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
    second: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
    third: {
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

const GalleryProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 0.8rem;
  }

  .gallery-first-section {
    max-width: 44.5rem;

    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  .gallery-second-section {
    flex: 0.96;
  }
`;

const Gallery = ({ images }: GalleryPropsType) => {
  // gallery
  const productGalleryFirstImage = getImage(images.first.desktop.localFile);
  const productGallerySecondImage = getImage(images.second.desktop.localFile);
  const productGalleryThirdImage = getImage(images.third.desktop.localFile);

  return (
    <GalleryProductWrapper>
      <div className="gallery-first-section">
        <GatsbyImage image={productGalleryFirstImage!} alt="gallery image" />

        <GatsbyImage image={productGallerySecondImage!} alt="gallery image" />
      </div>
      <div className="gallery-second-section">
        <GatsbyImage image={productGalleryThirdImage!} alt="gallery image" />
      </div>
    </GalleryProductWrapper>
  );
};

export default Gallery;
