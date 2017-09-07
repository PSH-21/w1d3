function map(arr, cb) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    array.push(cb(arr[i]));
  }
  return array;
}



var words = ["ground", "control", "to", "major", "tom"];
console.log(
  map(words, function(word) {
    return word.length;
  }),

  map(words, function(word) {
    return word.toUpperCase();
  }),

  map(words, function(word) {
    return word.split('').reverse().join('');
  })
);

