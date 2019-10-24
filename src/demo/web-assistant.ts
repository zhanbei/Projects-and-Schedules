'use strict';

import {newModule} from '../types/modules';
import {newProject} from '../types/project';
import {newSolution} from '../types/solutions';
import {newTask, newTaskWithSolutions} from '../types/task';

export const pjWebAssistant = newProject('Web Assistant', [
	newModule('Bookmarks Management', [
		newTaskWithSolutions('CRUD for Bookmarks', [
			newSolution('Local Storage'),
			newSolution('Cloud Storage', '[RESEARCH] waiting to be verified!'),
			newSolution('Custom Storage', '[NOT-PRACTICABLE] waiting to be considered!'),
		]),
	], 'Bookmarks management and exports as references.'),
	newModule('Custom Scripts', [
		newTask('CRUD for Custom Scripts'),
	]),
	newModule('[REQUIREMENTS] Use Case', [
		newTaskWithSolutions('Export references of several similar pages.', [
			newSolution('Add them as bookmarks and export.'),
			newSolution('Use custom scripts to export them one by one.'),
			newSolution('Use custom scripts and a temp shared local storage to export them together.'),
		]),
	], 'Use cases are kinds of requirements'),
], 'Collector(Bookmarks, Search Words); Styling(Width, Theme); Extractor(Parsing HTML DOM, ); Communities(Chatting, Commenting)');