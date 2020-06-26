const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')

const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}


module.exports = withImages({})
module.exports = withLess(withSass({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
}))