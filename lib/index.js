/**
 * akv store for file status
 * @module akv-status
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get akvStatus () { return d(require('./akv_status')) },
  get create () { return d(require('./create')) }
}
