module.exports = {
  // ...existing code...
  module: {
    rules: [
      // ...existing code...
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      // ...existing code...
    ],
  },
  // ...existing code...
};