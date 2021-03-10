const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: ["./**/*.js", "./src/**/*.jsx"],
      rejected: true,
      css: ["./src/**/*.css"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
