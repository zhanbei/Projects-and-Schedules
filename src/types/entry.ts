'use strict';

import {IMember} from './member';
import {IModule} from './modules';
import {IProject} from './project';
import {IDevTerms} from './schedules';
import {IEntrySets} from './sets';
import {ISolution} from './solutions';
import {IStep} from './steps';
import {ITag} from './tags';
import {ITask} from './task';

// Name | Description | Comments
// type ENTRY_TYPES = 'RESEARCH' | 'DEVELOPMENT' | 'DEPLOYMENT' | 'URGENT'

export type IMixedEntry = IProject | IModule | ITask | IStep | ISolution;

export interface IBaseEntry {
	name: string;
	// Task goals and details.
	description?: string;
	// Use the parent terms if empty.
	// Multiple development terms.
	terms?: IDevTerms[];

	// Sub-tasks
	// ordered?: boolean; Are tasks ordered/depended in orders, yes or no?
	// What if it is kind of ordered, parts are ordered while others are not.
	// #Steps are ordered while #Tasks are ordered.
	children?: IMixedEntry[];
	// Possible solutions to think about, in orders of selections.
	// Usually the first one are the selected solution.
	solutions?: ISolution[];
	// Depended entries.
	dependents?: IMixedEntry[];

	// 'RESEARCH' | 'DEVELOPMENT' | 'DEPLOYMENT' | 'URGENT'
	tags?: ITag[];
	// The kinds of roles involved.
	roles?: string[];
	// Developers involved.
	members?: IMember[];
	// Extra information?
	extra?: string[];
}

// Define types and constructors, to corresponding.
export const newTypedEntry = <T extends IMixedEntry>(set: IEntrySets) =>
	(name: string, description?: string, tasks?: IMixedEntry[], dependents?: IMixedEntry[]): T => ({name, description, set, children: tasks, dependents}) as T;
