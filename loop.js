drawTree = function(a) {
	for (i = 0; i < a; i++) {
		var star = '';
			for (j = 0; j <= i; j++)
				star += '*';
		console.log(star);
	};
};
console.log(drawTree(5));