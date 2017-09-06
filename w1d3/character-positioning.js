function characterPosition(phrase) {
	var positions = {};
	for (var i = 0; i < phrase.length; i++) {
		if (phrase[i] in positions) {
			positions[phrase[i]].push(i);
		} else if (phrase[i] === ' ') {
		} else { positions[phrase[i]] = [];
			positions[phrase[i]].push(i)
		}
	}
	console.log(positions);
}

characterPosition("lighthouse in the house");