var h = prompt('Enter the number of tree higth:');

function drawTree (h) {
	for (i = 0 ; i <= h ; i++) {
		var star = '';
		for (j = 0; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
};



