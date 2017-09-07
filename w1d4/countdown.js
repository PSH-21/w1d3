var countdownGenerator = function (x) {
  /* your code here */
  var statements = [];
  for (var i = x; i >= 0; i--) {
    if (i === 0 ) {
      statements.push('Blast Off!');
    }
    else { statements.push('T-minus ' + i + '...') }
  }

  return function() {
  	if (statements.length == 0) {  //why not statements == null || == undefined
  		console.log('Rocket\'s already gone, bub!');
  	}
    else {
      console.log(statements.shift());  //How to test types
    }
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!