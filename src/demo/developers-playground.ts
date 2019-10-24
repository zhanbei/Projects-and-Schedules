'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newSolution} from '../types/solutions';
import {newTask, newTaskWithSolutions} from '../types/task';

export const pjDevelopersPlayground = newProject('Developers Playground', [
	newModule('Available Applications', [
		newTask('Matches and Shuffling'),
		newTask('Text Tailor'),
	]),
	newModule('Tracking Usage', [
		newTaskWithSolutions('Find the targeted solution', [
			newSolution('Google Analysis'),
			newSolution('Baidu Tongji'),
		]),
	], 'Be clear about the '),
], 'Playground are kind of immature applications, or tools to be more specially, which often has weak user needs or a smaller group of targeted users.', [
	newProject('Shuffling', [], 'to be enriched later'),
	newProject('Text Tailor', [], 'to be enriched later'),
]);