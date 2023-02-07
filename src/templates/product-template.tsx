import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ActionButton  from "../components/Buttons/ActionButton";
import { backNavButton } from "../components/Buttons/buttonStyle";
import { graphql, navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import Gallery from "../components/product-components/Gallery";
import Features from "../components/product-components/Features";
import About from "../components/product-components/About";
import Others from "../components/product-components/Others";
import Thumbnails from "../components/Thumbnails";
import Advertise from "../components/Advertise";

type ProductType = {
  strapiProduct: {
    id: string;
    title: string;
    price: number;
    isNew: boolean;
    cartTitle: string;
    cartImg: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
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
    gallery: {
      first: any;
      second: any;
      third: any;
    };
    others: any;
    features: {
      data: {
        features: string;
      };
    };
    includes: any;
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
  padding: 7.9rem 0 0 0;

  & > * {
    margin-bottom: 16rem;
  }

  & > *:first-child {
    margin-bottom: 5.6rem;
  }
`;

// TODO: фикс навбар размеры, мб композицию

const ProductTemplate = ({ data }: { data: ProductType }) => {
  // about
  const aboutProduct = {
    productId: data.strapiProduct.id,
    isProductNew: data.strapiProduct.isNew,
    productPrice: data.strapiProduct.price,
    productTitle: data.strapiProduct.title,
    productImage: getImage(data.strapiProduct.image.desktop.localFile),
    productDesc: data.strapiProduct.desc.data.desc,
    productCartImg: getImage(data.strapiProduct.cartImg.localFile),
    productCartTitle: data.strapiProduct.cartTitle,
  };

  // features and includes
  const productFeatures = {
    feature: data.strapiProduct.features.data.features,
    includes: data.strapiProduct.includes,
  };

  // gallery
  const galleryImages = {
    first: data.strapiProduct.gallery.first,
    second: data.strapiProduct.gallery.second,
    third: data.strapiProduct.gallery.third,
  };

  // others
  const productOtherProducts = data.strapiProduct.others;

  return (
    <Layout>
      <Seo title={aboutProduct.productTitle.split(" ")[0]} />
      <HeaderWrapper />
      <ContentWrapper>
        <ActionButton
          onClick={() => navigate(-1)}
          title="Go back"
          variant={backNavButton}
        />
        <About about={aboutProduct} />
        <Features features={productFeatures} />
        <Gallery images={galleryImages} />
        <Others others={productOtherProducts} />
        <Thumbnails />
        <Advertise />
      </ContentWrapper>
    </Layout>
  );
};

export default ProductTemplate;

export const query = graphql`
  query MyQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      id
      title
      price
      isNew
      cartTitle
      cartImg {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
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
        category {
          title
        }
        name
        id
        slug
      }
      includes {
        item
        quantity
        id
      }
    }
  }
`;
