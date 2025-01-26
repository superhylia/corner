// .eleventy.js
const readingtime = require("@myxotod/eleventy-plugin-readingtime");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(readingtime, {
    wordsPerMinute: 200,
    suffixDisplay: true,
    suffixText: 'min',
    prefixDisplay: true,
    prefixText: '~',
    verbose: false
  });
};
