'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {newSchedule} from '../types/schedules';
import {newStep} from '../types/steps';
import {newTask} from '../types/task';

export const s = newSchedule('2h');
export const s2 = newSchedule('2h', +new Date('2019-10-25'));

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
	newModule('Visualize the Diagrams', [
		newTask('Indexed Name'),
		newTask('Projects'),
		newTask('Status'),
		newTask('Entry Type'),
		newTask('Progress'),
	]),
	newModule('[VISUALIZATION] Checkout MindMaps', [
		newTask('Investigating Naotu', '', [
			newStep('Run Offline and Investigate Naotu'),
			newStep('Customizing'),
		]),
		newTask('Checkout Other Mind Maps', '', [
			newStep('Choose Applications'),
			newStep('101 Investigating'),
			newStep('Customizing'),
		]),
	], 'Use mind maps to visualize the current tasks, and even to edit(click with dialog editor).'),
], 'Projects management with schedules.');
