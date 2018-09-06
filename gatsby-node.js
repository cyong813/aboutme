const path = require("path")

exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-html') {
      config.loader('null', {
        test: /react-particles-js/,
        loader: 'null-loader'
      })
    }
  }