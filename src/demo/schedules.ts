'use strict';

import {toD3NetworkHtml} from '../exporters/to-d3-network';
import {convertToMarkdown} from '../exporters/to-markdown';
import {newProject} from '../types/project';
import {projectDocumentCenter} from './biziy-document-center';
import {pjDevelopersPlayground} from './developers-playground';
import {projectMarkdownSiteGenerator} from './markdown-site-generator';
import {projectProjectsAndSchedules} from './projects-and-schedules';
import {pjWebAssistant} from './web-assistant';

const projects = [
	projectDocumentCenter,
	projectMarkdownSiteGenerator,
	projectProjectsAndSchedules,
	pjDevelopersPlayground,
	pjWebAssistant,
];

const project = newProject('Recent Tasks', projects,
	'The recent tasks unscheduled!');

const md = convertToMarkdown(projects);
console.log('schedules:', JSON.stringify(projects, undefined, '\t'));
console.log(md);
console.log('schedules:', JSON.stringify(projects));

toD3NetworkHtml(project, {distributed: true});
