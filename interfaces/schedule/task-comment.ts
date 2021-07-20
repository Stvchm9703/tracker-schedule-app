import { BaseModel, UUID } from './base.ts';


export enum TaskCommentType {
  Markdown = "markdown",
  Stricker = "stricker",
  Gif = "gif",
  SystemLog = "log",
}

export interface TaskComment extends BaseModel {
  TaskID: string;
  Type: TaskCommentType;
  Media: Array<BinaryType>;
  Content: string;
  SubComment: Array<TaskComment> | Array<UUID>;
}