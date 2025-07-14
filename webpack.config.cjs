const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const providePlugin = new webpack.ProvidePlugin({
  process: "process/browser",
  Buffer: ["buffer", "Buffer"],
});

module.exports = (env, argv) => ({
  entry: "./src/madie-root-config.ts",
  mode: argv.mode || "development",
  target: ["web"],
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "madie-root-config.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // needed for import maps
    module: true,
    library: {
      type: "module",
    },
    environment: {
      module: true,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { modules: false }],
            ["@babel/preset-react", { runtime: "automatic" }],
            "@babel/preset-typescript",
          ],
          plugins: [
            ["@babel/plugin-transform-runtime", { useESModules: true }],
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|woff2?|eot|ttf|otf)$/i,
        type: "asset/resource", // emits a separate file and exports the URL
      },
    ],
  },
  externalsType: "module",
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "single-spa": "single-spa",
    "@madie/madie-layout": "@madie/madie-layout",
    "@madie/madie-editor": "@madie/madie-editor",
    "@madie/madie-auth": "@madie/madie-auth",
    "@madie/madie-measure": "@madie/madie-measure",
    "@madie/madie-cql-library": "@madie/madie-cql-library",
    "@madie/madie-util": "@madie/madie-util",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "src/index.ejs",
      templateParameters: {
        isLocal: env && env.isLocal,
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
    providePlugin,
  ],
  devServer: {
    hot: false, // HMR not supported with output.module
    liveReload: true,
    historyApiFallback: true, // <-- add this line
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 9000,
    static: [
      {
        directory: path.join(__dirname, "src/assets/favicons"),
        publicPath: "/assets/favicons",
      },
      {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "local-dev-env"),
        publicPath: "/env-config",
      },
    ],
  },
});
