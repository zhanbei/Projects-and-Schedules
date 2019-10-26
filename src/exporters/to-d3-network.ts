'use strict';

import {IMixedEntry} from '../types/entry';
import {toD3NetworkMouseover} from './to-d3-network-mouseover';
import {toD3TreeInteractive} from './to-d3-tree-interactive';
import {renderClusterDendrogram, renderHierarchyDiagrams, renderIntegratedTree, renderInteractiveTree, renderNetwork} from './with-ejs';

interface IOptions {
	title?: string;
	filename?: string;
	// One huge combined output or multiple networks.
	// [ distributed | multiple ]
	distributed?: boolean;
	// Extra data to override default configures.
	extra?: object;

	/* Passover Values */
	// Prefer minified html.
	minified?: boolean;
}

// Partial Options -> Real Options -> Real Results
export const toD3NetworkHtml = (entry: IMixedEntry, {title, filename, extra, distributed = false, minified = false}: IOptions = {}) => {
	const nodes = distributed && entry.children ?
		// @ts-ignore
		entry.children.map(entry => toD3NetworkMouseover(entry)).reduce((res, cur) => res.concat(cur))
		:
		toD3NetworkMouseover(entry);

	filename = filename || entry.name;
	filename = filename.replace(/\s+/g, '-') + '.graph.html';

	renderNetwork({
		title: title || entry.name,
		links: nodes,
		distributed,
		minified,
		...extra,
	}, filename);
};

// Partial Options -> Real Options -> Real Results
export const toD3TreeHtml = (entry: IMixedEntry, {title, filename, extra, distributed = false, minified = false}: IOptions = {}) => {
	const nodes = toD3TreeInteractive(entry);

	filename = filename || entry.name;
	filename = filename.replace(/\s+/g, '-');

	const options = {
		title: title || entry.name,
		$data: nodes,
		distributed,
		minified,
		...extra,
	};
	renderHierarchyDiagrams(filename + '.hierarchy.html', options);
	renderClusterDendrogram(filename + '.cluster.dendrogram.html', options);
	renderInteractiveTree(filename + '.tree.toggle.html', options);
	renderIntegratedTree(filename + '.tree.dnd.html', options);
};
