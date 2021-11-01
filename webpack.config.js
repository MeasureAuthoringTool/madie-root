/** @format */

const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "madie";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      static: [
        {
          directory: path.join(
            __dirname,
            "node_modules/@madie/madie-layout/dist/"
          ),
          publicPath: "/madie-layout",
        },
        {
          directory: path.join(
            __dirname,
            "node_modules/@madie/madie-editor/dist/"
          ),
          publicPath: "/madie-editor",
        },
        {
          directory: path.join(
            __dirname,
            "node_modules/@madie/madie-public/dist/"
          ),
          publicPath: "/madie-public",
        },
        {
          directory: path.join(
            __dirname,
            "node_modules/@madie/madie-auth/dist/"
          ),
          publicPath: "/madie-auth",
        },
        {
          directory: path.join(
            __dirname,
            "node_modules/@madie/madie-components/dist/"
          ),
          publicPath: "/madie-components",
        },
        {
          directory: path.join(__dirname, "local-dev-env"),
          publicPath: "/env-config",
        },
        {
          directory: path.join(__dirname, "local-dev-env"),
          publicPath: "/importmap",
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
        favicon: path.resolve("src/assets/favicons/favicon.ico"),
      }),
      new WebpackPwaManifest({
        name: "MADiE",
        short_name: "MADiE",
        icons: [
          {
            src: path.resolve("src/assets/favicons/android-chrome-192x192.png"),
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: path.resolve("src/assets/favicons/android-chrome-512x512.png"),
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
      }),
    ],
  });
};
