const { i18n } = require("./next-i18next.config");
const withLess = require("next-with-less");
const path = require("path");

module.exports = {
  reactStrictMode: true,
  i18n,
  ...withLess({}),
  env: {
    MAP_ACCESS_KEY: process.env.MAP_ACCESS_KEY,
  },
};
