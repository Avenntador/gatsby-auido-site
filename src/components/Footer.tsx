import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Categories } from "./Layout";
import { TypographyBody } from "./typography";

// TODO: fix repeating nav-list

type footerDataType = {
  strapiFooter: {
    copyRightText: string;
    desc: {
      data: {
        desc: string;
      };
    };
    links: {
      link: {
        localFile: {
          publicURL: string;
          id: string;
        };
      };
    }[];
  };
};

const FooterContainer = styled.footer`
  background-color: var(--color-black-primary);
  color: #ffffff;
  padding: 7.5rem 0 4.8rem 0;

  .footer-content {
    max-width: var(--footer-max-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer-nav {
      color: white;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3.6rem;

      .logo {
        cursor: pointer;
      }

      .nav-list {
        list-style: none;
        display: flex;
        text-transform: uppercase;

        .nav-list-item {
          margin-left: 3.4rem;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 2.5rem;
          letter-spacing: 0.2rem;
          cursor: pointer;
          text-decoration: none;
          color: var(--color-white);

          &:hover {
            color: var(--color-orange-primary);
          }
        }
      }
    }

    .footer-main {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-bottom: 5.6rem;

      .footer-desc {
        flex: 0.8;
      }

      .footer-links {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        & > * {
          margin-left: 1.6rem;

          &:hover {
            cursor: pointer;
            filter: invert(56%) sepia(47%) saturate(659%) hue-rotate(336deg)
              brightness(91%) contrast(84%);
          }
        }
      }
    }
  }
`;

// TODO: FIX MESS

const Footer: React.FC<
  Categories & {
    socials: {
      socialLogo: {
        localFile: {
          publicURL: string;
        };
      };
      slug: string;
    }[];
  }
> = ({ categories, socials, logo }) => {
  const footerData: footerDataType = useStaticQuery(getFooterData);

  const linksArray = footerData.strapiFooter.links;
  const desc = footerData.strapiFooter.desc.data.desc;
  const copyRightText = footerData.strapiFooter.copyRightText;

  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="footer-nav">
          <Link to="/">
            <img className="logo" src={logo} alt="audiophile" />
          </Link>

          <div className="nav-list">
            <Link className="nav-list-item" to="/">
              home
            </Link>

            {categories.map((category, index) => {
              return (
                <Link
                  className="nav-list-item"
                  key={index}
                  to={`/${category.title}`}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-desc">
            <TypographyBody color="#ffffff">{desc}</TypographyBody>
          </div>
          <div className="footer-links">
            {linksArray.map((item) => {
              const link = item.link.localFile;
              return <img key={link.id} src={link.publicURL} alt="q" />;
            })}
          </div>
        </div>

        <div className="footer-copyright">
          <TypographyBody color="#ffffff">{copyRightText}</TypographyBody>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const getFooterData = graphql`
  query getFooterData {
    strapiFooter {
      copyRightText
      desc {
        data {
          desc
        }
      }
      links {
        link {
          localFile {
            publicURL
            id
          }
        }
      }
    }
  }
`;
