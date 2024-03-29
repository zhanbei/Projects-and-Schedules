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

The management for networked projects with schedules;
supported by interactive visualizations and editors.
<!-- The management for networked schedules and projects, and even issues if possible. -->

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

- Progress
- Tags
- Dev-Terms
- Members
- Roles
- Comments
- Subscribers

## Relations

Current relations are one of [ "Has" | "Depends" ].

It may be nonsense to classify entries strictly as `Projects`, `Modules`, or `Tasks`,
since people with different backgrounds tend to call the same thing differently,
like your so-called projects may often be modules of other projects.
Still it is needed to distinguish the differences,
as for different principles stand for different amount to resources(time) needed --
expectations are attached along with the entities.
Projects are treated importantly, than modules,
and hence the same way, modules are relatively important than tasks.

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

Diagrams:

- Tree Views
	- Treed Lists
	- Mind Map
	- [Interactive d3.js tree diagram - bl.ocks.org](http://bl.ocks.org/d3noob/8375092)
	- [D3.js Drag and Drop, Zoomable, Panning, Collapsible Tree with auto-sizing. - bl.ocks.org](http://bl.ocks.org/robschmuecker/7880033)
- Graphs & Networks
	- [Force-Directed Graph with Mouseover - bl.ocks.org](http://bl.ocks.org/mbostock/2706022)
	- [Directed Graph Editor - bl.ocks.org](http://bl.ocks.org/rkirsling/5001347)

Styling:

- Entry Type
	- Set = Project
		- Bold and Big Name
	- Set = Module
		- Bold and Big Name
- Indexed Names
	- Set = Step
		- Name = `(index+1) + '. ' + name`
- Colored Circle
	- By Projects
	- Task Types = [ Research | Development | Testing ]
	- Task Status = [ Alarm | Warning | Normal | Good | Great ] `Colored Circle or Text`
- Task Importance
	- Bold Text
	- Colored Text or Circle
- Progress
	- Use Number in Circle
	- Use Half-filled Color
	- Use Icon Filled

Interacting:

- Entry Editor
	- [ ] Scheduling
	- [ ] Comments
	- [ ] Commitment
- Filtering By
	- [ ] Projects
	- [ ] Members
	- [ ] Development Terms


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

## Entity

- Name
- Description
- Content
- Draft
- Attachments
- Parent
- *Category*
- Milestones / Iterations / Development Term
- *Priority*
- *Optionality*
- *Assignees*
- Estimated Start Date
- Estimated Due Date
- Credential
- Closed
- *Labels/Tags*

### Category

Treed Categories

- Name
- Parent

### Milestone

- Name
- Description
- Start Date
- Due Date

Resolves

- Referred Issues
	- Unstarted
	- Ongoing
	- Completed
- Referred Pull Requests
	- ...

### Attachment

- Upload with Markdown URL

### Label/Tag

- Name
- Description
- Color

### Scheduling & Controlling

- Priority
- Optionality
- Urgency / Time
- Progress
- Schedules

#### Priority

- Label
- Value `[0-100]`

#### Optionality

> What's the differences between the importance and optionality(, and urgency)?

- Required == Important !== urgent
- Optional(Nice to Have) == Unimportant

#### Urgency

Deadline is used to represent the urgency of the specific task.

#### Progress(Done or Not)

- Not(0)
- Started(10)
- Partial(30)
- Half(50)
- Most(70)
- Almost(90)
- Done(100)

Rating Values @see https://material-ui.com/components/rating/

- `[ 0/1 - 5 ]` => `3[1, 3, 5], 5/6`
	- Stars range from `0/1` to `5`.
- `[ -5 - 5 ]` => `3[-5, 0, 5], 11`
- `[ 0, 1 - 9, 10 ]` => `3[0/1, 5, 9/10], 4[2, 4, 6, 8], 5[1, 3, 5, 7, 9], 9, 11`
	- Stars range from `0, 0.5` to `4.5, 5`.
- `[ 0 - 100 ]` => `3, 4, 5, 9, 11, 99, 100, 101`
	- Like percentage, support percentage of numbers.
- `[ 10000 - 20000 ]` => `[0.00% - 100.00%]`
	- Like percentage, support float numbers.
- `85.5` => `any`
	- Store float value directly.
- `"85.5%"` => `any`
	- Store string value directly.

With clear goals, a task can be marked as done or not,
or partially done with a progress.

While there is no clear goals, often for kinds of researches,
a task cannot be simply marked done or not;
hence practices are needed to evaluate the results and consider whether to push forward.
(BTW, at least two members may be better scheduled for fuzzy tasks, to make the results trustful.)

#### Basic Schedule

Tasks can be accomplished through discontinuous hours during discontinuous days.
Hence the `total` duration is not the same with the `to` - `from`.

**Total**

- Estimated time needed to accomplished the target task,
in hours or in days.
- For a regular task, if several days may be required,
it is better to have steps, which in counted in hours.
- In hours, the value may be `2h`;

**Deadline**

- The Product/Project Managers or the principals do care about the deadline.
- Tasks with estimated time or not are scheduled in particular orders,
and hence the deadlines are estimated with reasons or not.
- Tasks are often overdue because of the scheduling and controlling.
	- As the tasks involved got enriched, extra works will be involved as well.
		- Experiences as well as infrastructures can sometimes help this kind of similar cases.
	- Tasks important or urgent may be scheduled first, postponing others behind.
- A specific task may be scheduled in a particular time

**Time Range**

The real scheduled time:
when the task are estimated to start

- From
- ~~Duration~~
	- How long does the tasks last(, counting the work hours from workdays only).
- To

**Updated-Time**

No update are permitted, use actions instead.

A complete schedule are not allowed to be modified, or even enriched,
because these operations reduce information, which tracks the target task.
Appending and overriding will be used on the back-end,
while latest actions will be emphasized on the front-end.

**Created-Time**

The time of the target schedule being created.

**Author**

Who made this action(, and when/Created-Time)?

#### Schedules

Predicted Deadline > Deadline

Tasks may be ranked to be accomplished in orders,
without actually schedule the real time.
The latter tasks, however, are risky to be postponed or overdue,
because the risks are superimposed.

> FIX-ME Development Patterns are to be Researched Steps Further.

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

#### Progress and Deadline

- Exceeded and Undone > Behind Schedule > Normal >
Ahead of Schedule > Done Ahead of Schedule
- <span style='color:red;'>Alarm</span> >
<span style='color:orange;'>Warning</span> >
Normal >
<span style='color:#090;'>Good</span> >
<span style='color:#0d0;'>Great</span>
- Sad > Considering > Smile

| Status | Started | Half | Close | Exceeded |
| :---: | :---: | :---: | :---: | :---: |
| **Started** | Normal | <span style='color:orange;'>Warning</span> | <span style='color:red;'>Alarm</span> | <span style='color:red;'>Alarm</span> |
| **Half** | <span style='color:#090;'>Good</span> | Normal | <span style='color:orange;'>Warning</span> | <span style='color:red;'>Alarm</span> |
| **Done** | <span style='color:#0f0;'>Great</span> | <span style='color:#0f0;'>Great</span> | <span style='color:#090;'>Good</span> | <span style='color:orange;'>Warning</span> |


## References

- Principles and Concepts
	- [Project management - Wikipedia](https://en.wikipedia.org/wiki/Project_management)
	- [项目管理（管理学分支的学科） - 百度百科](https://baike.baidu.com/item/%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/85389)
	- [看板 - 百度百科](https://baike.baidu.com/item/%E7%9C%8B%E6%9D%BF/10642946)
	- [看板管理 - 百度百科](https://baike.baidu.com/item/%E7%9C%8B%E6%9D%BF%E7%AE%A1%E7%90%86/6725621)
	- [思维导图（表达发散性思维的有效图形思维工具） - 百度百科](https://baike.baidu.com/item/%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/563801)
- Projects Management and Collaboration Tools
	- [TAPD | 敏捷开发 项目管理 腾讯敏捷产品研发平台](https://www.tapd.cn/)
	- [Teambition | Team Collaboration Solutions](https://www.teambition.com/)
- Issue Trackers
	- [About Issues - GitHub Help](https://help.github.com/en/github/managing-your-work-on-github/about-issues)
	- [Redmine](https://www.redmine.org/)
- Assistants/Visualizations
	- [mindmap - Github Search](https://github.com/search?o=desc&q=mindmap&s=stars&type=Repositories)
	- [Popular Blocks - bl.ocks.org](https://bl.ocks.org/)
	- [XMind - Mind Mapping Software](https://www.xmind.net/)
	 <sup>[Chinese](https://www.xmind.cn/)</sup>
	- [draw.io – Online Diagramming](https://about.draw.io/)
	- [ProcessOn - Create diagrams, Flowchart, Mindmap online in real-time!](https://www.processon.com/)
