
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-creative-cursor.cjs.development.js')
} else {
  module.exports = require('./react-creative-cursor.cjs.development.js')
}
