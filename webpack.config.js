const path = require('path');
const isProduction = process.env.NODE_ENV == "production";
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'index.bundle.js'
    },
    devServer: {
      open: true,
      host: "localhost",
      port: 3010
    },
    plugins: [
      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
      rules: [
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset",
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
            test: /.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};