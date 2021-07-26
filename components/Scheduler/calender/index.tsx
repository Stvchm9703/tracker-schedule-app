import React, { useState } from "react";
import { DateTime } from "luxon";
import styles from './calender.module.scss';

import { Grid, Row, Column, Tile, SelectableTile, ButtonSet, Button } from "carbon-components-react";
import { Add32, ChevronUp32, ChevronDown32, CalendarSettings32 } from '@carbon/icons-react';
import { useLongPress } from "react-use"

// import { useMouseHovered, useMouseWheel, useLongPress } from "react-use"
// import { } from "react-use-gesture";

export type IDayCellEvent = (event: MouseEvent | TouchEvent, day: DateTime) => any | void;
type internalDatyCellEvent = (event: MouseEvent | TouchEvent, day: IDayCellItem) => any | void;

interface ICalenderProps {
  taskList: Array<any>,
  startDate?: DateTime,
  endDate?: DateTime,
  onDayClicked: IDayCellEvent,
  onDaySelected: IDayCellEvent,
  // onScrollUp: Event,
  // onScrollDown: Event,
}

interface IDayCellItem {
  isSelected: boolean,
  isToday: boolean,
  inMonth: boolean,
  date: DateTime,
  events: Array<any>,
}

const renderDayCell = (dateItem: IDayCellItem, isSelectable: boolean, onDayCellClicked: IDayCellEvent, onDayCellLongPressed: IDayCellEvent) => {
  const { date, isToday, inMonth } = dateItem;
  const idKey = date.toFormat('yy-mm-dd');
  const labelClass = `${styles.day_label} ${isToday ? styles.is_today : ''} ${date.weekday > 6 ? styles.is_non_working_day : ''}`;
  const tileClass = `${styles.day_tile}  ${(!inMonth ? styles.not_in_month : '')} `;

  // long-press event 
  const onLongPress = (e: MouseEvent | TouchEvent) => onDayCellLongPressed(e, date);
  const longPressEvent = useLongPress(onLongPress, {
    isPreventDefault: true,
    delay: 900,
  });
  // 

  // PC-mouse-hover : show-Date 

  //
  return (
    <Column key={idKey} className={`${styles.day_cell} day-${idKey} bx--aspect-ratio bx--aspect-ratio--4x3`} >
      {!isSelectable &&
        <Tile
          id={idKey}
          className={tileClass}
          onClick={(e: any) => onDayCellClicked(e, date)}
          {...longPressEvent}
        >
          <span className={labelClass}>
            {`${date.day}`}
          </span>
        </Tile>
      }
      {isSelectable &&
        <SelectableTile
          id={idKey}
          className={tileClass}
          value={date.toFormat('yy-mm-dd')}
          onClick={(e: any) => onDayCellClicked(e, date)}
        >
          <span className={labelClass}>
            {`${date.day}`}
          </span>
        </SelectableTile>
      }
    </Column>
  )
}


const renderWeekRow = (
  weekNumber: number,
  dayObjArray: Array<IDayCellItem>,
  isSelectable: boolean,
  onDayCellClicked: IDayCellEvent,
  onDayCellLongPressed: IDayCellEvent,
) => (
  <Row condensed key={weekNumber} className={`week-${weekNumber}`}>
    <Column className={styles.week_number_indicator}>
      <div className={styles.week_number_disp}>
        <span> {weekNumber} </span>
      </div>
    </Column>

    {dayObjArray.map(dateItem => renderDayCell(
      dateItem, isSelectable,
      onDayCellClicked,
      onDayCellLongPressed))}
  </Row>
)

const CalenderViewComponent = (props: ICalenderProps) => {
  const currentDate: DateTime = DateTime.now();
  let the_first_day: DateTime = props.startDate ? props.startDate : DateTime.now().startOf('month')
  let the_last_day: DateTime = props.endDate ? props.endDate : DateTime.now().endOf('month')

  let the_first_week_number: number = the_first_day.weekNumber;
  let the_end_week_number: number = the_last_day.weekNumber;

  // DayCellLongPress
  const [isSelectableState, setSelectableState] = useState(false);
  const [daySelectedState, setDaySelectedState] = useState(Array<IDayCellItem>());
  const viewOnDayCellLongPressed: IDayCellEvent = (_: MouseEvent | TouchEvent, dateTrig: DateTime) => {
    // change state;
    console.log('viewOnDayCellLongPressed-', dateTrig.toFormat('yy-mm-dd'));
    setSelectableState(true);
  }

  const viewOnDayCellClicked: IDayCellEvent = (event: MouseEvent | TouchEvent, dateTrig: DateTime) => {
    if (isSelectableState) {
      setDaySelectedState([...daySelectedState,])
    }

    // event emit 
    props.onDayClicked(event, dateTrig);
  }

  // ---

  let rendGrid = [];
  let weekDayLabel = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  rendGrid.push(
    <Row key="weeky_day_index" condensed>
      <Column className={styles.week_number_indicator}></Column>
      {weekDayLabel.map((label: string) =>
        <Column key={label} className={`${styles.day_cell}`}><span>{label}</span></Column>
      )}
    </Row>
  )
  for (let index = the_first_week_number; index <= the_end_week_number; index++) {
    let weekObj = []
    for (let j = 1; j <= 7; j++) {
      let genDay = DateTime.fromObject({
        weekNumber: index,
        weekday: j,
      });
      weekObj.push({
        isToday: currentDate.day === genDay.day && currentDate.month === genDay.month,
        isSelected: false,
        date: genDay,
        inMonth: currentDate.month === genDay.month,
        events: [],
      } as IDayCellItem,
      );
    }

    rendGrid.push(
      renderWeekRow(
        index,
        weekObj,
        isSelectableState,
        viewOnDayCellClicked,
        viewOnDayCellLongPressed,
      )
    )
  }
  return (
    <>
      <div className="">
        <div className="control-left">
          <div> {currentDate.month}</div>
        </div>

        <div className="control-right">
          <Button
            renderIcon={Add32}
            iconDescription="Add Remark"
            tooltipPosition="bottom"
            hasIconOnly
            size="sm"
            onClick={() => { }}
          />

          {isSelectableState &&
            <Button kind="danger--tertiary"
              size="sm"
              onClick={() => { setSelectableState(false) }}>
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
            onClick={() => { }}
          />
          <Button
            kind="ghost"
            renderIcon={ChevronUp32}
            iconDescription="To Previous Month (PgUp)"
            tooltipPosition="bottom"
            hasIconOnly
            size="sm"
            onClick={() => { }}
          />
          <Button
            kind="ghost"
            renderIcon={ChevronDown32}
            iconDescription="To Next Month (PgDn)"
            tooltipPosition="bottom"
            hasIconOnly
            size="sm"
            onClick={() => { }}
          />

        </div>
      </div >

      <Grid condensed className={styles.calender_view}>
        {rendGrid}
      </Grid>
    </>
  );
}




export default CalenderViewComponent;