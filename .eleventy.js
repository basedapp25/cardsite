module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("cards", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/cards/*.md");
  });
  
  // Copy static assets and card_images folder
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/card_images");

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
