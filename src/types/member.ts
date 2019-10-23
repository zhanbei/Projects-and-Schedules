'use strict';

export interface IMember {
	name: string;
	title: string;
	// [ Developer | Tester | QA | Product Manager | Project Manager ]
	role: string;
	department: string;
}