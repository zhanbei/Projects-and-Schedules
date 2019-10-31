'use strict';

// A relatively complete development term, often being titled as a middle-term plan,
// during which tasks planned are expected to be accomplished as expected.
// Think about the problems about delaying and multiple schedules.
// It may be treed as well, included and chained.
// A considerable plan may be divided as several staged development terms.
// Total = (A -> A1 + A2 + A3) + (B -> B1 + B2 + B3)
import {PRIORITY, URGENCY} from '../builtin/priorities';

export interface IDevTerms {
	name: string;
	from?: number;
	to?: number;
}

export interface ISchedule {
	// Priorities are relative, especially among a series of tasks.
	// PERCENTAGE [ 0 - 100 ]
	priority: number;
	// The given #urgency when there is no #deadline.
	// How to handle the conflict with #deadline.
	urgency?: number;
	// The real deadline, the due date.
	deadline?: number;

	// The expected duration calculated.
	// The real total set by user, which is immutable.
	total: string;

	// [CACHE_VALUE] The resolved(calculated) total.
	// Use "$" or "_" as prefix?
	// Use "_" for as it would in other languages.
	// No, use "$" for whatever reason, since it looks prettier.
	// Like "$children" looks better than "_children" perhaps. l~):)
	$total: string;

	// The current progress.
	progress?: number;

	// The real time spent.
	duration?: string;
	from?: number;
	to?: number;

	createdTime: number;
}

// #Deadline matters most, while #duration as well as #from and #to will be enriched later, as the development going on.
const due = (priority: number, total: string, urgency?: number, deadline?: number, pro_dur?: number | string, from?: number, to?: number): ISchedule => {
	// pro_dur
	let progress = undefined, duration = undefined;
	if (typeof pro_dur === 'string') {
		duration = pro_dur;
		// Task is done.
		progress = 100;
	} else {
		progress = pro_dur;
	}
	return {
		priority, total, $total: total,
		deadline, duration, progress, from, to,
		createdTime: +new Date(),
	};
};

// #Deadline matters most, while #duration as well as #from and #to will be enriched later, as the development going on.
export const newSchedule = (priority: number, total: string, deadline?: number, pro_dur?: number | string, from?: number, to?: number): ISchedule =>
	due(priority, total, undefined, deadline, pro_dur, from, to);

export const newRequiredSchedule = (total: string, deadline?: number, pro_dur?: number | string, from?: number, to?: number): ISchedule =>
	due(PRIORITY.REQUIRED, total, undefined, deadline, pro_dur, from, to);

// The important thing is that the task is done,
// while #deadline as well as #from and #to is not important.
export const nextSchedule = (priority: number, total: string, pro_dur?: number | string, deadline?: number, from?: number, to?: number): ISchedule =>
	due(priority, total, undefined, deadline, pro_dur, from, to);

export const nextRequiredSchedule = (total: string, pro_dur?: number | string, deadline?: number, from?: number, to?: number): ISchedule =>
	due(PRIORITY.REQUIRED, total, undefined, deadline, pro_dur, from, to);

// Important & Urgent
export const nextUrgentImportantSchedule = (total: string, pro_dur?: number | string, deadline?: number, from?: number, to?: number): ISchedule =>
	due(PRIORITY.IMPORTANT, total, URGENCY.URGENT, deadline, pro_dur, from, to);

// Important & Casual
export const nextImportantCasualSchedule = (total: string, pro_dur?: number | string, deadline?: number, from?: number, to?: number): ISchedule =>
	due(PRIORITY.IMPORTANT, total, URGENCY.CASUAL, deadline, pro_dur, from, to);
