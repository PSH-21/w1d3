function countLetters(phrase) {
	var count = {};
	for (var i = 0; i < phrase.length; i++) {
		if (phrase[i] in count) {
			count[phrase[i]] +=1;
		} else if (phrase[i] === ' ') {
		} else { count[phrase[i]] = 1;
		}
	}
	console.log(count);
}

countLetters("lighthouse in the house");
