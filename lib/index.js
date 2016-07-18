/**
 * akv store for file status
 * @module akv-status
 */

'use strict'

const create = require('./create')
const file = require('./file')
const AKVStatus = require('./akv_status')

let lib = create.bind(this)

Object.assign(lib, file, AKVStatus, {
  AKVStatus,
  create
})

module.exports = lib
