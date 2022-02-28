const path = require("path");
const CracoAlias = require("craco-alias");

const { getLoader, loaderByName, ESLINT_MODES } = require("@craco/craco");

const packages = ["components", "common"];
const srcPackages = ["oldComponents"];
const absolutePaths = [];

packages.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `../../packages/${item}`));
});

srcPackages.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `../../src/${item}`));
});

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.json",
      },
    },
  ],
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader"),
      );

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(absolutePaths);
        console.log("Loading sources from:", match.loader.include);
      }

      return webpackConfig;
    },
  },
  eslint: {
    enable: true,
    mode: ESLINT_MODES.extends,
  },
};