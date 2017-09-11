/**
 * @augments AKV
 * @class AKVStatus
 */
'use strict'

const {AKV, fileHash} = require('akv')
const aglob = require('aglob')

/** @lends AKVStatus */
class AKVStatus extends AKV {
  constructor (filename, options) {
    super(filename, options)
  }

  /**
   * Detect unknown status data
   * @param {string[]} filenames
   * @returns {Promise}
   */
  async filterStatusUnknown (filenames) {
    const s = this
    const filtered = []
    for (const filename of filenames) {
      const knownHash = await s.get(filename)
      const hash = await fileHash(filename)
      const known = hash && knownHash && (hash === knownHash)
      if (!known) {
        filtered.push(filename)
      }
    }
    return filtered
  }

  /**
   * @param {string[]} filenames
   * @returns {*|Promise}
   */
  async saveStatus (filenames) {
    const s = this
    for (const filename of filenames) {
      const hash = await fileHash(filename)
      await s.set(filename, hash)
    }
    await s.commit()
  }
}

module.exports = AKVStatus
