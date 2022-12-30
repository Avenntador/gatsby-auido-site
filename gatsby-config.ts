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
                    first: {
                      populate: {
                        desktop: "*",
                        tablet: "*",
                        mobile: "*",
                      },
                    },
                    second: {
                      populate: {
                        desktop: "*",
                        tablet: "*",
                        mobile: "*",
                      },
                    },
                    third: {
                      populate: {
                        desktop: "*",
                        tablet: "*",
                        mobile: "*",
                      },
                    },
                  },
                },
                others: {
                  populate: {
                    image: {
                      populate: {
                        desktop: "*",
                        tablet: "*",
                        mobile: "*",
                      },
                    },
                  },
                },
                includes: "*",
                image: {
                  populate: {
                    desktop: "*",
                    tablet: "*",
                    mobile: "*",
                  },
                },
                categoryImage: {
                  populate: {
                    desktop: "*",
                    tablet: "*",
                    mobile: "*",
                  },
                },
              },
            },
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "home",
            queryParams: {
              populate: {
                image_hero: {
                  populate: {
                    image: {
                      desktop: "*",
                      tablet: "*",
                      mobile: "*",
                    },
                  },
                },
                first: {
                  populate: {
                    image: {
                      desktop: "*",
                      tablet: "*",
                      mobile: "*",
                    },
                  },
                },
                second: {
                  populate: {
                    image: {
                      desktop: "*",
                      tablet: "*",
                      mobile: "*",
                    },
                  },
                },
                third: {
                  populate: {
                    image: {
                      desktop: "*",
                      tablet: "*",
                      mobile: "*",
                    },
                  },
                },
              },
            },
          },
          {
            singularName: "thumbnail",
            queryParams: {
              populate: {
                image: "*",
              },
            },
          },
          {
            singularName: "advertising",
            queryParams: {
              populate: {
                image: {
                  desktop: "*",
                  tablet: "*",
                  mobile: "*",
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
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
};

export default config;
