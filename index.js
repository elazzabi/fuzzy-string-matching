'use strict';

module.exports = function (firstSequence, secondSequence, caseSensitive) {
	const lcs = require('longest-common-subsequence');
	let lcsResultLen = lcs(firstSequence, secondSequence, caseSensitive).length;

	if (lcsResultLen === 0) {
		return 0;
	}

	return lcsResultLen * lcsResultLen / (firstSequence.length * secondSequence.length);
};
