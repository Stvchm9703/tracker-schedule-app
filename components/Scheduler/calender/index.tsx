import React, { useState } from "react";
import { DateTime } from "luxon";
import styles from './calender.module.scss';

import { Grid, Row, Column, Tile, SelectableTile, ButtonSet, Button } from "carbon-components-react";
import { Add16 } from '@carbon/icons-react';
import { useLongPress } from "react-use"

// import { useMouseHovered, useMouseWheel, useLongPress } from "react-use"
// import { } from "react-use-gesture";

export type IDayCellEvent = (event: MouseEvent | TouchEvent, day: DateTime) => any | void;
type internalDatyCellEvent = (event: MouseEvent | TouchEvent, day: IDayCellItem) => any | void;

interface ICalenderProps {
  taskList: Array<any>,
  onDayClicked: IDayCellEvent,
  onDaySelected: IDayCellEvent,
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
  const labelClass = isToday ? styles.is_today : '';
  const tileClass = `${styles.day_tile}  ${(!inMonth ? styles.not_in_month : '')} `;

  console.log({ labelClass });
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
            {`${date.month} - ${date.day}`}
          </span>
        </Tile>
      }
      {isSelectable &&
        <SelectableTile
          id={idKey}
          className={`${styles.day_tile}`}
          value={date.toFormat('yy-mm-dd')}
          onClick={(e: any) => onDayCellClicked(e, date)}
        >
          <span className={labelClass}>
            {`${date.month} - ${date.day}`}
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
  let the_first_day: DateTime = DateTime.now().startOf('month')
  let the_last_day: DateTime = DateTime.now().endOf('month')

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
    props.onDayClicked(event, dateTrig);
  }

  // ---

  let rendGrid = [];
  let weekDayLabel = ['Monday', 'Tuesday', 'Wedesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
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
      <ButtonSet>
        <div> {currentDate.month}</div>
        <Button
          hasIconOnly
          renderIcon={Add16}
          iconDescription="Add Event"
          onClick={() => { }} />
        {isSelectableState &&
          <Button kind="danger--tertiary" onClick={() => { setSelectableState(false) }}>
            Cancel
          </Button>
        }
      </ButtonSet>
      <Grid fullWidth condensed className={styles.calender_view}>
        {rendGrid}
      </Grid>
    </>
  );
}




export default CalenderViewComponent;