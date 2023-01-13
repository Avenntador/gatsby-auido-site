exports.createPages = async function ({ actions, graphql }) {
  const categoriesData = await graphql(`
    query {
      allStrapiCategory {
        nodes {
          title
          products {
            slug
          }
        }
      }
    }
  `);

  categoriesData.data.allStrapiCategory.nodes.forEach((node) => {
    actions.createPage({
      path: node.title,
      component: require.resolve(
        `./src/templates/category-product-template.tsx`
      ),
      context: { slug: node.title },
    });

    node.products.forEach((product) => {
      actions.createPage({
        path: `/${node.title}/${product.slug}`,
        component: require.resolve(`./src/templates/product-template.tsx`),
        context: { slug: product.slug },
      });
    });
  });
};
