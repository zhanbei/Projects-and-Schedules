'use strict';

import {IBaseEntry, IMixedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISchedule} from './schedules';
import {ISetModule} from './sets';

export interface IModule extends IBaseEntry {
	set: ISetModule;
}

// Modules contains sub entries.
export const newModule = (name: string, tasks?: IMixedEntry[], description?: string, dependents?: IMixedEntry[]): IModule => ({name, description, set: ENTRY_SETS.MODULE, children: tasks, dependents});
export const nextModule = (name: string, schedule?: ISchedule, tasks?: IMixedEntry[], description?: string, dependents?: IMixedEntry[]): IModule => ({
	name, description,
	set: ENTRY_SETS.MODULE,
	schedule,
	children: tasks, dependents,
});
