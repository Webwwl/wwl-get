const fs = require('fs')

const { green, yellow, red, resolveP } = require('./utils.js')

const package_version = require('../package.json').version
const source_content = fs.readFileSync(resolveP('./index.js'), 'utf-8')
const version_reg = /\.version\(["'](.*?)["']\)/

const source_version = source_content.match(version_reg)[1]

if (source_version !== package_version) {
  throw new Error('version not same')
}


