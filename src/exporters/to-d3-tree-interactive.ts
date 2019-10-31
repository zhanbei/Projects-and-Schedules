'use strict';

import {RADIUS} from '../builtin/node-meta';
import {IMixedEntry} from '../types/entry';
import {ENTRY_SETS} from '../types/enum-sets';
import {IEntrySets} from '../types/sets';
import {INodeMeta, ITreeNode, newNodeCircle, newNodeMeta, newNodeText} from './nodes';

const _histories = new Map<any, boolean>();

const newMeta = (set: IEntrySets, d: IMixedEntry): INodeMeta => {
	const text = (d.schedule ? (d.schedule.duration || d.schedule.progress === 100 ? '√' : d.schedule.progress || d.schedule.total || d.schedule.$total || 'x') : 'x') + '';
	const color = d.schedule ? (d.schedule.duration || d.schedule.progress === 100 ? 'green' : (d.schedule.progress ? 'purple' : (d.schedule.total ? '#008b8b' : undefined))) : undefined;
	switch (set) {
		case ENTRY_SETS.PROJECT:
			return newNodeMeta(newNodeCircle(text, RADIUS.LARGE, color || '#8a2be2', RADIUS.LARGE * 1.2), newNodeText('cls-project-text', '#555', 36));
		case ENTRY_SETS.DEPENDENCY:
		case ENTRY_SETS.MODULE:
			return newNodeMeta(newNodeCircle(text, d.children && d.children.length > 0 ? RADIUS.MEDIUM : RADIUS.MEDIUM_EMPTY, color || '#777'), newNodeText('cls-module-text', '#777', 20));
		case ENTRY_SETS.TASK:
		case ENTRY_SETS.STEP:
		default:
			return newNodeMeta(newNodeCircle(text, RADIUS.SMALL, color || '#999'), newNodeText('cls-task-text', '#999'));
	}
};

// Write logic right here or in template.
const nextNode = ({name, set, description, schedule}: IMixedEntry, {circle, text}: INodeMeta, children?: ITreeNode[]): ITreeNode => ({
	name, set, description, schedule,
	children, circle, text,
});

const newNode = (set: IEntrySets, entry: IMixedEntry, children?: ITreeNode[]): ITreeNode =>
	nextNode(entry, newMeta(set, entry), children);

// single -> multiple(single)
const renderNode = (task: IMixedEntry): ITreeNode => {
	if (_histories.get(task)) {return renderNode(task);}
	_histories.set(task, true);

	let nodes: ITreeNode[] = [];
	task.children && task.children.map(t => nodes.push(renderNode(t)));
	// Dependencies are not rendered a step further.
	// FIX-ME Mark it if possible.
	task.dependents && task.dependents.map(t => nodes.push(newNode(ENTRY_SETS.DEPENDENCY, t)));
	return newNode(task.set, task, nodes.length > 0 ? nodes : undefined);
};

export const toD3TreeInteractive = renderNode;
