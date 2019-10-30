'use strict';

import {parseTotal, withTotal} from '../helpers/task-total';
import {IMixedEntry} from '../types/entry';
import {newRequiredSchedule} from '../types/schedules';

// By default, all tasks are:
// - 0 percent of progress
// - predicted as 2 hours
// - 100% required
const newDefaultTaskSchedule = () => newRequiredSchedule(
	'2h', undefined, 0,
);

// How many hours total.
const unifySchedules = (task: IMixedEntry, depth: number): number => {
	// Stop when dead loop detected.
	if (depth > 100) {throw new Error('Too deep structure: ' + depth);}

	task.schedule = task.schedule || newDefaultTaskSchedule();
	if (!task.children || task.children.length === 0) {
		const {total, progress} = task.schedule;
		task.schedule.progress = progress || 0;
		task.schedule.total = total || '2h';
		return parseTotal(task.schedule.total);
	}
	const total = task.children.map(task => unifySchedules(task, depth + 1)).reduce((p, c) => p + c, 0);
	task.schedule.total = withTotal(total);
	return total;
};

export const doUnifySchedules = (task: IMixedEntry): any => unifySchedules(task, 0);