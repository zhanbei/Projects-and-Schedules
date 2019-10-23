'use strict';

import {IMixedEntry} from '../types/entry';

const tab = (count: number) => '\t'.repeat(count);

const taskToMd = (task: IMixedEntry, depth: number): string => {
	let md = '';
	md += `${tab(depth)}- ${task.name}\n`;
	if (task.children) {md += toMarkdown(task.children, depth + 1);}
	return md;
};

const toMarkdown = (tasks: IMixedEntry[], depth: number): string => {
	let md = '';
	const dependencies: IMixedEntry[] = [];
	const _dependencies = new Map();
	md += tasks.map(task => taskToMd(task, depth)).join('');
	tasks.map(task => task.dependents ? task.dependents.map(task => {
		if (_dependencies.get(task)) {return;}
		_dependencies.set(task, true);
		dependencies.push(task);
		return task;
	}) : undefined);
	md += dependencies.map(task => taskToMd(task, depth)).join('');
	return md;
};

export const convertToMarkdown = (tasks: IMixedEntry[]): string => toMarkdown(tasks, 0);
