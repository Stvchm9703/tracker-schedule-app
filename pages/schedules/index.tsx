import { Component } from "react";
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Trello } from '@/interfaces/Trello';
import NavLayout from '@/components/Layouts/index';
import SchedulerComponent from '@/components/Scheduler/application';


const scheduleList = () => {
  return (
    <SchedulerComponent taskList={[]} />
  );
}


scheduleList.getLayout = (page: any) => (
  <NavLayout>
    {page}
  </NavLayout>
);



export default scheduleList;