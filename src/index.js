#!/usr/bin/env node

const program = require('commander')
const downloader = require('download-git-repo')
const path = require('path')
const { green, yellow, red } = require('./utils.js')

const defaultOptions = {
  type: 'webpack'
}

const gitRepos = {
  'webpack': 'direct:https://github.com/Webwwl/base_webpack.git',
  'express': 'direct:https://github.com/Webwwl/base_express.git',
  'koa': 'direct:https://github.com/Webwwl/base_koa.git'
}

program
  .version('1.0.0')
  .option('-n, --name [value]', 'floder name defalut base_webpack', '')
  .option('-t, --type [value]', 'template type "express | koa | webpack" default webpack', defaultOptions.type)
  .parse(process.argv)

const repo = gitRepos[program.type]
const floderPath = path.resolve(process.cwd(), program.name || `base_${program.type}`)

downloader(repo, floderPath, {clone: true}, (error) => {
  if (error) {
    return red(error.message)
  }
  green('download end')
})