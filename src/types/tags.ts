'use strict';

export interface ITag {
	name: string;
}

export const newTag = (name: string): ITag => ({name});
