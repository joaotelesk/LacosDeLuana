const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@lacosdeluana/design-system",
  "@lacosdeluana/utils",
]);
/**
 * @type {import("next").NextConfig;}
 */

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
