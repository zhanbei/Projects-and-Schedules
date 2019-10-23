'use strict';

import {ObjectId} from './entry';

export interface IComment {
	author: ObjectId;
	// Use one-directional references for now.
	// Use bidirectional references, if the counts of entry comments are needed.
	entryId: ObjectId;
	content: string;
	html: string;
}