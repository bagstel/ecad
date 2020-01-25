const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    require("postcss-easy-import")({
      extensions: ".scss"
    }),
    require('postcss-sassy-mixins')(),
    require("autoprefixer")({
      cascade: false
    }),
    require("postcss-rgb"),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/images/icons"
    }),
    require("cssnano"),
    require("postcss-pxtorem")({
      rootValue: 10,
      propList: ["*", "!*border*", "PX"],
      selectorBlackList: [/^html$/]
    })
  ]
};
