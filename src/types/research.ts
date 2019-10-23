'use strict';

import {IBaseEntry, newTypedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISetProject} from './sets';

export interface IResearch extends IBaseEntry {
	set: ISetProject;
}

export const newResearch = newTypedEntry<IResearch>(ENTRY_SETS.RESEARCH);