import type { DateTime } from "luxon";

export type ITaskEvent = (event: MouseEvent | TouchEvent, node: ITaskNode) => any | void;

export interface ITaskNode {
  id: Number,
  project_id: string,
  title: string,
  startTime: DateTime,
  endTime: DateTime,
}