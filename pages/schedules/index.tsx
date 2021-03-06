import { Component } from "react";
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Trello } from '@/interfaces/Trello';
import NavLayout from '@/components/Layouts/index';
import TestLayout from '@/components/Layouts/default';

import SchedulerComponent from '@/components/Scheduler/application';
import { ITaskNode } from '@/components/Scheduler/calender';

import { DateTime } from "luxon";
const scheduleList = () => {
  const onChange = (e) => {
    console.log(e);
  }
  const taskList = [
    {
      id: 1,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 2,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 3,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 4,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 5,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 6,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
    {
      id: 7,
      title: 'work out',
      project_id: 'sdkjf1',
      startTime: DateTime.fromFormat('2021-07-21', 'yyyy-MM-dd'),
      endTime: DateTime.fromFormat('2021-07-28', 'yyyy-MM-dd'),
    },
  ] as Array<ITaskNode>
  return (
    <SchedulerComponent taskList={taskList} onScheduleDateChange={onChange} />
  );
}


scheduleList.getLayout = (page: any) => (
  <NavLayout>
    {page}
  </NavLayout>
);
//{/* <TestLayout> {page} </TestLayout> */}
// <NavLayout>
//   {page}
// </NavLayout>
// );



export default scheduleList;