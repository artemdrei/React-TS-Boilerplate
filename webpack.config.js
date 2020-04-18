const path = require("path");
const HTMLlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const mode = process.env.NODE_ENV;
const isDev = mode === "development";
const isProd = mode === "production";

const getOptimizationConfig = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [new TerserPlugin(), new OptimizeCssAssetsPlugin()];
  }

  return config;
};

const getFileName = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const getStyleLoader = (extra) => {
  const config = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev, // hot module replacement in dev mode
        reloadAll: true,
      },
    },
    "css-loader", // Translates CSS into CommonJS
  ];

  if (extra) config.push(extra);

  return config;
};

const getBabelLoader = (preset) => {
  const config = {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  };

  if (preset) config.options.presets.push(preset);

  return config;
};

const getPlugins = () => {
  const plugins = [
    new CleanWebpackPlugin(),
    new HTMLlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "src/assets/favicon/favicon.ico"),
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: getFileName("css"),
    }),
  ];

  if (isProd) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
};

const config = {
  context: path.resolve(__dirname, "src"),
  mode,
  entry: {
    main: ["@babel/polyfill", "./index.tsx"],
  },
  output: {
    filename: getFileName("js"),
    path: path.resolve(__dirname, "dist"),
  },
  plugins: getPlugins(),
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: getOptimizationConfig(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : "",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoader(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: getStyleLoader("sass-loader"),
      },
      {
        test: /\.(jpg|jpeg|svg|png|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|oet)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: getBabelLoader(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: getBabelLoader("@babel/preset-react"),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: getBabelLoader("@babel/preset-typescript"),
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: getBabelLoader("@babel/preset-react", "@babel/preset-typescript"),
      },
    ],
  },
};

module.exports = config;
