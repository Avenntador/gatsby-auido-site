import React from "react";
import { graphql, useStaticQuery } from "gatsby";

type SeoData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Seo = ({ title }: { title: string }) => {
  const data: SeoData = useStaticQuery(getTitle);
  const metaTitle = data.site.siteMetadata.title;

  return (
    <title>
      {title} | {metaTitle}
    </title>
  );
};

export default Seo;

const getTitle = graphql`
  query getTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
