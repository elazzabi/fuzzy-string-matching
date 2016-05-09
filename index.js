'use strict';
const lcs = require('longest-common-subsequence');

module.exports = function (firstSequence, secondSequence, caseSensitive) {
	let lcsResultLen = lcs(firstSequence, secondSequence, caseSensitive).length;

	if (lcsResultLen === 0) {
		return 0;
	}

	return lcsResultLen * lcsResultLen / (firstSequence.length * secondSequence.length);
};
