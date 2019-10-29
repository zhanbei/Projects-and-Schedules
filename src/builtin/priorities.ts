'use strict';

import {withPercent} from '../types/with-percent';

const p = withPercent;

export const OPTIONALITY = {
	REQUIRED: p(100),
	NECESSARY: p(100),
	NEED: p(90),
	RECOMMENDED: p(80),
	NICE_TO_HAVE: p(70),
	OPTIONAL: p(50),
	NORMAL: p(50),
	FORBIDDEN: p(0),
};

export const OPTIONS = {
	PRIMARY: p(100),
	SECONDARY: p(80),
	NORMAL: p(50),
	MINOR: p(30),
};

export const IMPORTANCE = {
	CRITICAL: p(100),
	IMPORTANT: p(90),
	NORMAL: p(50),
	UNIMPORTANT: p(30),
};

export const PRIORITY = {
	...OPTIONALITY,
	...OPTIONS,
	...IMPORTANCE,
};

// #Deadline
export const URGENCY = {
	EMERGENCY: p(100),
	URGENT: p(90),
	NORMAL: p(50),
	CASUAL: p(10),
};
