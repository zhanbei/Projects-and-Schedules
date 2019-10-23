'use strict';

import {IBaseEntry, newTypedEntry} from './entry';
import {ENTRY_SETS} from './enum-sets';
import {ISetStep} from './sets';
import {ISolution} from './solutions';

export interface IStep extends IBaseEntry {
	set: ISetStep;
}

export const newStep = newTypedEntry<IStep>(ENTRY_SETS.STEP);
export const newStepWithSolutions = (name: string, solutions: ISolution[], description?: string): IStep => ({name, description, set: ENTRY_SETS.STEP, solutions});
