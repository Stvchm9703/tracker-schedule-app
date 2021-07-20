import { BaseModel, UUID } from './base.ts';
import { Task } from './task.ts';
import { TaskTag } from './task-tag.ts';


export interface ProjectKanban extends BaseModel {
  TagList: Array<TaskTag> | Array<UUID>;
  LaneList: Array<TaskTag> | Array<UUID>;
  TaskList: Array<Task> | Array<UUID>;
}