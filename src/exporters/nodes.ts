'use strict';

import {ISchedule} from '../types/schedules';
// Whether to use a new type or use entries directly?
import {IEntrySets} from '../types/sets';

export interface INodeMeta {
	circle: INodeCircle;
	text: INodeText;
}

export interface INodeCircle {
	radius: number;
	stroke: string;
	fill: string;

	dy: number;
	text: string;
}

export interface INodeText {
	class?: string;
	dx?: number;
	style?: string;
	size?: number;
	color?: string;
}

// circle: radius, text size,
export const newNodeCircle = (radius: number, stroke: string, fill: string, text: string, dy?: number): INodeCircle => ({
	radius, dy: dy || radius / 5 * 2,
	stroke, fill, text,
});

export const newNodeText = (className?: string, color?: string, dx: number = 8, style?: string, size?: number): INodeText => ({class: className, style, size, color, dx});

export const newNodeMeta = (circle: INodeCircle, text: INodeText): INodeMeta => ({circle, text});

export interface ITreeNode {
	_id?: string;
	// Indexed name.
	name: string;
	// cachedName: string;
	description?: string;
	set: IEntrySets;
	schedule?: ISchedule;

	meta?: INodeMeta;
	circle: INodeCircle;
	text: INodeText;

	children?: ITreeNode[];
}