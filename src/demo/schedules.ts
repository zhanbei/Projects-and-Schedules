'use strict';

import {projectDocumentCenter} from './biziy-document-center';
import {projectMarkdownSiteGenerator} from './markdown-site-generator';
import {projectProjectsAndSchedules} from './projects-and-schedules';
import {convertToMarkdown} from '../exporters/to-markdown';

const projects = [
	projectDocumentCenter,
	projectMarkdownSiteGenerator,
	projectProjectsAndSchedules,
];

const md = convertToMarkdown(projects);
console.log('schedules:', JSON.stringify(projects, undefined, '\t'));
console.log(md);
console.log('schedules:', JSON.stringify(projects));
