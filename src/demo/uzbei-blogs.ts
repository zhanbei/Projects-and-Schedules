'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newTask} from '../types/task';

export const pjUzbeiBlog = newProject('Uzbei Blog', [
	newModule('Articles', [
		newTask('Visualizations and Interactions', 'and Editors'),
	]),
], 'The personal and technical blog.');