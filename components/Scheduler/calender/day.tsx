import React from "react";
import { Column, Tile, SelectableTile } from "carbon-components-react";
import styles from './calender.module.scss';
import { DateTime } from "luxon";
import { useLongPress } from "react-use"

import type { ITaskEvent, ITaskNode } from "./event";

export type IDayCellEvent = (event: MouseEvent | TouchEvent, day: DateTime) => any | void;



export interface IDayCellItem {
  isSelected: boolean,
  isToday: boolean,
  inMonth: boolean,
  date: DateTime,
  events: Array<ITaskNode>,
}
export interface IDayCellProps {
  dateItem: IDayCellItem,
  isSelectable: boolean,
  onDayCellClicked: IDayCellEvent,
  onDayCellLongPressed: IDayCellEvent,
  onTaskClicked: ITaskEvent,
}

const renderDayCell = (props: IDayCellProps) => {
  const { date, isToday, inMonth } = props.dateItem;
  const idKey = date.toFormat('yy-mm-dd');
  const labelClass = `${styles.day_label} ${isToday ? styles.is_today : ''}`;
  const tileClass = `${styles.day_tile}  ${(!inMonth ? styles.not_in_month : '')} ${isToday ? styles.is_today : ''}`;

  // console.log({ labelClass, dateItem });
  // long-press event 
  const onLongPress = (e: MouseEvent | TouchEvent) => props.onDayCellLongPressed(e, date);
  const longPressEvent = useLongPress(onLongPress, {
    isPreventDefault: true,
    delay: 900,
  });
  // 

  // PC-mouse-hover : show-Date 

  //
  return (
    <Column className={`${styles.day_cell} day-${idKey} bx--aspect-ratio bx--aspect-ratio--4x3`} >

      {!props.isSelectable &&
        <Tile
          id={idKey}
          className={tileClass}
          onClick={(e: any) => props.onDayCellClicked(e, date)}
          {...longPressEvent}
        >
          <span className={labelClass}> {`${date.day}`} </span>
          <div className={styles.task_list}>
            {props.dateItem.events.slice(0, 4).map((node: ITaskNode) =>(
              <div
                id={`task-id-${node.id}`}
                className={`task-${node.id} ${styles.task_item}`}
                key={`task-${node.id}`}
                onClick={(e: any) => props.onTaskClicked(e as MouseEvent, node)}
              >
              </div>)

            )}
            {(props.dateItem.events.length > 4) &&
              <span className={styles.task_more_item}
                onClick={(e: any) => props.onTaskClicked(e as MouseEvent, props.dateItem.events[5])} >
                more+ {props.dateItem.events.length - 4}
              </span>
            }
          </div>
        </Tile>
      }
      {props.isSelectable &&
        <SelectableTile
          id={idKey}
          className={tileClass}
          value={date.toFormat('yy-mm-dd')}
          onClick={(e: any) => props.onDayCellClicked(e, date)}
        >
          <span className={labelClass}> {`${date.day}`} </span>
          <div className={styles.task_list}>
            {props.dateItem.events.slice(0, 4).map((node: ITaskNode) =>
              <div
                id={`task-id-${node.id}`}
                className={`task-${node.id} ${styles.task_item}`}
                key={`task-${node.id}`}
                onClick={(e: any) => props.onTaskClicked(e as MouseEvent, node)}
              >
              </div>

            )}
            {(props.dateItem.events.length > 4) &&
              <span className={styles.task_more_item}
                onClick={(e: any) => props.onTaskClicked(e as MouseEvent, props.dateItem.events[5])} >
                more+ {props.dateItem.events.length - 4}
              </span>
            }
          </div>
        </SelectableTile>
      }
    </Column>
  )
}

const DayCellColumn = renderDayCell;
export default DayCellColumn;