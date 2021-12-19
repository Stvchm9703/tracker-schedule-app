
import { DateTime } from "luxon";
import DayCellColumn, { IDayCellItem, IDayCellEvent } from './day';
import type { ITaskNode, ITaskEvent } from './event';
import type { IWeekRow } from './week';
export const generateWeekRowObj = (
  inViewDate: DateTime,
  startDate: DateTime, endDate: DateTime,
  taskList: Array<ITaskNode>, isSelectable: boolean
) => {
  let today = DateTime.now();
  let currentDate: DateTime = inViewDate;
  let weekRowArr: Array<IWeekRow> = [];

  let canlender_startDate = startDate;
  // console.log(canlender_startDate.weekday)
  if (canlender_startDate.weekday !== 1) {
    canlender_startDate = canlender_startDate.minus({
      days: startDate.weekday - 1
    });
  }
  let canlender_endDate = endDate;
  if (canlender_endDate.weekday !== 7) {
    canlender_endDate = canlender_endDate.plus({
      days: 7 - endDate.weekday
    });
    console.log(canlender_endDate.toISODate());
  }
  let daydiff = canlender_endDate.diff(canlender_startDate, 'days');

  let gened: Array<IDayCellItem> = [];
  for (let index = 0; index <= daydiff.days; index++) {

    let genDay = (canlender_startDate).plus({ days: index });
    // console.log(genDay.toISO())

    let events = taskList.filter((task: ITaskNode) =>
      task.startTime.valueOf() <= genDay.valueOf() &&
      task.endTime.valueOf() >= genDay.valueOf()
    );
    let DayCell: IDayCellItem = {
      isToday: today.day === genDay.day && today.month === genDay.month,
      isSelected: false,
      date: genDay,
      inMonth: currentDate.month === genDay.month,
      events,
    }
    gened.push(DayCell);
    if (index % 7 == 6) {
      // console.log({ gened });
      weekRowArr.push({
        weekNumber: gened[0].date.weekNumber,
        dayObjArray: gened,
        isSelectable,
      } as IWeekRow);
      gened = [];
    }
  }
  return weekRowArr;
}