// import { BaseModel, UserModel , UUID } from './base';
// import { TaskCommentType, TaskComment, string } from './task-tag';
// import { Project } from './project';


type UUID = string;

export interface BaseModel {
  _id?: UUID;
  created_date: Date | string | null;
  created_by:  UUID;
  updated_date: Date | string | null;
  updated_by: UUID;
}


export enum TaskStatus {
  Created = "Created",
  IssueAssigned = "IssueAssigned",
  InProgress = "InProgress",
  DoneNeedTest = "DoneNeedTest",
  InUAT = "InUAT",
  Completed = "Completed",
  Canceled = "Canceled"
}

export interface Task extends BaseModel {
  // Data 
  TaskID: number;
  Title: string;
  Description: string;
  Status: TaskStatus | string;

  // UUID for User
  Issuer: Array<UUID>;
  // UUID for User
  Worker: Array<UUID>;
  // UUID for User
  Tester: Array<UUID>;
  // UUID for User
  Parties: Array<UUID>;

  IssueCard: | string;
  
  /**
   * @property Project  
   * @description the git repositories UUID, 
   * @type {Date}
   * @memberof Task
   */
  Project: UUID;

  // url / apps junction
  RoutePath: string;


  ReferenceImg: Array<BinaryType>;
  // Comments: Array<TaskComment>;

  Priority: string;
  
  Catalogy: string;
  Tags: Array<string>;

  /**
   * @prop AssignDate
   * @description 
   *    server auto-updated: 
   *    when the Status Updated as "IssueAssigned"
   * @type {Date}
   * @memberof Task
   */
  AssignDate: Date | null;

  /**
   * @prop TargetStartDate
   * @description
   *    when the Status Updated as "IssueAssigned",
   *    worker can set the Task when to start in scheduler
   * @type {Date}
   * @memberof Task
   */
  TargetStartDate: Date | null;

  /**
   * @prop TargeEndDate
   * @description 
   *    when the Status Updated as "IssueAssigned",
   *    worker can set the Task when to end in scheduler
   * @type {Date}
   * @memberof Task
   */
  TargeEndDate: Date | null;

  /**
   * @prop TestDate
   * @dscritpion 
   *    For Testing Group remarking
   * @type {Date}
   * @memberof Task
   */
  TestDate: Date | null;

  /**
   * @prop AssignDate
   * @description
   *    server auto-updated:
   *    when the Status Updated as "Completed"
   * @type {Date}
   * @memberof Task
   */
  CompleteDate: Date | null;

  DeadlineDate: Date | null;

  SubTask: Array<Task> | Array<UUID>;
}



