const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

	if (!members || members.length === 0) return false;
	let name = [];

	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] == 'string') {
			let str = members[i].trimStart().split(' ');
			name.push(str[0][0].toUpperCase());
		}
	}
	return name.sort().join('');
};
