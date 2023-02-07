import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  TypographyOverline,
  TypographyH1,
  TypographyBody,
  TypographyH4,
} from "../components/typography";
import Seo from "../components/Seo";
import Thumbnails from "../components/Thumbnails";
import Advertise from "../components/Advertise";

import DefaultButton from "../components/Buttons/DefaultButton";
import {
  mainButton,
  tertiaryButton,
  quartiaryButton,
} from "../components/Buttons/buttonStyle";

type HomeData = {
  strapiHome: {
    header_slug: string;
    category: {
      title: string;
    };
    image_hero: {
      desktop: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
    desc: {
      data: {
        desc: string;
      };
    };
    title: string;
    sub_title: string;
    first: {
      name: string;
      slug: string;
      category: {
        title: string;
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
      feature: {
        localFile: {
          publicURL: string;
        };
      };
      desc: {
        data: {
          desc: string;
        };
      };
    };
    second: {
      name: string;
      slug: string;
      category: {
        title: string;
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
    };
    third: {
      name: string;
      slug: string;
      category: {
        title: string;
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
    };
  };
};

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

    /* typography H1 */
    h1 {
      margin: 2.4rem 0;
      color: #ffffff;
    }

    /* typography BODY */
    div {
      max-width: 34.9rem;
      color: #ffffff;
    }

    /* colored button */
    a {
      margin-top: 4rem;
    }
  }
`;

const ContentWrapper = styled.main`
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 12rem 0 20rem 0;
`;

const HomePageFirstSection = styled.div`
  margin: 16.8rem 0 4.8rem 0;
  height: 56rem;
  border-radius: 0.8rem;
  background-color: var(--color-orange-primary);
  position: relative;
  overflow: hidden;
  z-index: 100;

  .first-section-desc {
    max-width: 34.9rem;
    position: absolute;
    top: 50%;
    right: 8%;
    transform: translateY(-50%);
    z-index: 50;

    h1 {
      color: #ffffff;
      margin-bottom: 2.4rem;
    }

    div {
      margin-bottom: 4rem;
      color: #ffffff;
    }
  }

  .first-section-img {
    max-width: 41rem;
    position: absolute;
    left: 20%;
    bottom: -2%;
    transform: translateX(-20%);

    .img {
      position: relative;
      z-index: 50;
    }

    .pattern {
      position: absolute;
      left: -65%;
      top: -35%;
      z-index: 1;
    }
  }
`;

const HomePageSecondSection = styled.div`
  margin-bottom: 4.8rem;
  height: 32rem;
  border-radius: 0.8rem;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .second-section-desc {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);

    h4 {
      margin-bottom: 3.2rem;
    }
  }
`;

const HomePageThirdSection = styled.div`
  margin-bottom: 20rem;
  display: flex;
  justify-content: space-between;
  height: 32rem;

  & > div {
    overflow: hidden;
    flex: 0.49;
    border-radius: 0.8rem;
    position: relative;
  }

  .right {
    background-color: var(--color-gray-primary);

    h4 {
      margin-bottom: 3.2rem;
    }

    .third-section-desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const IndexPage = () => {
  const homeData: HomeData = useStaticQuery(getHomeData);

  // Header data
  const heroImage = getImage(homeData.strapiHome.image_hero.desktop.localFile);
  const title = homeData.strapiHome.title;
  const desc = homeData.strapiHome.desc.data.desc;
  const subTitle = homeData.strapiHome.sub_title;
  const headerSlug = homeData.strapiHome.header_slug;
  const category = homeData.strapiHome.category.title;

  // First content data
  const firstContentTitle = homeData.strapiHome.first.name;
  const patternImage = homeData.strapiHome.first.feature.localFile.publicURL;
  const firstContentDesc = homeData.strapiHome.first.desc.data.desc;
  const firstContentImage = getImage(
    homeData.strapiHome.first.image.desktop.localFile
  );
  const firstSlug = `${homeData.strapiHome.first.category.title}/${homeData.strapiHome.first.slug}`;

  // Second content data
  const secondContentTitle = homeData.strapiHome.second.name;
  const secondContentImage = getImage(
    homeData.strapiHome.second.image.desktop.localFile
  );
  const secondSlug = `${homeData.strapiHome.second.category.title}/${homeData.strapiHome.second.slug}`;

  // Third content data
  const thirdContentTitle = homeData.strapiHome.third.name;
  const thirdContentImage = getImage(
    homeData.strapiHome.third.image.desktop.localFile
  );
  const thirdSlug = `${homeData.strapiHome.third.category.title}/${homeData.strapiHome.third.slug}`;

  return (
    <Layout>
      <GatsbyImage image={heroImage!} alt="Some" />
      <HeaderWrapper>
        <div className="header-description">
          <TypographyOverline>{subTitle}</TypographyOverline>
          <TypographyH1>{title}</TypographyH1>
          <TypographyBody>{desc}</TypographyBody>
          <DefaultButton
            to={`${category}/${headerSlug}`}
            variant={mainButton}
            title="See product"
          />
        </div>
      </HeaderWrapper>

      <ContentWrapper>
        <Thumbnails />

        <HomePageFirstSection>
          <div className="first-section-desc">
            <TypographyH1>{firstContentTitle}</TypographyH1>
            <TypographyBody>{firstContentDesc}</TypographyBody>
            <DefaultButton
              to={firstSlug}
              variant={quartiaryButton}
              title="See product"
            />
          </div>
          <div className="first-section-img">
            <GatsbyImage
              className="img"
              image={firstContentImage!}
              alt="Some"
            />
            <img className="pattern" src={patternImage} alt="a" />
          </div>
        </HomePageFirstSection>

        <HomePageSecondSection>
          <div className="second-section-desc">
            <TypographyH4>{secondContentTitle}</TypographyH4>
            <DefaultButton
              to={secondSlug}
              variant={tertiaryButton}
              title="See product"
            />
          </div>
          <GatsbyImage image={secondContentImage!} alt="Some" />
        </HomePageSecondSection>

        <HomePageThirdSection>
          <div className="left">
            <GatsbyImage image={thirdContentImage!} alt="Some" />
          </div>
          <div className="right">
            <div className="third-section-desc">
              <TypographyH4>{thirdContentTitle}</TypographyH4>
              <DefaultButton
                to={thirdSlug}
                variant={tertiaryButton}
                title="See product"
              />
            </div>
          </div>
        </HomePageThirdSection>

        <Advertise />
      </ContentWrapper>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Home" />;
};

export default IndexPage;

const getHomeData = graphql`
  query getHome {
    strapiHome {
      title
      sub_title
      header_slug
      category {
        title
      }
      desc {
        data {
          desc
        }
      }
      image_hero {
        desktop {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      first {
        slug
        name
        category {
          title
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
        feature {
          localFile {
            publicURL
          }
        }

        desc {
          data {
            desc
          }
        }
      }
      second {
        name
        slug
        category {
          title
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
      }
      third {
        name
        slug
        category {
          title
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
      }
    }
  }
`;
