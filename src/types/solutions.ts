'use strict';

import {IBaseEntry, newTypedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISetSolution} from './sets';

export interface ISolution extends IBaseEntry {
	set: ISetSolution;
}

export const newSolution = newTypedEntry<ISolution>(ENTRY_SETS.SOLUTION);