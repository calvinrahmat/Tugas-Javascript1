const name = [
	'Abigail',
	'Alexandra',
	'Fatih',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'fatih',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope',
	'Diani',
	'fatih',
	'carol',
	'fatih',
	'Faith',
];

const findRepeatName = () => {
	for (let i = 0; i < name.length - 1; i++) {
		for (let j = i + 1; j < name.length - 1; i++) {
			if (name[i] == name[j]) console.log(name[j]);
		}
	}
};

findRepeatName();
