import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import styles from './calender.module.scss';

import { Grid, Row, Column, Tile, SelectableTile, ButtonSet, Button, Tooltip } from "carbon-components-react";
import { Add32, ChevronUp32, ChevronDown32, CalendarSettings32 } from '@carbon/icons-react';
import { useLongPress } from "react-use";
import { generateWeekRowObj } from "./stateUtil";
// import { useMouseHovered, useMouseWheel, useLongPress } from "react-use"
// import { } from "react-use-gesture";
import DayCellColumn, { IDayCellItem, IDayCellEvent } from './day';
import type { IWeekRow, IWeekChangeEvent } from "./week";
import type { ITaskNode, ITaskEvent } from './task';
// export type IDayCellEvent = (event: MouseEvent | TouchEvent, day: DateTime) => any | void;
// export type ITaskEvent = (event: MouseEvent | TouchEvent, event: ITaskNode) => any | void;

export interface ICalenderProps {
  taskList: Array<ITaskNode>,
  onDayClicked: IDayCellEvent,
  onDaySelected: IDayCellEvent,
  startDate?: DateTime,
  endDate?: DateTime
  // onScrollUp: Event,
  // onScrollDown: Event,
}

interface ICalenderState {
  isSelectable: boolean,
  currentDate: DateTime,
  currentMonth: number,
  startDate: DateTime,
  endDate: DateTime,
  dateItem: Array<IWeekRow>,
}
const useCalenderState = (props: ICalenderProps) => {
  let startDate = props.startDate ? props.startDate : DateTime.now().startOf('month');
  let endDate = props.endDate ? props.endDate : startDate.plus({ weeks: 5 });
  let isSelectable = false;
  let dateItem = generateWeekRowObj(DateTime.now(), startDate, endDate, props.taskList, isSelectable);
  // let dateItem2 = generateWeekRowObj2(DateTime.now(), startDate, endDate, props.taskList, isSelectable);

  // console.log({dateItem ,dateItem2})
  const [state, setState] = useState({
    startDate, endDate, dateItem, isSelectable,
    currentMonth: DateTime.now().month,
    currentDate: DateTime.now(),
  } as ICalenderState);

  // function for state update 
  const updateWeekView = (weekDiff: number) => {
    const inState = state;
    let newDate = inState.currentDate.plus({ weeks: weekDiff })
    let startDateNew = inState.startDate.plus({ weeks: weekDiff });
    let endDateNew = inState.startDate.plus({ weeks: weekDiff + 5 });
    setState({
      ...inState,
      startDate: startDateNew,
      endDate: endDateNew,
      dateItem: generateWeekRowObj(newDate, startDateNew, endDateNew, props.taskList, inState.isSelectable)
    } as ICalenderState);
  }
  const updateMonthView = (month: number) => {
    const inState = state;
    let newDate = inState.currentDate.plus({ months: month });
    let startDateNew = newDate.startOf('month');
    let endDateNew = newDate.endOf('month');
    console.log({ newDate })
    setState({
      ...inState,
      startDate: startDateNew,
      endDate: endDateNew,
      currentDate: newDate,
      currentMonth: newDate.month,
      dateItem: generateWeekRowObj(newDate, startDateNew, endDateNew, props.taskList, inState.isSelectable)
    } as ICalenderState);
  }
  const resetMonthView = () => {
    const inState = state;
    let newDate = DateTime.now();
    let startDateNew = newDate.startOf('month');
    let endDateNew = newDate.endOf('month');
    setState({
      ...inState,
      startDate: startDateNew,
      endDate: endDateNew,
      currentDate: newDate,
      currentMonth: newDate.month,
      dateItem: generateWeekRowObj(DateTime.now(), startDateNew, endDateNew, props.taskList, inState.isSelectable)
    } as ICalenderState);
  }
  const updateSelectable = (val: boolean) => {
    console.log('useCalenderState:updateSelectable', val);
    const inState = state;
    setState({
      ...inState,
      isSelectable: val,
      dateItem: generateWeekRowObj(inState.currentDate, inState.startDate, inState.endDate, props.taskList, val)
    } as ICalenderState);
  }


  // effect 
  useEffect(() => {
    console.log([props.startDate, props.endDate]);
  }, [props.startDate, props.endDate]);

  return {
    CalenderState: state,
    setCalenderState: setState,
    updateMonthView,
    updateWeekView,
    resetMonthView,
    updateSelectable,
  }
}


const CalenderViewComponent = (props: ICalenderProps) => {


  const {
    CalenderState, setCalenderState,
    updateMonthView, updateSelectable,
    resetMonthView
  } = useCalenderState(props);

  const viewOnMonthChange = (e: MouseEvent | TouchEvent, weekDiff: number) => {
    console.log('viewOnMonthChange: ', weekDiff);
    updateMonthView(weekDiff);
  }
  const viewOnMonthReset = (e: MouseEvent | TouchEvent) => {
    resetMonthView();
  }
  // 
  const viewOnDayCellLongPressed: IDayCellEvent = (_: MouseEvent | TouchEvent, dateTrig: DateTime) => {
    // change state;
    updateSelectable(true);
  }

  const viewOnDayCellClicked: IDayCellEvent = (event: MouseEvent | TouchEvent, dateTrig: DateTime) => {
    if (CalenderState.isSelectable) {
      // setDaySelectedState([...daySelectedState,])
    }

    // event emit 
    props.onDayClicked(event, dateTrig);
  }

  // ---

  const viewOnTaskClicked: ITaskEvent = (_: MouseEvent | TouchEvent, task: ITaskNode) => {
    console.log(task)
  }

  let weekDayLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];


  // updateDateGrid();


  return (

    <div className={styles.calender_container}>
      <div className={styles.controller_row}>
        <Row>
          <Column className={styles.control_left}>
            <div> {CalenderState.currentDate.month}</div>
          </Column>

          <Column className={styles.control_right} >
            <Button
              renderIcon={Add32}
              iconDescription="Add Remark"
              tooltipPosition="bottom"
              hasIconOnly
              size="sm"
              onClick={() => { }}
            />

            {CalenderState.isSelectable &&
              <Button kind="danger--tertiary"
                size="sm"
                onClick={() => updateSelectable(false)}>
                Cancel
              </Button>
            }
            <Button
              kind="ghost"
              renderIcon={CalendarSettings32}
              iconDescription="Back To Now (Home)"
              tooltipPosition="bottom"
              hasIconOnly
              size="sm"
              onClick={(e: any) => viewOnMonthReset(e as MouseEvent)}
            />
            <Button
              kind="ghost"
              renderIcon={ChevronUp32}
              iconDescription="To Previous Month (PgUp)"
              tooltipPosition="bottom"
              hasIconOnly
              size="sm"
              onClick={(e: any) => viewOnMonthChange(e as MouseEvent, -1)}
            />
            <Button
              kind="ghost"
              renderIcon={ChevronDown32}
              iconDescription="To Next Month (PgDn)"
              tooltipPosition="bottom"
              hasIconOnly
              size="sm"
              onClick={(e: any) => viewOnMonthChange(e as MouseEvent, 1)}
            />
          </Column>
        </Row>
      </ div>
      <Grid fullWidth className={styles.calender_view}>
        <Row key="weeky_day_index" condensed className={styles.weeky_day_row}>
          <Column className={styles.week_number_indicator}></Column>
          {weekDayLabel.map((label: string) =>
            <Column key={label} className={`${styles.day_cell}`}><span>{label}</span></Column>
          )}
        </Row>

        {CalenderState.dateItem && CalenderState.dateItem.map((wr: IWeekRow) => (
          <Row condensed key={wr.weekNumber} className={`week-${wr.weekNumber}`}>
            <Column className={styles.week_number_indicator}>
              <div className={styles.week_number_disp}>
                <span> {wr.weekNumber} </span>
              </div>
            </Column>
            {wr.dayObjArray.map((dateItem: IDayCellItem) => (
              <DayCellColumn
                key={dateItem.date.toFormat('yy-mm-dd')}
                dateItem={dateItem}
                isSelectable={CalenderState.isSelectable}
                onDayCellClicked={() => { }}
                onDayCellLongPressed={(e: any) => viewOnDayCellLongPressed(e as MouseEvent, dateItem.date)}
                onTaskClicked={viewOnTaskClicked}
              ></DayCellColumn>
            ))}
          </Row>
        ))}

      </Grid>
    </div>
  );
};




export default CalenderViewComponent;