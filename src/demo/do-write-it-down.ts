'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newSolution} from '../types/solutions';
import {newTask, newTaskWithSolutions} from '../types/task';

export const pjDoWriteItDown = newProject('Do Write it Down', [
	newModule('Documenting Strategies', [
		newTaskWithSolutions('Documenting Methods', [
			newSolution('Github Issues', ''),
			newSolution('Projects and Schedules with Synchronous(Duplicated) Github Issues', 'Sometimes, the Github issues may be preferred, because of convenience'),
		]),
		newTaskWithSolutions('Common Tasks', [
			newSolution('Do support shared tasks, like Google calendar.', 'with multiple instances?'),
			newSolution('An alpha task, together with postponed detailed tasks.', 'but how to calculate the schedules?'),
		]),
	]),
	newModule('Checking out Noting Tools and Workflow', [
		newTask('Knowledge Management', 'https://www.yuque.com/'),
		newTask('Personal Blog Sites', 'https://github.com/gatsbyjs/gatsby'),
		newTask('Landing Page - Ant Design', 'https://github.com/ant-design/ant-design-landing'),
		newTask('Documentation Sites for Tech Projects', 'https://github.com/facebook/docusaurus'),
	]),
	newModule('Building Sites for Current Projects', [
		newTask('Do them one by one :)'),
	]),
], 'Write whatever down here, and move them to proper place.');