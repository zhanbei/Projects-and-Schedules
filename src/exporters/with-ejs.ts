'use strict';

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const PATH_ASSETS = path.join(__dirname, '../../assets');
const PATH_ASSETS_TMPLTS = path.join(PATH_ASSETS, 'tmplts');
const PATH_TMPLT_D3_NETWORK = path.join(PATH_ASSETS_TMPLTS, 'd3-network.ejs');
const PATH_TMPLT_D3_INTERACTIVE_TREE = path.join(PATH_ASSETS_TMPLTS, 'd3-tree-interactive.ejs');
const PATH_ASSETS_RESULTS = path.join(PATH_ASSETS, 'results');

const readTemplateFile = (filename: string): string => {
	return fs.readFileSync(filename, 'utf8');
};

const writeHtmlFile = (filename: string, content: string) => {
	// console.log('writing:', filename, content.length);
	if (!filename.endsWith('.html') && !filename.endsWith('.htm')) {filename = filename + '.html';}
	fs.writeFileSync(path.join(PATH_ASSETS_RESULTS, filename), content);
};

// Consider compile to improve performance.
// @see https://ejs.co/
const renderHtml = (templateFilename: string, data: any, htmlFilename: string): string => {
	const tmplt = readTemplateFile(templateFilename);
	const html = ejs.render(tmplt, data);
	console.log('template, html:', tmplt.length, html.length);
	writeHtmlFile(htmlFilename, html);
	return html;
};

export const renderNetwork = (data: any, fileOutput: string): string => {
	return renderHtml(PATH_TMPLT_D3_NETWORK, data, fileOutput);
};

export const renderInteractiveTree = (fileOutput: string, data: any): string => {
	return renderHtml(PATH_TMPLT_D3_INTERACTIVE_TREE, data, fileOutput);
};
