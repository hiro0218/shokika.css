const packageJson = require("./package.json");

module.exports = (ctx) => ({
  plugins: {
    "postcss-banner": {
      banner: `${packageJson.name} v${packageJson.version} | ${packageJson.license} License | github.com/hiro0218/shokika.css/`,
      inline: true,
      important: true,
    },
    "postcss-lightningcss": {
      lightningcssOptions: {
        minify: ctx.env === "production",
        sourceMap: true,
        cssModules: false,
        drafts: {
          nesting: false,
        },
      }
    },
  },
});
