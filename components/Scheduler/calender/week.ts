import type { IDayCellItem, IDayCellEvent } from './day';
import type { ITaskEvent } from './event';
import type { DateTime } from 'luxon';
export interface IWeekRow {
  weekNumber: number,
  dayObjArray: Array<IDayCellItem>,
  isSelectable: boolean,
  onDayCellClicked: IDayCellEvent,
  onDayCellLongPressed: IDayCellEvent,
  onTaskClickd: ITaskEvent,
}
export type IWeekChangeEvent = (event: MouseEvent | TouchEvent, startDay: DateTime, endDay: DateTime) => any | void;
