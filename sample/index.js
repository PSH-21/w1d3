var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.red('!');
console.log(message);

console.log (chalk.blue.bgRed.bold('Check out this!'));

//