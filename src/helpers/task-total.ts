'use strict';


export const withTotal = (number: number): string => {
	return number + 'h';
};

// Parse the total to number of hours.
// 2h, 3hrs, 4hours, 5wks, 6weeks, 7months
export const parseTotal = (total: string, dayHours: number = 8): number => {
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
