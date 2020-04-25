const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  env: {
    apiUrl: 'https://www.googleapis.com/books/v1',
  },
  assetPrefix: !debug ? '/google-books/' : ''
}