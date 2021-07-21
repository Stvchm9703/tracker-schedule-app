import React from 'react';
import CalenderViewComponent, { IDayCellEvent } from './calender';

interface IScheduleProps {
  taskList: Array<any>
}

interface IScheduleState {
  displayMode: "calender" | "monthly" | "weeky" | "daily" | "timetable" | "event" | "workThread";
  onDayCellClicked: IDayCellEvent,

}

class SchedulerComponent extends React.PureComponent<IScheduleProps, IScheduleState> {
  constructor(props: IScheduleProps) {
    super(props);
    this.state = {
      displayMode: "calender",
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
              taskList={this.props.taskList}
              onDayClicked={(e, date) => { console.log('CalenderViewComponent,click=', e, date.toFormat('yy-mm-dd')) }}
              onDaySelected={(e, date) => { console.log('CalenderViewComponent,selected=', e, date.toFormat('yy-mm-dd')) }}
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


export default SchedulerComponent;