require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-audio-site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "product",
            queryParams: {
              populate: {
                gallery: {
                  populate: {
                    gallery: {
                      populate: {
                        image: "*",
                      },
                    },
                  },
                },
                categoryImage: {
                  populate: {
                    image: "*",
                  },
                },
                includes: "*",
                others: {
                  populate: {
                    images: {
                      populate: {
                        image: "*",
                      },
                    },
                  },
                },
                product_image: {
                  populate: {
                    image: "*",
                  },
                },
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "home",
            queryParams: {
              populate: {
                homeHeroImage: {
                  populate: {
                    images: {
                      populate: {
                        image_hero: "*",
                      },
                    },
                  },
                },
                section: {
                  populate: {
                    image: "*",
                  },
                },
              },
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data/home`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `sharedDesktopImages`,
        path: `${__dirname}/data/shared`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `dataAll`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
};

export default config;
