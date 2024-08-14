const packageJson = require("./package.json");

module.exports = (ctx) => ({
  plugins: {
    cssnano: ctx.env === "production" ? { preset: "default" } : false,
    "postcss-banner": {
      banner: `${packageJson.name} v${packageJson.version} | ${packageJson.license} License | github.com/hiro0218/shokika.css/`,
      inline: true,
      important: true,
    },
  },
});
