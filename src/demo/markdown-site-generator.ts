'use strict';

import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {newTask} from '../types/task';

export const projectMarkdownSiteGenerator = newProject('Generate Static Site from Markdown Files', [
	newTask('Upgrade the Site Generator', '', [
		newTask('Upgrade the Index Rules'),
	]),
	newTask('Support New Features', '', [
		newTask('Navigator'),
	]),
	newResearch('Navigate on the Similar Products'),
], '');

