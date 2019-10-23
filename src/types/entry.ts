'use strict';

import {IMember} from './member';
import {IModule} from './modules';
import {IProject} from './project';
import {IDevTerms, ISchedule} from './schedules';
import {IEntrySets} from './sets';
import {ISolution} from './solutions';
import {IStep} from './steps';
import {ITag} from './tags';
import {ITask} from './task';

// Name | Description | Comments
// type ENTRY_TYPES = 'RESEARCH' | 'DEVELOPMENT' | 'DEPLOYMENT' | 'URGENT'

export type IMixedEntry = IProject | IModule | ITask | IStep | ISolution;

export type ObjectId = string;

export interface IBaseEntry {
	_id?: ObjectId;

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

	// The real deadline.
	deadline?: number;
	// Predicted schedule with predicted deadline.
	predicted?: ISchedule;
	// Real schedule with real deadline.
	real?: ISchedule;
	// Historical predictions.
	predictions?: ISchedule[];
	// Records of real historical developments times.
	histories?: ISchedule[];
	// Importance([1-10]) of the target task.
	importance?: number;

	// Subscribers and entries are bidirectional referred.
	// Subscribers are referring their target entries.
	// As well as the entry are referring their subscribers.
	subscribers?: ObjectId[];
	// Comments are referring their target entries.
	// comments?: ObjectId[];
}

// Define types and constructors, to corresponding.
export const newTypedEntry = <T extends IMixedEntry>(set: IEntrySets) =>
	(name: string, description?: string, tasks?: IMixedEntry[], dependents?: IMixedEntry[]): T => ({name, description, set, children: tasks, dependents}) as T;
