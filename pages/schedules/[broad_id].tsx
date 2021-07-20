import axios from 'axios';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { GetStaticProps } from 'next';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Trello } from '../../interfaces/Trello';

import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, Switcher, SwitcherItem, AppSwitcher20, HeaderPanel, Search20, Notification20, SwitcherDivider } from "carbon-components-react";
import NavLayout from '../../components/Layouts/index';

// // scheduler libs
// import Paper from '@material-ui/core/Paper';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     MonthView,
//     Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';
// // end- scheduler

// import Calender from '@/components/Scheduler/calender';


// trello_broad_id : 5k4uPRg7
const PageFetchTrello = async (trello_broadid: string) => {
  const { data } = await axios.get(`https://trello.com/b/${trello_broadid}.json`);
  return data as Trello;
}

const PageFetchSchedule = async (trello_broadid: string) => {
  // const { data } = await axios.get(``);
  const data = await axios.get(`/api/schedules`);
  return data;
}

// import test_data from '../../sample_data/time_sample';
export default function schedule() {
  const router = useRouter()
  const { broad_id } = router.query;
  const { data, error } = useSWR(broad_id, PageFetchTrello);
  const { appointments = data, er2 } = useSWR(broad_id, PageFetchSchedule);
  const currentDate = '2018-07-17';
  if (error || er2) return (<div>failed to load</div>);
  if (!data) return (<div>loading...</div>);
  return (
    <>
      <span>
        hi
      </span>
      {broad_id &&
        <div>
          <span>
            broad_id:  {broad_id}
          </span>
          <br />
          <span>
            data_id : {data.id}
            {/*  data : {JSON.stringify( data.cards)} */}
          </span>
        </div>
      }

      {/* <Calender appointments={appointments} currentDate={currentDate} /> */}
    </>
  )
}

schedule.getLayout = (page) => (
  <NavLayout>
    {page}
  </NavLayout>
);
