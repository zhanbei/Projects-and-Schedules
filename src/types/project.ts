'use strict';

import {IBaseEntry, IMixedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISetProject} from './sets';

export interface IProject extends IBaseEntry {
	set: ISetProject;
}

export const newProject = (name: string, entries: IMixedEntry[], description: string, dependents?: IMixedEntry[]): IProject => ({name, description, set: ENTRY_SETS.PROJECT, children: entries, dependents});

