'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {newTask} from '../types/task';

export const projectProjectsAndSchedules = newProject('Projects and Schedules', [
	// Done
	newTask('Initializing Project'),
	// Going with Versions
	newTask('Typing Entities and Develop Their Relations'),
	// Going with Versions
	newTask('Documenting'),
	newModule('Requirements and Designs', [
		newResearch('Think about the problems about delaying and multiple schedules.'),
	], ''),
	newModule('Designing Entry Properties', [
		newTask('Done Status', 'see #Documents'),
	]),
], 'Projects management with schedules.');
