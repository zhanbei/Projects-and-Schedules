# Projects and Schedules

<!--
```yaml
meta: true
Date: 2019-10-19T10:23:07+0800
Names:
  - Projects-and-Schedules
  - Networked-Schedules
  - Networked-Projects
  - Visual-Schedules
  - Visual-Projects
  - Projects-Management
Titles:
  - Projects and Schedules
  - Networked Schedules of Networked Projects
  - Visual Schedules of Projects
  - Projects Management
```
-->

The management for networked schedules and projects, and even issues if possible.

## Declarations

- Mixed-Entry

	 = `Project | Module | Task | Step | Research | Solution`

	 Entries are treed structure, can be networked with dependencies.

Supported Sets

- Project
	- Project
	- Partial Project
- Module
	- Module
	- Partial Module
	- Session
- Task
	- Task
	- Step
- Others
	- Issue
	- Solution
	- Research

Accessories

- Tags
- Dev-Terms
- Members
- Roles
- Comments
- Subscribers

## Relations

Current relations are one of [ "Has" | "Depends" ].

- Project

	 A `Project` has its life-cycles by default
	 [ Research / Schedules / etc ],
	 which should be fulfilled with project being enriched gradually.

	- Has `Mixed-Entries`
	- Depends on other `Projects`? or Nothing?
- Module

	 Same as `Project`

- Task
	- Has Sub `Tasks` / `Steps`
	- Has Possible `Solutions`
	- Depends on other `Mixed-Entries`
- Step

	 `Steps` are ordered `Tasks`.

- Solution
	- Has `Mixed-Entries`
	- Depends on Other `Mixed-Entries`
- Research
	- Has `Mixed-Entries`
	- Depends on Other `Mixed-Entries`


## Visualizations

## Definitions

### Research

`Researches` are to be navigated on, first or later, on specific purposes.

- Pre-researches Necessary `first`
	- Design and Enrich the Structure
	- Planning and Scheduling
- Better Solutions
	- Current solution is okay but there are better ones.
- Potential or Future Problems
- References
	- Refer others and find potential solutions.
- Related Topics for Inspirations
	- Search around and find potential features.

<!-- The table may be transposed -->
| Comparisons | Time  | Purposes |
| --- | --- | --- |
| Pre-researches Necessary | first | 1. Enrich the designs <br> 2. Confirm the schedules |
| Inspirations Marked | later or when being free | 1. Refine the designs. |

## Scheduling & Controlling

Predicted Deadline > Deadline

- Simple Schedule

	 Tasks can be accomplished through discontinuous hours during discontinuous days.
	 Hence the `total` duration is not the same with the `to` - `from`.

	- Total
	- From
	- To
	- Deadline
- Predicted `predicted`

	 Predicted schedule with predicted deadline.

	- `Simple Schedule`
- Real `real`

	 Real schedules with real deadline.

	- `Simple Schedule`
- Historically Predicted Times `predictions`
	- `Simple Schedules`
- Historically Real Times `reals` `histories`

	 A task may be developed during several development terms,
	 or there is no allocated development terms at all.

	 Records of real historical developments times.

	- `Simple Schedules`
- Deadline `deadline`
	- Real Deadline
- Importance `importance`
	- `[1-10]`

## References

- [Project management - Wikipedia](https://en.wikipedia.org/wiki/Project_management)
- [项目管理（管理学分支的学科） - 百度百科](https://baike.baidu.com/item/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/85389)
