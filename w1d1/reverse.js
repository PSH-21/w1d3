var args = process.argv.slice(2);

function reverse(args) {
  for (var i = 0; i < args.length; i++) {
    var word = args[i];
    if (word.length == 1) {
      console.log(args[i]);
    } else {
    var phrase = '';
    for (var j = word.length-1; j >= 0 ; j--) {
      phrase += word[j];
      }
    console.log(phrase);
    }
  }
}

reverse(args);