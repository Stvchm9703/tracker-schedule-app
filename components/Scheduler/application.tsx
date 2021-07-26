import React, { useState, useRef, useEffect } from 'react';
import CalenderViewComponent from './calender';
import { IDayCellEvent, ITaskNode } from './calender/day';
import { DateTime } from 'luxon';

interface IScheduleProps {
  taskList: Array<ITaskNode>,
  onScheduleDateChange: (
    prevVal?: DateStateUpdateSet,
    currVal?: DateStateUpdateSet,
  ) => (any | void),
}
export interface DateStateUpdateSet {
  startTime: DateTime,
  endTime: DateTime
}
interface IScheduleState {
  displayMode: "calender" | "monthly" | "weeky" | "daily" | "timetable" | "event" | "workThread";
  onDayCellClicked: IDayCellEvent,
  startDate: DateTime,
  endDate: DateTime,
}

class SchedulerComponent extends React.PureComponent<IScheduleProps, IScheduleState> {
  constructor(props: IScheduleProps) {
    super(props);
    let startDate: DateTime = DateTime.now().startOf('month')
    let endDate: DateTime = DateTime.now().startOf('month').plus({ weeks: 5 })
    this.state = {
      displayMode: "calender",
      startDate,
      endDate,
    } as IScheduleState;

  }
  // onDayCellClicked : () => {};

  render() {
    return (
      <>
        {/* calender displayMode */}

        <div className="">
          {this.state.displayMode === 'calender' &&
            <CalenderViewComponent
              taskList={this.props.taskList as Array<ITaskNode>}
              onDayClicked={(e, date) => { console.log('CalenderViewComponent,click=', e, date.toFormat('yy-mm-dd')) }}
              onDaySelected={(e, date) => { console.log('CalenderViewComponent,selected=', e, date.toFormat('yy-mm-dd')) }}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          }
          {this.state.displayMode === 'monthly' &&
            <div className="s-scheduler-monthly"></div>
          }
        </div>
      </>
    );
  }
}

// function usePrevious<T>(value: (undefined| T)) {
//   const ref = useRef<T>();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }
const useSchedulerState = (props: IScheduleProps) => {
  // state
  const [state, setState] = useState({
    startDate: DateTime.now().startOf('month'),
    endDate: DateTime.now().startOf('month').plus({ weeks: 6 }),
    displayMode: "calender",
  } as IScheduleState);

  const prevDateRef = useRef<DateStateUpdateSet>();

  // effect 
  useEffect(() => {
    let updated: DateStateUpdateSet = {
      startTime: state.startDate,
      endTime: state.endDate,
    };
    props.onScheduleDateChange(prevDateRef.current, updated);
    prevDateRef.current = updated
  }, [state.startDate, state.endDate])
  return {
    SchedulerState: state,

  }
}

const renderComponent = (props: IScheduleProps) => {
  const { SchedulerState } = useSchedulerState(props)
  return (
    <>
      {/* calender displayMode */}

      <div className="">
        {SchedulerState.displayMode === 'calender' &&
          <CalenderViewComponent
            taskList={props.taskList as Array<ITaskNode>}
            onDayClicked={(e, date) => { console.log('CalenderViewComponent,click=', e, date.toFormat('yy-mm-dd')) }}
            onDaySelected={(e, date) => { console.log('CalenderViewComponent,selected=', e, date.toFormat('yy-mm-dd')) }}
            startDate={SchedulerState.startDate}
            endDate={SchedulerState.endDate}
          />
        }
        {SchedulerState.displayMode === 'monthly' &&
          <div className="s-scheduler-monthly"></div>
        }
      </div>
    </>
  );
}

export default SchedulerComponent;