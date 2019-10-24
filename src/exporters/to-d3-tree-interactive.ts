'use strict';

import {IBaseEntry} from '../types/entry';

export interface ITreeNode {
	name: string;
	children?: ITreeNode[];
}

const _histories = new Map<any, boolean>();

// single -> multiple(single)
const renderNode = (task: IBaseEntry): ITreeNode => {
	if (_histories.get(task)) {return {name: task.name};}
	_histories.set(task, true);

	let nodes: ITreeNode[] = [];
	task.children && task.children.map(t => nodes.push(renderNode(t)));
	// Dependencies are not rendered a step further.
	// FIX-ME Mark it if possible.
	task.dependents && task.dependents.map(t => nodes.push({name: t.name}));
	return {
		name: task.name,
		children: nodes.length > 0 ? nodes : undefined,
	};
};

export const toD3TreeInteractive = renderNode;
