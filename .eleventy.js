module.exports = function(eleventyConfig) {
    // Collection: all markdown cards in src/cards
    eleventyConfig.addCollection("cards", function(collectionApi) {
      return collectionApi.getFilteredByGlob("cards/*.md");
    });
    
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
  