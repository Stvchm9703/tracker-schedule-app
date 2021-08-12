import { DateTime } from "luxon";
import { IDayCellItem, ITaskNode, } from './day';
import { IWeekRow } from './calender';
export const generateWeekRowObj2 = (
  inViewDate: DateTime,
  startDate: DateTime, endDate: DateTime,
  taskList: Array<ITaskNode>
) => {
  let today = DateTime.now();
  let currentDate: DateTime = inViewDate;
  // let dateGrid: Array<IWeekRow> = [];

  let st = startDate.startOf('week');
  let ed = endDate.endOf('week').plus({ weeks: -1 });

  let dateArr = [];
  let daydiff = ed.diff(st, 'days').as('days');
  for (let rt = 0; rt < daydiff; daydiff++) {
    let genDay = st.plus({ days: rt });
    let events = taskList.filter((task: ITaskNode) =>
      task.startTime.valueOf() <= genDay.valueOf() &&
      task.endTime.valueOf() >= genDay.valueOf()
    );
    dateArr.push({
      isToday: today.day === genDay.day && today.month === genDay.month,
      isSelected: false,
      date: genDay,
      inMonth: currentDate.month === genDay.month,
      events,
    } as IDayCellItem);
  }

  // let weekDiff = ed.diff(st, 'week').as('week');
  // for (let rt = 0; rt < weekDiff; rt ++ ){
  //   weekObj = dateArr.filter(er => {})
  //   dateGrid.push({
  //     weekNumber: index,
  //     dayObjArray: weekObj,
  //     isSelectable,
  //   } as IWeekRow);
  // }
}

export const generateWeekRowObj = (
  inViewDate: DateTime,
  startDate: DateTime, endDate: DateTime,
  taskList: Array<ITaskNode>, isSelectable: boolean
) => {
  let today = DateTime.now();
  let currentDate: DateTime = inViewDate;
  let dateGrid: Array<IWeekRow> = [];
  for (let index = startDate.weekNumber; index <= endDate.weekNumber; index++) {

    let weekObj = [];
    for (let j = 1; j <= 7; j++) {
      let genDay = DateTime.fromObject({
        weekNumber: index,
        weekday: j,
      });
      let events = taskList.filter((task: ITaskNode) =>
        task.startTime.valueOf() <= genDay.valueOf() &&
        task.endTime.valueOf() >= genDay.valueOf()
      );

      weekObj.push({
        isToday: today.day === genDay.day && today.month === genDay.month,
        isSelected: false,
        date: genDay,
        inMonth: currentDate.month === genDay.month,
        events,
      } as IDayCellItem);
    }

    dateGrid.push({
      weekNumber: index,
      dayObjArray: weekObj,
      isSelectable,
    } as IWeekRow);
  }
  return dateGrid;
}