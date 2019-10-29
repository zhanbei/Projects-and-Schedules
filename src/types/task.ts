'use strict';

import {IBaseEntry, newTypedEntry, nextTypedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISetTask} from './sets';
import {ISolution} from './solutions';

export interface ITask extends IBaseEntry {
	set: ISetTask;
	// children?: ITask[] | IStep[];
}

// export const newEntry = <T extends IEntry<T>>(name: string, description?: string, tasks?: IEntry<T>[], dependents?: IEntry<T>[]): IEntry<T> => ({name, description, set: 'TASK', children: tasks, dependents});
export const newTask = newTypedEntry<ITask>(ENTRY_SETS.TASK);
export const nextTask = nextTypedEntry<ITask>(ENTRY_SETS.TASK);
export const newTaskWithSolutions = (name: string, solutions: ISolution[], description?: string): ITask => ({name, description, set: ENTRY_SETS.TASK, solutions});
