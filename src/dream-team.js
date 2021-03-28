const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let name = [];
	if (!Array.isArray(members)) return false;
	for (let firstLetter of members) {
		if (typeof firstLetter === 'string') {
			firstLetter = firstLetter.trim();
			console.log(firstLetter);
			if (firstLetter != '') {
				name.push(firstLetter[0].toUpperCase());
			}
		}
	}
	return name.sort().join('');
};
