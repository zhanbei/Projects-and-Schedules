'use strict';

// A relatively complete development term, often being titled as a middle-term plan,
// during which tasks planned are expected to be accomplished as expected.
// Think about the problems about delaying and multiple schedules.
// It may be treed as well, included and chained.
// A considerable plan may be divided as several staged development terms.
// Total = (A -> A1 + A2 + A3) + (B -> B1 + B2 + B3)
export interface IDevTerms {
	name: string;
	from?: number;
	to?: number;
}

export interface ISchedule {
	// The expected duration calculated.
	total: string;
	from?: number;
	to?: number;
	deadline?: number;
}

export const newSchedule = (total: string, deadline?: number, from?: number, to?: number): ISchedule => ({total, deadline, from, to});
newSchedule('2h');