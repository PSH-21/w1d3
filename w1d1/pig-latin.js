var args = process.argv.slice(2);

function piglatin(args) {
  for (var i = 0; i < args.length; i++) {
    var word = args[i];
    if (word.length == 1) {
       word += 'ay';
       console.log(word);
    } else {
    var newword  = ''
    for (var j =1; j < word.length; j++) {
      newword += word[j];
    }
    newword += word[0] + 'ay';
    console.log(newword);
    }
  }
}

piglatin(args);

