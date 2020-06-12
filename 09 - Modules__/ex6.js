/* Faça o output do terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk */

const chalk = require('chalk');

console.log(chalk.bold('Bold'), chalk.inverse("Inverse"), chalk.underline('Underline'))

console.log(chalk.green('Verde'), chalk.yellow('Amarelo'), chalk.magenta('Magenta'))
console.log(chalk.cyan('Ciano'), chalk.red('Vermelho'), chalk.gray('Cinza'))

console.log(chalk.bgGreen.bold('Fundo Verde'))