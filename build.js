const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./script.js",
  mode: "development",
  module: {
    rules: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    ]
  },
  output: {
    path: path.resolve("./"),
    filename: "bundle.js",
  },
};

const onComplete = (error, stats) => {
  if (error) {
    console.error(error);
  } else {
    console.log(stats.toString());
  }
};

webpack(config, onComplete)