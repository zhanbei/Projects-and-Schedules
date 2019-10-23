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
- Researches
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

## References

- [Project management - Wikipedia](https://en.wikipedia.org/wiki/Project_management)
- [项目管理（管理学分支的学科） - 百度百科](https://baike.baidu.com/item/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/85389)
