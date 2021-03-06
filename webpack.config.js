const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css/,
        loaders: ["style", "css"],
        include: __dirname + "./src/index.js"
      }
    ]
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [ 'style-loader', 'css-loader' ]
    //   }
    // ]
  }
};
