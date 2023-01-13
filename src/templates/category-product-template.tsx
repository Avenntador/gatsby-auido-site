import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import {
  TypographyBody,
  TypographyH2,
  TypographyOverline,
} from "../components/typography";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button, { mainButton } from "../components/Buttons";
import Seo from "../components/Seo";

type ProductDataType = {
  allStrapiProduct: {
    nodes: {
      categories: {
        title: string;
      }[];
      isNew: boolean;
      title: string;
      desc: {
        data: {
          desc: string;
        };
      };
      id: string;
      slug: string;
      categoryImage: {
        desktop: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: any;
            };
          };
        };
      };
    }[];
  };
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 33.6rem;
  position: relative;
  background-color: var(--color-black-primary);

  h2 {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const ContentWrapper = styled.main`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 12rem 0 20rem 0;

  & > *:not(:last-child) {
    margin-bottom: 16rem;
  }

  .product {
    height: 56rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .product-desc {
      max-width: 44.5rem;
    }

    .product-img {
      max-width: 54rem;
      border-radius: 0.8rem;
      overflow: hidden;
    }

    .product-new {
      color: var(--color-orange-primary);
      margin-bottom: 1.6rem;
      opacity: 1;
    }

    .product-title {
      margin-bottom: 3.2rem;
    }

    .product-descText {
      margin-bottom: 4rem;
    }
  }
`;

const CategoryProductTemplate = ({
  data,
  pageContext: { slug },
}: {
  data: ProductDataType;
  pageContext: { slug: string };
}) => {
  const productsData = data.allStrapiProduct.nodes;

  return (
    <Layout>
      <Seo title={slug.toUpperCase()} />
      <HeaderWrapper>
        <TypographyH2>{slug}</TypographyH2>
      </HeaderWrapper>
      <ContentWrapper>
        {productsData.map((product, index) => {
          const image = getImage(product.categoryImage.desktop.localFile);
          const isNew = product.isNew;
          const desc = product.desc.data.desc;
          const id = product.id;
          const title = product.title;
          const slug = product.slug;
          const category = product.categories[0].title;

          const descElement = (
            <>
              {isNew ? (
                <TypographyOverline className="product-new">
                  NEW PRODUCT
                </TypographyOverline>
              ) : null}
              <TypographyH2 className="product-title">{title}</TypographyH2>
              <TypographyBody className="product-descText">
                {desc}
              </TypographyBody>
              <Button
                to={`${category}/${slug}`}
                variant={mainButton}
                title="See product"
              />
            </>
          );

          const imgElement = <GatsbyImage image={image!} alt="product-img" />;

          if (index % 2 === 0) {
            return (
              <div key={id} className="product">
                <div className="product-img">{imgElement}</div>
                <div className="product-desc">{descElement}</div>
              </div>
            );
          }
          return (
            <div key={id} className="product">
              <div className="product-desc">{descElement}</div>
              <div className="product-img">{imgElement}</div>
            </div>
          );
        })}
      </ContentWrapper>
    </Layout>
  );
};

export default CategoryProductTemplate;

export const query = graphql`
  query($slug: String!) {
    allStrapiProduct(
      sort: { title: DESC }
      filter: { categories: { elemMatch: { title: { eq: $slug } } } }
    ) {
      nodes {
        isNew
        title
        categories {
          title
        }
        desc {
          data {
            desc
          }
        }
        id
        slug
        categoryImage {
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
  }
`;
