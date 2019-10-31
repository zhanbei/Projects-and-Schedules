'use strict';

import {parseTotal, withTotal} from '../helpers/task-total';
import {IMixedEntry} from '../types/entry';
import {newRequiredSchedule} from '../types/schedules';

// Set the default predicted (2 )hours for a regular task.
const DEFAULT_TOTAL_HOURS_PER_TASK = '2h';

// By default, all tasks are:
// - 0 percent of progress
// - predicted as 2 hours
// - 100% required
const newDefaultTaskSchedule = () => newRequiredSchedule(
	'', undefined, 0,
);

// How many hours total.
// FIX-ME Calculate current progress:
// 1. hours left;
// 2. total hours;
// 3. tasks left;
// 4. total tasks;
const unifySchedules = (task: IMixedEntry, depth: number): number => {
	// Stop when dead loop detected.
	if (depth > 100) {throw new Error('Too deep structure: ' + depth);}

	const ts = task.schedule = task.schedule || newDefaultTaskSchedule();
	ts.progress = ts.progress || 0;
	if (!task.children || task.children.length === 0) {
		// Set the default predicted (2 )hours for a regular task.
		ts.total = ts.total || DEFAULT_TOTAL_HOURS_PER_TASK;
		return parseTotal(ts.total) * (1 - ts.progress / 100);
	}
	const total = task.children.map(task => unifySchedules(task, depth + 1)).reduce((p, c) => p + c, 0);
	if (ts.total) {
		// The module is already assigned a predicted hours, which is preferred currently.
		return parseTotal(task.schedule.total) * (1 - ts.progress / 100);
	}
	task.schedule.total = withTotal(total);
	return total * (1 - ts.progress / 100);
};

export const doUnifySchedules = (task: IMixedEntry): any => unifySchedules(task, 0);
