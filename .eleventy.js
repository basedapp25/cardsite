module.exports = function(eleventyConfig) {
  // Collection: all markdown cards in src/cards
  eleventyConfig.addCollection("cards", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cards/*.md");
  });
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");

  return {
    dir: {
      input: "src",
      includes: "layouts",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
