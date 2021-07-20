import React from 'react';
import CalenderViewComponent from './calender';
interface IScheduleProps {
  taskList: Array<any>
}

interface IScheduleState {
  displayMode: "calender" | "monthly" | "weeky" | "daily" | "timetable" | "event" | "workThread";
}

class SchedulerComponent extends React.PureComponent<IScheduleProps, IScheduleState> {
  constructor(props: IScheduleProps) {
    super(props);
    this.state = { 
      displayMode: "calender" 
    } as IScheduleState;
  }
  render() {
    return (
      <>
        {/* calender displayMode */}

        <div className="">
          {this.state.displayMode === 'calender' &&
            <CalenderViewComponent taskList={this.props.taskList} />
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