import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Trello } from '@/interfaces/Trello';

import NavLayout from '@/components/Layouts/index';

import SchedulerComponent from '@/components/Scheduler/application';

// trello_broad_id : 5k4uPRg7
const PageFetchTrello = async (trello_broadid: string) => {
  const { data } = await axios.get(`/api/trello/${trello_broadid}`);
  // const { data } = await axios.get(`https://trello.com/b/${trello_broadid}.json`);
  return data as Trello;
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
  // let appointments = schedule.data;
  let er2 = schedule.error;
  // const currentDate = '2018-07-17';
  if (error || er2) return (<div>failed to load</div>);
  if (!data) return (<div>loading...</div>);
  // const y = (broad_id: string) => (
  //   <span>
  //     hi
  //   </span>
  //   { broad_id &&
  //     <div>
  //       <span>
  //         broad_id:  {broad_id}
  //       </span>
  //       <br />
  //       <span>
  //         data_id : {data.id}
  //       </span>
  //     </div>
  //   }
  // );
  return (
    <>
      <SchedulerComponent taskList={data.cards} />
      {/* <Calender appointments={appointments} currentDate={currentDate} /> */}
    </>
  )
}

schedule.getLayout = (page: any) => (
  <NavLayout>
    {page}
  </NavLayout>
);
