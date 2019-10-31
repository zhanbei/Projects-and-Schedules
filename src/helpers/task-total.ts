'use strict';

export const DEFAULT_HOURS_PER_DAY = 8;
export const DEFAULT_DAYS_PER_WEEK = 5;
export const DEFAULT_WEEKS_PER_MONTH = 4;

// By Hour
// 8h = 1d
// 16h = 2d
// 32h = 4d
// 40h = 5d = 1w = 1wks
// 56h = 7d
//
// By Day
// 64h = 8d
// 80h = 10d = 2w
// 120h = 15d = 3w
// 160h = 20d = 4w = 1m = 1 month
// 200h = 25d = 5w
// 320h = 40d = 8w = 2m
// 720h = 90d = 18w = 4.5m
//
// By Month
// 800h = 100d = 20w = 5m
// 2560h = 320d = 40w = 10m
//
// 3h, 30h, 38h, 56h, 8d, 12d, 40d, 120d, etc
export const withTotal = (number: number): string => {
	if (number <= 8 * DEFAULT_HOURS_PER_DAY) {return number + 'h';}
	if (number < 100 * DEFAULT_HOURS_PER_DAY || true) {return Math.round(number / DEFAULT_HOURS_PER_DAY) + 'd';}
	// FIX-ME Whether and when to use the month unit.
	return Math.round(number / DEFAULT_HOURS_PER_DAY / DEFAULT_DAYS_PER_WEEK / DEFAULT_WEEKS_PER_MONTH) + 'm';
};

// Parse the total to number of hours.
// 2h, 3hrs, 4hours, 5wks, 6weeks, 7months
export const parseTotal = (total: string, dayHours: number = DEFAULT_HOURS_PER_DAY): number => {
	total = total.trim();
	if (!total) {return 0;}
	if (total.endsWith('h')) {
		return +total.substring(0, total.length - 1);
	}
	if (total.endsWith('d')) {
		return (+total.substring(0, total.length - 1)) * dayHours;
	}
	throw new Error('unsupported total unit: ' + total);
};
