import { BaseModel, UUID } from './base.ts';
import { ProjectKanban } from './project-kanban.ts';
import { Task } from './task.ts';
import { TaskTag } from './task-tag.ts';

export interface Project extends BaseModel {
  Pid: string;
  StartDate: Date;
  IssueList: Array<ProjectKanban>;
  DocumentUrl: string;

}
