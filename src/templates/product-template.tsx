import React, { useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { BackNavButton } from "../components/Buttons";
import Counter from "../components/Counter";
import Button, { mainButton } from "../components/Buttons";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import {
  TypographyBody,
  TypographyH2,
  TypographyH3,
  TypographyOverline,
} from "../components/typography";
import ReactMarkdown from "react-markdown";

type ProductType = {
  strapiProduct: {
    title: string;
    price: number;
    isNew: boolean;
    desc: {
      data: {
        desc: string;
      };
    };
    image: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
    features: {
      data: {
        features: string;
      };
    };
    gallery: {
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
      id: string;
    };
    includes: {
      item: string;
      quantity: number;
      id: string;
    }[];
  };
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8.9rem;
  background-color: var(--color-black-primary);
`;
const ContentWrapper = styled.main`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 7.9rem 0 16rem 0;

  & > *:first-child {
    margin-bottom: 5.6rem;
  }
`;
const AboutProductWrapper = styled.div`
  height: 56rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16rem;

  .product-new {
    color: var(--color-orange-primary);
    margin-bottom: 1.6rem;
    opacity: 1;
  }
  .product-title {
    margin-bottom: 3.2rem;
  }
  .product-desc {
    max-width: 44.5rem;
  }
  .product-descText {
    max-width: 44.5rem;
    margin-bottom: 3.2rem;
  }
  .product-price {
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-family: var(--font-family-bold);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    margin-bottom: 4.7rem;
  }
  .product-img {
    max-width: 54rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  .product-desc-actions {
    display: flex;

    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
`;
const AttachmentProductWrapper = styled.div`
  display: flex;

  .product-features {
    max-width: 63.5rem;
  }
  .product-attachment {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  .product-attachment-item {
    display: flex;

    .name {
      margin-left: 2.4rem;
    }
  }
`;
const GalleryProductWrapper = styled.div``;
const OtherProductsWrapper = styled.div``;

// TODO: фикс навбар размеры, мб композицию

const ProductTemplate = ({ data }: { data: ProductType }) => {
  const [count, setCount] = useState(0);

  const isProductNew = data.strapiProduct.isNew;
  const productPrice = data.strapiProduct.price;
  const productTitle = data.strapiProduct.title;
  const productImage = getImage(data.strapiProduct.image.desktop.localFile);
  const productDesc = data.strapiProduct.desc.data.desc;

  const productFeatures = data.strapiProduct.features.data.features;
  const productIncludes = data.strapiProduct.includes;
  console.log(data);

  return (
    <Layout>
      <Seo title={productTitle.split(" ")[0]} />
      <HeaderWrapper />
      <ContentWrapper>
        <BackNavButton />

        <AboutProductWrapper>
          <div className="product-img">
            <GatsbyImage image={productImage!} alt="product-img" />
          </div>
          <div className="product-desc">
            {isProductNew ? (
              <TypographyOverline className="product-new">
                New product
              </TypographyOverline>
            ) : null}

            <div className="product-title">
              <TypographyH2> {productTitle}</TypographyH2>
            </div>
            <div className="product-descText">
              <TypographyBody>{productDesc}</TypographyBody>
            </div>
            <div className="product-price">{`$ ${productPrice}`}</div>
            <div className="product-desc-actions">
              <Counter count={count} />
              <Button title="ADD TO CART" variant={mainButton} />
            </div>
          </div>
        </AboutProductWrapper>
        <AttachmentProductWrapper>
          <div className="product-features">
            <TypographyH3>Features</TypographyH3>
            <TypographyBody>
              <ReactMarkdown>{productFeatures}</ReactMarkdown>
            </TypographyBody>
          </div>
          <div className="product-attachment">
            <div>
              <TypographyH3>IN THE BOX</TypographyH3>
              {productIncludes.map((item) => {
                return (
                  <div key={item.id} className="product-attachment-item">
                    <div className="quantity">
                      <TypographyBody color="#D87D4A">{`${item.quantity}x`}</TypographyBody>
                    </div>
                    <div className="name">
                      <TypographyBody>{item.item}</TypographyBody>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AttachmentProductWrapper>
        <GalleryProductWrapper>
          <div></div>
          <div></div>
        </GalleryProductWrapper>
        <OtherProductsWrapper></OtherProductsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default ProductTemplate;

export const query = graphql`
  query MyQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
      price
      isNew
      desc {
        data {
          desc
        }
      }
      image {
        desktop {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      features {
        data {
          features
        }
      }
      gallery {
        first {
          desktop {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        second {
          desktop {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        third {
          desktop {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      others {
        image {
          desktop {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        id
      }
      includes {
        item
        quantity
        id
      }
    }
  }
`;
