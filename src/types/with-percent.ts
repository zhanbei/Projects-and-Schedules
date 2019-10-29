'use strict';

// Transform a percent[0-100] to the real percent[0-100][10000-20000].
// 85.5 => 18550
export const withPercent = (percent: number): number => {
	if (percent != Math.round(percent)) {
		percent = 10000 + Math.round(percent * 100);
	}
	return percent;
};

// 18550 => 85.5
export const parsePercent = (percent: number): number => {
	if (percent > 10000) {
		percent = (percent - 10000) / 100;
	}
	return percent;
};