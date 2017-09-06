function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var args = process.argv.slice(2);
function rollDice(args) {
  var count = 0;
  while (count < args) {
    console.log(getRandomIntInclusive(1,6));
    count++;
  }
}

rollDice(args);
