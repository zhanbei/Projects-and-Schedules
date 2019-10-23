'use strict';

import {newProject} from '../types/project';
import {newResearch} from '../types/research';
import {newSolution} from '../types/solutions';
import {newStep, newStepWithSolutions} from '../types/steps';
import {newTask} from '../types/task';
import {projectMarkdownSiteGenerator} from './markdown-site-generator';

export const projectDocumentCenter = newProject('Biziy Document Center', [
	// Name: What the task is called.
	// Description: Hows/Strategies and Whys/Purposes
	newTask('Design and Develop the Content'),
	newTask('Deploy the Static Document Site', '[2019-10-22T19:49:44+0800] Deploy the document site of "biziy.cc" for public documents.', [
		newStep('Deploy the Nginx Server', 'with https supported!'),
		newStepWithSolutions('Design and implement the Upgrading Policies', [
			newSolution('Git Push'),
			newSolution('Synchronous Tool'),
			newSolution('Build from Source'),
		]),
		newStep('Simplified Version Site'),
	], [
		projectMarkdownSiteGenerator,
	]),
	newTask('Share the articles with permanent link?', ''),
	newResearch('How to Collaborate for Newbies?'),
	newTask('Update Content and Deploy Site Frequently'),
	newTask('Upgrade the #Site-Generator Used Often'),
], 'The Public Site(biziy.cc) for Biziy (Public )Document Center.');

