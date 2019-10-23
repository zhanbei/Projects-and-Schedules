'use strict';

import {IMixedEntry} from '../types/entry';

export interface INetworkNode {
	source: string;
	target: string;
}

const _dependencies = new Map();

const renderNode = (from: IMixedEntry, to: IMixedEntry): INetworkNode[] => {
	// console.log('-------', from.name, to.name, Boolean(to.children));
	const nodes = toNetwork(to);
	nodes.push({source: from.name, target: to.name});
	return nodes;
};

const toNetwork = (task: IMixedEntry): INetworkNode[] => {
	if (_dependencies.get(task)) {return [];}
	_dependencies.set(task, true);

	let nodes: INetworkNode[] = [];
	// @ts-ignore
	task.children && task.children.map(t => nodes = nodes.concat(renderNode(task, t)));
	task.dependents && task.dependents.map(t => nodes = nodes.concat(renderNode(task, t)));
	// {source: "Microsoft", target: "Amazon", type: "licensing"},
	return nodes;
};

export const toD3NetworkMouseover = toNetwork;
