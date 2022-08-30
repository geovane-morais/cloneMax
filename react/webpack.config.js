const path = require("path");
  
module.exports = [
  {
    entry: "./src/index/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/public/",
      filename: "indexMin.js",
    } 
  },
  {
    entry: "./src/signIn/signIn.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/public/",
      filename: "signInMin.js",
    } 
  },
  {
    entry: "./src/signUp/signUp.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/public/",
      filename: "signUpMin.js",
    } 
  },
];