'use strict';

export type ISetProject = 'PROJECT';
// export type ISetSession = 'SESSION';
export type ISetModule = 'MODULE';
export type ISetTask = 'TASK';
export type ISetStep = 'STEP';
export type ISetSolution = 'SOLUTION';

export type ISetResearch = 'RESEARCH';

export type ISetDependency = 'DEPENDENCY';

// Tasks cannot be simply classified or grouped, use tags may be better off!
// Project | Issue | Feature | Requirement
// [ Road-map | Project | Requirement(Task / Issue / Feature) ]
// Refine whenever needed.
export type IEntrySets = ISetProject | ISetModule | ISetTask | ISetStep | ISetSolution | ISetResearch | ISetDependency
