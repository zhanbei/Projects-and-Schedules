'use strict';

import {newModule, nextModule} from '../types/modules';
import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {nextImportantCasualSchedule, nextRequiredSchedule} from '../types/schedules';
import {newStep} from '../types/steps';
import {newTask, nextTask} from '../types/task';

const due = nextRequiredSchedule;

export const projectProjectsAndSchedules = newProject('Projects and Schedules', [
	// Done
	nextTask('Initializing Project', due(
		'2h', 100)),
	// Going with Versions
	nextTask('Typing Entities and Develop Their Relations', due(
		'3h', 100)),
	// Going with Versions
	nextTask('Documenting', due(
		'3h', 100)),
	newModule('Requirements and Designs', [
		newResearch('Think about the problems about delaying and multiple schedules.'),
	], ''),
	nextModule('Designing Entry Properties', due(
		'2h'), [
		newTask('Done Status', 'see #Documents'),
	]),
	nextModule('Visualize the Diagrams', due(
		'3h', 30), [
		newTask('Indexed Name'),
		newTask('Projects'),
		newTask('Status'),
		newTask('Entry Type'),
		newTask('Progress'),
	]),
	nextModule('[VISUALIZATION] Checkout MindMaps', nextImportantCasualSchedule(
		'2d', 10), [
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
	nextModule('[PRODUCTION] Make this repository professional.', nextImportantCasualSchedule(
		'4d'), [
		// To reduce the repository size, as for currently, there are lots of generated codes, which is not reasonable.
		newTask('Extract the core codes with builtin exporters out as a standalone library for public to use with conveniences.'),
		newTask('Extract the visualizations templates out as a standalone library, to develop with different purposes.'),
		newTask('Keep the following parts as the management repo for open sourced projects together with project#Do-Write-it-Down.'),
	], 'Research for better solutions, and verify if the current solution is reasonable and practicable.'),
], 'Projects management with schedules.');
