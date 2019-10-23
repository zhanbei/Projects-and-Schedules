'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {newTask} from '../types/task';

export const projectProjectsAndSchedules = newProject('Projects and Schedules', [
	newTask('Initializing Project'),
	newTask('Typing Entities and Develop Their Relations'),
	newTask('Documenting'),
	newModule('Requirements and Designs', [
		newResearch('Think about the problems about delaying and multiple schedules.'),
	], ''),
], 'Projects management with schedules.');
