// The second argument/parameter is expected to be a function
/*
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

function forEvery(list, cb) {
  for (var i = 0; i < list.length; i++) {
    cb(list[i], i)
  }
}

/*
forEvery([1, 2, 3], function(item, index) {
  console.log(`${item} at index ${index}`);
});
*/

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }
  return o;
}