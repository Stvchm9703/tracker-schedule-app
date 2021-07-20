import React from "react";
import { DateTime } from "luxon";
import styles from './calender.module.scss';

import { Grid, Row, Column, Tile, AspectRatio } from "carbon-components-react";
import { Card } from '@carbon/ibmdotcom-react';
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */

/* eslint-disable-next-line react/no-multi-comp */


interface ICalenderProps {
  taskList: Array<any>
}

const renderDayCell = (date: DateTime) => (
  <Column key={date.toFormat('yy-mm-dd')} className={`${styles.day_cell} day-${date.toFormat('yy-mm-dd')}`} >
    <AspectRatio ratio={'4x3'}>
      <Tile id={date.toFormat('yy-mm-dd')} >
        <span className={styles.display_day}>
          {`${date.month} - ${date.day}`}
        </span>
      </Tile>
    </AspectRatio>
  </Column>
)

const CalenderViewComponent = (props: ICalenderProps) => {
  const currentDate: DateTime = DateTime.now();
  let dateList: Array<Date> = [];
  let the_first_day: DateTime = DateTime.now().startOf('month')
  let the_last_day: DateTime = DateTime.now().endOf('month')

  let the_first_week_number: number = the_first_day.weekNumber;
  let the_end_week_number: number = the_last_day.weekNumber;

  let rendGrid = [];
  for (let index = the_first_week_number; index <= the_end_week_number; index++) {
    let weekObj = []
    for (let j = 1; j < 7; j++) {
      weekObj.push(
        DateTime.fromObject({
          weekNumber: index,
          weekday: j,
        })
      );
    }
    rendGrid.push(
      <Row condensed key={index} className={`week-${index}`}>
        <Column className={styles.week_number_indicator}> <span> {index} </span></Column>
        {weekObj.map(e => renderDayCell(e))}
      </Row>
    )
  }
  return (
    <Grid fullWidth condensed className={styles.calender_view}>
      {rendGrid}
    </Grid>
  );
}

export default CalenderViewComponent;