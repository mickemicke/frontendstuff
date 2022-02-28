const path = require("path");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { getLoader, loaderByName, ESLINT_MODES } = require("@craco/craco");
// const { getPlugin, pluginByName } = require("@craco/craco/lib/webpack-plugins");

const packages = ["components", "common"];
const absolutePaths = [];

packages.forEach((item) => {
  absolutePaths.push(path.join(__dirname, `../../packages/${item}`));
});

module.exports = {
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

    //   webpackConfig.plugins = [
    //     ...webpackConfig.plugins,
    //     new TsconfigPathsPlugin({
    //       configFile: path.join(__dirname, "tsconfig.json"),
    //     }),
    //   ];

      // const { match: eslintPlugin } = getPlugin(
      //   webpackConfig,
      //   pluginByName("ESLintWebpackPlugin"),
      // );
      // eslintPlugin.options.context = __dirname;
      // eslintPlugin.options.files = ["src"];

      return webpackConfig;
    },
  },
  eslint: {
    enable: true,
    mode: ESLINT_MODES.extends,
  },
};