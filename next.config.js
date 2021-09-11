const { i18n } = require("./next-i18next.config");
const withLess = require("next-with-less");
const path = require("path");

module.exports = {
  reactStrictMode: true,
  i18n,
  ...withLess({}),
  env: {
    GOOGLE_LOGIN_ID: process.env.GOOGLE_LOGIN_ID,
    FACEBOOK_LOGIN_ID: process.env.FACEBOOK_LOGIN_ID,
    MAP_ACCESS_KEY: process.env.MAP_ACCESS_KEY,
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["cdn.pixabay.com"],
  },
};
