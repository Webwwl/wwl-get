const chalk = require('chalk')
const path = require('path')

const green = (str) => console.log(chalk.green(str))
const yellow = (str) => console.log(chalk.yellow(str))
const red = (str) => console.log(chalk.red(str))

const resolveP = (p) => path.resolve(__dirname, p)

module.exports = { green, yellow, red, resolveP }