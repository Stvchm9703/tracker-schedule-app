import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Trello } from '@/interfaces/Trello';

import NavLayout from '@/components/Layouts/index';
import TestLayout from '@/components/Layouts/default';

import SchedulerComponent from '@/components/Scheduler/application';
import type { ITaskNode } from '@/components/Scheduler/calender';

// trello_broad_id : 5k4uPRg7
const PageFetchTrello = async (trello_broadid: string) => {
  const { data } = await axios.get(`/api/trello/${trello_broadid}`);
  // const { data } = await axios.get(`https://trello.com/b/${trello_broadid}.json`);
  return data as Trello;
}
const onChange = (e) => {
  console.log(e);
}
// trello_broadid
const PageFetchSchedule = async (_: string) => {
  // const { data } = await axios.get(``);
  const data = await axios.get(`/api/schedules`);
  return data;
}

// import test_data from '../../sample_data/time_sample';
export default function schedule() {
  const router = useRouter()
  const { broad_id } = router.query;
  const { data, error } = useSWR(broad_id, PageFetchTrello);
  const schedule = useSWR(broad_id, PageFetchSchedule);
  let er2 = schedule.error;
  if (error || er2) return (<div>failed to load</div>);
  if (!data) return (<div>loading...</div>);

  return (
    <>
      <SchedulerComponent taskList={data.cards} onScheduleDateChange={e => onChange(e)} />
      {/* <Calender appointments={appointments} currentDate={currentDate} /> */}
    </>
  )
}
schedule.getLayout = (page: any) => (
  <NavLayout>
    {page}
  </NavLayout>
);


