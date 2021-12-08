/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { useEffect, useRef, useCallback, useState } from 'react';

import { createNiitChartVisualization } from '../niit_chart_visualization';
import { NiitChartVisualizationDependencies } from '../plugin';
import { NiitChartParser } from '../data_model/niit_chart_parser';
import { EuiComboBox, EuiFormRow, EuiResizeObserver, throttle } from '@elastic/eui';
import './niit_chart_vis.scss';
import { IInterpreterRenderHandlers } from 'src/plugins/expressions';

// niit_charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar, PolarArea, Line, Radar, Doughnut, Bubble } from 'react-chartjs-2';
import _ from 'lodash';
interface ChartVisComponentProps {
  deps: NiitChartVisualizationDependencies;
  fireEvent: IInterpreterRenderHandlers['event'];
  renderComplete: () => void;
  visData: NiitChartParser;
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// dropdown list
const options1 = [
  {
    label: 'Bar',
  },
  {
    label: 'Line',
  },
  {
    label: 'Pie',
  },
  {
    label: 'Doughnut',
  },
  {
    label: 'Polar',
  },
  {
    label: 'Radar',
  },
];
let filterSearchResponse: any;
type ChartVisController = InstanceType<ReturnType<typeof createNiitChartVisualization>>;

const ChartVisComponent = ({
  visData,
  fireEvent,
  renderComplete,
  deps,
}: ChartVisComponentProps) => {
  const niit_chartDiv = useRef<HTMLDivElement>(null);
  const visController = useRef<ChartVisController | null>(null);
  document.addEventListener('typeChanged', (data: any) => {});
  filterSearchResponse = visData.searchAPI.inspectorAdapters.requests.getRequests()[0].response
    .json;

  console.log('Im from backend', visData);
  // add logic to filter object and render
  const hits = [
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-IBM-NOV-28-2018',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-IBM-NOV-28-2018',
        programType: 'EXPRESS',
        endDate: '2019-03-19T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'IBM',
        updatedOn: '2019-02-12T07:53:11.734Z',
        createdOn: '2019-02-12T08:22:21.136Z',
        modules: [
          {
            moduleName: 'COMMFE06',
            startDate: '2018-11-28T00:00:00.000Z',
            endDate: '2019-02-24T00:00:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'MWPRJV02',
            startDate: '2019-02-25T00:00:00.000Z',
            endDate: '2019-04-14T00:00:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Nov-28-2018',
        programScheduleTitle: 'Java-Express FSD for IBM NOV 28 Wave 1',
        programName: 'PRGEXPRJV04',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE06',
            registrations: [],
          },
          {
            moduleName: 'MWPRJV02',
            registrations: [],
          },
        ],
        startDate: '2018-11-28T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'cghosh12@in.ibm.com',
          },
          {
            username: 'anumaram@in.ibm.com',
          },
          {
            username: 'mapaul31@in.ibm.com',
          },
          {
            username: 'shamohan@in.ibm.com',
          },
          {
            username: 'avinkumarp@in.ibm.com',
          },
          {
            username: 'koustav.ch@in.ibm.com',
          },
          {
            username: 'abdulhakkim@in.ibm.com',
          },
          {
            username: 'roopa.gatte@in.ibm.com',
          },
          {
            username: 'aniroy08@in.ibm.com',
          },
          {
            username: 'bipmitra@in.ibm.com',
          },
          {
            username: 'bprasadr@in.ibm.com',
          },
          {
            username: 'debiguha@in.ibm.com',
          },
          {
            username: 'psrimani@in.ibm.com',
          },
          {
            username: 'ranjsinm@in.ibm.com',
          },
          {
            username: 'choudhso@in.ibm.com',
          },
          {
            username: 'rajesmku@in.ibm.com',
          },
          {
            username: 'abojji36@in.ibm.com',
          },
          {
            username: 'bharatarora@in.ibm.com',
          },
          {
            username: 'madagr54@in.ibm.com',
          },
          {
            username: 'pvasth36@in.ibm.com',
          },
          {
            username: 'dayyalsa@in.ibm.com',
          },
          {
            username: 'roonigam@in.ibm.com',
          },
          {
            username: 'ssantapp@in.ibm.com',
          },
          {
            username: 'abdulashikkhan.m@in.ibm.com',
          },
          {
            username: 'mihirp@in.ibm.com',
          },
          {
            username: 'vikoppar@in.ibm.com',
          },
          {
            username: 'sukantha@in.ibm.com',
          },
          {
            username: 'vikumar4@in.ibm.com',
          },
          {
            username: 'sweathv1@in.ibm.com',
          },
          {
            username: 'akizhaku@in.ibm.com',
          },
          {
            username: 'debajmuk@in.ibm.com',
          },
          {
            username: 'sannandi@in.ibm.com',
          },
          {
            username: 'sunil.bhadram@in.ibm.com',
          },
          {
            username: 'indrshar@in.ibm.com',
          },
          {
            username: 'blakhani@in.ibm.com',
          },
          {
            username: 'kancrana@in.ibm.com',
          },
          {
            username: 'rajmeetbal@in.ibm.com',
          },
          {
            username: 'roopika.mahajan@in.ibm.com',
          },
          {
            username: 'ssirisha@in.ibm.com',
          },
          {
            username: 'khayatiohri@in.ibm.com',
          },
          {
            username: 'angangil@in.ibm.com',
          },
          {
            username: 'rakeskun@in.ibm.com',
          },
          {
            username: 'ramya.behara@in.ibm.com',
          },
          {
            username: 'shweta.vikas@in.ibm.com',
          },
          {
            username: 'mohanmb1@in.ibm.com',
          },
          {
            username: 'shwet124@in.ibm.com',
          },
          {
            username: 'chayanpl@in.ibm.com',
          },
          {
            username: 'kumarr83@in.ibm.com',
          },
          {
            username: 'rejchand@in.ibm.com',
          },
          {
            username: 'sureshgh@in.ibm.com',
          },
          {
            username: 'bharanitharan.r@in.ibm.com',
          },
          {
            username: 'lamahant@in.ibm.com',
          },
          {
            username: 'manoj.dora@in.ibm.com',
          },
          {
            username: 'sharad.gaikwad@in.ibm.com',
          },
          {
            username: 'sparkasa@in.ibm.com',
          },
          {
            username: 'pmannige@in.ibm.com',
          },
          {
            username: 'rajikdas@in.ibm.com',
          },
          {
            username: 'sandkdas@in.ibm.com',
          },
          {
            username: 'sudhakar_lakkireddy@in.ibm.com',
          },
          {
            username: 'pawan.kulkarni@in.ibm.com',
          },
          {
            username: 'sadammur@in.ibm.com',
          },
          {
            username: 'shrmiraj@in.ibm.com',
          },
          {
            username: 'ashisin3@in.ibm.com',
          },
          {
            username: 'soumehra@in.ibm.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-IBM-DEC-21-2018',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-IBM-DEC-21-2018',
        programType: 'EXPRESS',
        endDate: '2019-04-12T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'IBM',
        updatedOn: '2019-02-12T07:53:11.734Z',
        createdOn: '2019-02-12T08:22:21.312Z',
        modules: [
          {
            moduleName: 'COMMFE06',
            startDate: '2018-12-21T00:00:00.000Z',
            endDate: '2019-03-24T00:00:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'MWPRJV02',
            startDate: '2019-03-25T00:00:00.000Z',
            endDate: '2019-04-12T00:00:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Dec-21-2018',
        programScheduleTitle: 'Java-Express FSD for IBM DEC 21 Wave 2',
        programName: 'PRGEXPRJV04',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE06',
            registrations: [],
          },
          {
            moduleName: 'MWPRJV02',
            registrations: [],
          },
        ],
        startDate: '2018-12-21T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'yansongg@cn.ibm.com',
          },
          {
            username: 'xfxiao@cn.ibm.com',
          },
          {
            username: 'zsszhush@cn.ibm.com',
          },
          {
            username: 'vndfge@cn.ibm.com',
          },
          {
            username: 'zyysz@cn.ibm.com',
          },
          {
            username: 'szhuangl@cn.ibm.com',
          },
          {
            username: 'zzliudl@cn.ibm.com',
          },
          {
            username: 'szpzhang@cn.ibm.com',
          },
          {
            username: 'tyktang@cn.ibm.com',
          },
          {
            username: 'vndpfwan@cn.ibm.com',
          },
          {
            username: 'weiwdl@cn.ibm.com',
          },
          {
            username: 'qxkqin@cn.ibm.com',
          },
          {
            username: 'lycdly@cn.ibm.com',
          },
          {
            username: 'frzhang@cn.ibm.com',
          },
          {
            username: 'lanzejun@cn.ibm.com',
          },
          {
            username: 'tangzl@cn.ibm.com',
          },
          {
            username: 'xiaoweil@cn.ibm.com',
          },
          {
            username: 'fzmfu@cn.ibm.com',
          },
          {
            username: 'ruchir@cn.ibm.com',
          },
          {
            username: 'zhangkh@cn.ibm.com',
          },
          {
            username: 'xuxsxs@cn.ibm.com',
          },
          {
            username: 'rmleo@mx1.ibm.com',
          },
          {
            username: 'mrojas@mx1.ibm.com',
          },
          {
            username: 'mastachi@mx1.ibm.com',
          },
          {
            username: 'jrenel@mx1.ibm.com',
          },
          {
            username: 'binbinye@ca.ibm.com',
          },
          {
            username: 'snyderj@us.ibm.com',
          },
          {
            username: 'jamie.scott.richardson@ibm.com',
          },
          {
            username: 'libodi@us.ibm.com',
          },
          {
            username: 'mtoups@us.ibm.com',
          },
          {
            username: 'jjdavis@us.ibm.com',
          },
          {
            username: 'wuho@us.ibm.com',
          },
          {
            username: 'rajeevdesai@in.ibm.com',
          },
          {
            username: 'grimohan@in.ibm.com',
          },
          {
            username: 'georgroy@in.ibm.com',
          },
          {
            username: 'csamudra@in.ibm.com',
          },
          {
            username: 'ravineni@in.ibm.com',
          },
          {
            username: 'shrabpal@in.ibm.com',
          },
          {
            username: 'sjeevaka@in.ibm.com',
          },
          {
            username: 'sathisr1@in.ibm.com',
          },
          {
            username: 'surmanch@in.ibm.com',
          },
          {
            username: 'dinpatna@in.ibm.com',
          },
          {
            username: 'myeddula@in.ibm.com',
          },
          {
            username: 'ddhandav@in.ibm.com',
          },
          {
            username: 'nagmukka@in.ibm.com',
          },
          {
            username: 'chebirje@in.ibm.com',
          },
          {
            username: 'dhamajhi@in.ibm.com',
          },
          {
            username: 'lakshmigurusamy@in.ibm.com',
          },
          {
            username: 'rkotwali@in.ibm.com',
          },
          {
            username: 'vavilar@mx1.ibm.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-IBM-MAR-7-2019',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-IBM-MAR-7-2019',
        programType: 'EXPRESS',
        updatedBy: 'tineshwari.pathade',
        endDate: '2019-07-11T09:28:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'IBM',
        updatedOn: '2019-06-04T11:34:09.522Z',
        createdOn: '2019-03-11T07:47:59.536Z',
        modules: [
          {
            moduleName: 'COMMFE06',
            startDate: '2019-03-12T09:28:00.000Z',
            endDate: '2019-04-25T09:28:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'MWPRJV02',
            startDate: '2019-04-26T09:28:00.000Z',
            endDate: '2019-07-11T09:28:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Mar-7-2019',
        programScheduleTitle: 'Java-Express FSD for IBM MAR 7 Wave 3',
        createdBy: 'SYSTEM',
        programName: 'PRGEXPRJV04',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE06',
            registrations: [],
          },
          {
            moduleName: 'MWPRJV02',
            registrations: [],
          },
        ],
        startDate: '2019-03-12T09:28:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'divgoel4@in.ibm.com',
          },
          {
            username: 'mukherjee.arijit@in.ibm.com',
          },
          {
            username: 'mrawasth@in.ibm.com',
          },
          {
            username: 'ragasing@in.ibm.com',
          },
          {
            username: 'tanupathak@in.ibm.com',
          },
          {
            username: 'maadroja@in.ibm.com',
          },
          {
            username: 'kusum111@in.ibm.com',
          },
          {
            username: 'shdudeku@in.ibm.com',
          },
          {
            username: 'shbhosle@in.ibm.com',
          },
          {
            username: 'meagarw4@in.ibm.com',
          },
          {
            username: 'pribaksh@in.ibm.com',
          },
          {
            username: 'rupjain1@in.ibm.com',
          },
          {
            username: 'hkrishn2@in.ibm.com',
          },
          {
            username: 'jayanthi.meenakshi@in.ibm.com',
          },
          {
            username: 'sumdubey@in.ibm.com',
          },
          {
            username: 'ankisahu@in.ibm.com',
          },
          {
            username: 'manas.bhattacharya@in.ibm.com',
          },
          {
            username: 'schatur6@in.ibm.com',
          },
          {
            username: 'rtiruman@in.ibm.com',
          },
          {
            username: 'karmahal@in.ibm.com',
          },
          {
            username: 'prvaleti@in.ibm.com',
          },
          {
            username: 'mongarai@in.ibm.com',
          },
          {
            username: 'jagvijay@in.ibm.com',
          },
          {
            username: 'vijnredd@in.ibm.com',
          },
          {
            username: 'ruvendas@in.ibm.com',
          },
          {
            username: 'vsathiya@in.ibm.com',
          },
          {
            username: 'pankaj.mahato@in.ibm.com',
          },
          {
            username: 'vjadia47@in.ibm.com',
          },
          {
            username: 'sujanagangari@in.ibm.com',
          },
          {
            username: 'ram.kumar@in.ibm.com',
          },
          {
            username: 'yogekal1@in.ibm.com',
          },
          {
            username: 'ksetty07@in.ibm.com',
          },
          {
            username: 'kiran.shanbaug@in.ibm.com',
          },
          {
            username: 'sreepdey@in.ibm.com',
          },
          {
            username: 'saramanc@in.ibm.com',
          },
          {
            username: 'prabirjha@in.ibm.com',
          },
          {
            username: 'ajasola3@in.ibm.com',
          },
          {
            username: 'jeesingh@in.ibm.com',
          },
          {
            username: 'pretater@in.ibm.com',
          },
          {
            username: 'shublika@in.ibm.com',
          },
          {
            username: 'nirpanch@in.ibm.com',
          },
          {
            username: 'rawatpr1@in.ibm.com',
          },
          {
            username: 'arthi.lucas@in.ibm.com',
          },
          {
            username: 'yuvakrs1@in.ibm.com',
          },
          {
            username: 'vijay_kumar@in.ibm.com',
          },
          {
            username: 'shjain12@in.ibm.com',
          },
          {
            username: 'redunoor@in.ibm.com',
          },
          {
            username: 'sacpopli@in.ibm.com',
          },
          {
            username: 'paranjan@in.ibm.com',
          },
          {
            username: 'mukherjeesaikat@in.ibm.com',
          },
          {
            username: 'kassinha@in.ibm.com',
          },
          {
            username: 'namita.singhmaan@in.ibm.com',
          },
          {
            username: 'amaram08@in.ibm.com',
          },
          {
            username: 'kumtha23@in.ibm.com',
          },
          {
            username: 'nraikun1@in.ibm.com',
          },
          {
            username: 'ranjanc1@in.ibm.com',
          },
          {
            username: 'ppathak0@in.ibm.com',
          },
          {
            username: 'linsahoo@in.ibm.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRODENGMDIGI01-COMPLETE-UST-GLOBAL-MAR-19-2019',
      _score: 1.0,
      _ignored: ['description.keyword'],
      _source: {
        scheduleName: 'PRODENGMDIGI01-COMPLETE-UST-GLOBAL-MAR-19-2019',
        programType: 'COMPLETE',
        updatedBy: 'SYSTEM',
        endDate: '2019-07-20T09:28:00.000Z',
        deliveryModel: 'REMOTE',
        description:
          'Software and product engineering with Digital Transformation projects demands a new set of skills from erstwhile project managers. \n\n The program essentially builds these set of competencies: \n\n• Solutioning in the Digital Space\n\n• Transforming Solution visions into executable designs on a specific set of technologies\n\n• Managing engineering across multiple-releases',
        organisation: 'UST-GLOBAL',
        updatedOn: '2019-03-19T09:16:10.151Z',
        createdOn: '2019-03-19T09:41:09.371Z',
        modules: [
          {
            moduleName: 'PROBSLNGDIGI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'digital-platforms',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'DSGNPLTMDIGI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'architecture',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'DSGNUEXMDIGI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'digital-platforms',
            sequence: 3,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'ENGMGMTDIGI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'Eng Tools & Practices and DevOps',
            sequence: 4,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'OVWSLNMDIGI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'digital-platforms',
            sequence: 5,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'CASESTDYDIDI01',
            startDate: '2019-03-18T05:30:00.000Z',
            endDate: '2019-07-20T05:30:00.000Z',
            subject: 'digital-platforms',
            sequence: 6,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Mar-19-2019',
        programScheduleTitle:
          'Digital Technologies and Product Engineering Management Series for UST Global',
        createdBy: 'SYSTEM',
        programName: 'PRODENGMDIGI01',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'PROBSLNGDIGI01',
            registrations: [],
          },
          {
            moduleName: 'DSGNPLTMDIGI01',
            registrations: [],
          },
          {
            moduleName: 'DSGNUEXMDIGI01',
            registrations: [],
          },
          {
            moduleName: 'ENGMGMTDIGI01',
            registrations: [],
          },
          {
            moduleName: 'OVWSLNMDIGI01',
            registrations: [],
          },
          {
            moduleName: 'CASESTDYDIDI01',
            registrations: [],
          },
        ],
        startDate: '2019-03-18T09:28:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'adarsh.madhusudanan@ust-global.com',
          },
          {
            username: 'ahamedullah.kalilullah@ust-global.com',
          },
          {
            username: 'anilkumar.narayanan@ust-global.com',
          },
          {
            username: 'anitha.prajish@ust-global.com',
          },
          {
            username: 'annapoorna.presannakumar@ust-global.com',
          },
          {
            username: 'anoop.krishnan1@ust-global.com',
          },
          {
            username: 'aromal.gopalakrishnan@ust-global.com',
          },
          {
            username: 'arun.nambiar@ust-global.com',
          },
          {
            username: 'asha.purushothaman@ust-global.com',
          },
          {
            username: 'asif.nizar@ust-global.com',
          },
          {
            username: 'athira.lathika@ust-global.com',
          },
          {
            username: 'babitha.chacko@ust-global.com',
          },
          {
            username: 'babitha.shanmughan@ust-global.com',
          },
          {
            username: 'bindu.john@ust-global.com',
          },
          {
            username: 'bindya.babu@ust-global.com',
          },
          {
            username: 'bubby.george@ust-global.com',
          },
          {
            username: 'chinju.jayaramdas@ust-global.com',
          },
          {
            username: 'deepa.gopinathan@ust-global.com',
          },
          {
            username: 'dhanya.sreekumar@ust-global.com',
          },
          {
            username: 'don.fernandez@ust-global.com',
          },
          {
            username: 'george.varghese@ust-global.com',
          },
          {
            username: 'greeshma.soman@ust-global.com',
          },
          {
            username: 'jishakaralatha.mattath@ust-global.com',
          },
          {
            username: 'mariappan.malayappan@ust-global.com',
          },
          {
            username: 'marina.oommen@ust-global.com',
          },
          {
            username: 'nazia.kalam@ust-global.com',
          },
          {
            username: 'nipun.varma@ust-global.com',
          },
          {
            username: 'prabha.satya@ust-global.com',
          },
          {
            username: 'prakash.palaniswamy@ust-global.com',
          },
          {
            username: 'pramod.ramachandranpillai@ust-global.com',
          },
          {
            username: 'pratheep.mohanan@ust-global.com',
          },
          {
            username: 'rajeev.mekkara@ust-global.com',
          },
          {
            username: 'rajesh.ramachandran@ust-global.com',
          },
          {
            username: 'rajesh.raveendranath@ust-global.com',
          },
          {
            username: 'raji.sarojini@ust-global.com',
          },
          {
            username: 'rakesh.ramachandrannair@ust-global.com',
          },
          {
            username: 'ranjit.bhaskaran@ust-global.com',
          },
          {
            username: 'ravikanth.vobbilichetty@ust-global.com',
          },
          {
            username: 'ronnie.jacob@ust-global.com',
          },
          {
            username: 'sandeep.sreedharan@ust-global.com',
          },
          {
            username: 'sandeep.haridas@ust-global.com',
          },
          {
            username: 'sanjay.vasu@ust-global.com',
          },
          {
            username: 'saritha.kumar@ust-global.com',
          },
          {
            username: 'satya.das@ust-global.com',
          },
          {
            username: 'santoshkumar.biradar@ust-global.com',
          },
          {
            username: 'saumya.girija@ust-global.com',
          },
          {
            username: 'seema.raj@ust-global.com',
          },
          {
            username: 'selvakumar.muthusamy@ust-global.com',
          },
          {
            username: 'sesha.ramanujam@ust-global.com',
          },
          {
            username: 'shaji.ramasuthan@ust-global.com',
          },
          {
            username: 'shellak.davis@ust-global.com',
          },
          {
            username: 'shibu.stephenson@ust-global.com',
          },
          {
            username: 'shihab.mohamed@ust-global.com',
          },
          {
            username: 'sivan.ramachandran@ust-global.com',
          },
          {
            username: 'sowmya.mani@ust-global.com',
          },
          {
            username: 'sreedevi.ammukuttyamma@ust-global.com',
          },
          {
            username: 'sreedevi.varadarajan@ust-global.com',
          },
          {
            username: 'sugeetha.subbarayalu@ust-global.com',
          },
          {
            username: 'suja.lathika@ust-global.com',
          },
          {
            username: 'sumod.kumar@ust-global.com',
          },
          {
            username: 'suraj.kesavanradhakrishnan@ust-global.com',
          },
          {
            username: 'swapna.potty@ust-global.com',
          },
          {
            username: 'syamini.vijayababu@ust-global.com',
          },
          {
            username: 'vidya.nair@ust-global.com',
          },
          {
            username: 'zabry.mohamed@ust-global.com',
          },
          {
            username: 'reshmy.raghavan@ust-global.com',
          },
          {
            username: 'sahana.shenoy@ust-global.com',
          },
          {
            username: 'rejus.joseph@ust-global.com',
          },
          {
            username: 'moona.eipe@ust-global.com',
          },
          {
            username: 'priya.gopinath@ust-global.com',
          },
          {
            username: 'sinu.sam@ust-global.com',
          },
          {
            username: 'puneetkumar.bhatia@ust-global.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-IBM-APR19-W5',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-IBM-APR19-W5',
        programType: 'EXPRESS',
        updatedBy: 'SYSTEM',
        endDate: '2019-08-15T09:28:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'IBM',
        updatedOn: '2019-03-19T09:16:10.151Z',
        createdOn: '2019-04-19T06:53:17.182Z',
        modules: [
          {
            moduleName: 'COMMFE06',
            startDate: '2019-04-11T09:28:00.000Z',
            endDate: '2019-06-11T09:28:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'MWPRJV02',
            startDate: '2019-06-12T09:28:00.000Z',
            endDate: '2019-08-15T09:28:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Apr19-W5',
        programScheduleTitle: 'Java-Express FSD for IBM APR 19 Wave 5',
        createdBy: 'SYSTEM',
        programName: 'PRGEXPRJV04',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE06',
            registrations: [],
          },
          {
            moduleName: 'MWPRJV02',
            registrations: [],
          },
        ],
        startDate: '2019-04-11T09:28:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'npasrich@in.ibm.com',
          },
          {
            username: 'ramit.chawla@in.ibm.com',
          },
          {
            username: 'mramachandran@in.ibm.com',
          },
          {
            username: 'jsanjeev@in.ibm.com',
          },
          {
            username: 'vikanwal@in.ibm.com',
          },
          {
            username: 'anurag11@in.ibm.com',
          },
          {
            username: 'remya.santhosh@in.ibm.com',
          },
          {
            username: 'shjindal@in.ibm.com',
          },
          {
            username: 'ramesku1@in.ibm.com',
          },
          {
            username: 'vijaybangariya@in.ibm.com',
          },
          {
            username: 'lokeswarik@in.ibm.com',
          },
          {
            username: 'taghosh2@in.ibm.com',
          },
          {
            username: 'kajpani1@in.ibm.com',
          },
          {
            username: 'samdash2@in.ibm.com',
          },
          {
            username: 'annirose@in.ibm.com',
          },
          {
            username: 'prapat16@in.ibm.com',
          },
          {
            username: 'balajp24@in.ibm.com',
          },
          {
            username: 'dipak.upwanshi@in.ibm.com',
          },
          {
            username: 'abhijpau@in.ibm.com',
          },
          {
            username: 'mganimid@in.ibm.com',
          },
          {
            username: 'pthambur@in.ibm.com',
          },
          {
            username: 'amanand0@in.ibm.com',
          },
          {
            username: 'aasahuja@in.ibm.com',
          },
          {
            username: 'vgodhasa@in.ibm.com',
          },
          {
            username: 'sarvesh.naik@in.ibm.com',
          },
          {
            username: 'shruomar@in.ibm.com',
          },
          {
            username: 'vdevurka@in.ibm.com',
          },
          {
            username: 'jaya.mondal@in.ibm.com',
          },
          {
            username: 'saradar1@in.ibm.com',
          },
          {
            username: 'vignesh15@in.ibm.com',
          },
          {
            username: 'deeksahu@in.ibm.com',
          },
          {
            username: 'sanchbis@in.ibm.com',
          },
          {
            username: 'issankar@in.ibm.com',
          },
          {
            username: 'aponnada@in.ibm.com',
          },
          {
            username: 'mubharmo@in.ibm.com',
          },
          {
            username: 'rapapolu@in.ibm.com',
          },
          {
            username: 'karikatl@in.ibm.com',
          },
          {
            username: 'sasarka3@in.ibm.com',
          },
          {
            username: 'mansahu5@in.ibm.com',
          },
          {
            username: 'a.padmanaban@in.ibm.com',
          },
          {
            username: 'thmounik@in.ibm.com',
          },
          {
            username: 'deepmada@in.ibm.com',
          },
          {
            username: 'suddredd@in.ibm.com',
          },
          {
            username: 'dalaishr@in.ibm.com',
          },
          {
            username: 'deeshah4@in.ibm.com',
          },
          {
            username: 'kaparth1@in.ibm.com',
          },
          {
            username: 'arsikdar@in.ibm.com',
          },
          {
            username: 'janaraya@in.ibm.com',
          },
          {
            username: 'sureallu@in.ibm.com',
          },
          {
            username: 'sharma.pooja@in.ibm.com',
          },
          {
            username: 'sanbhadr@in.ibm.com',
          },
          {
            username: 'vensraju@in.ibm.com',
          },
          {
            username: 'ricsapra@in.ibm.com',
          },
          {
            username: 'akank135@in.ibm.com',
          },
          {
            username: 'shikha.rani@in.ibm.com',
          },
          {
            username: 'reshjai1@in.ibm.com',
          },
          {
            username: 'slakkar1@in.ibm.com',
          },
          {
            username: 'souradat@in.ibm.com',
          },
          {
            username: 'munmjana@in.ibm.com',
          },
          {
            username: 'sharma_sumit@in.ibm.com',
          },
          {
            username: 'kimudunu@in.ibm.com',
          },
          {
            username: 'gbethana@in.ibm.com',
          },
          {
            username: 'sreehkon@in.ibm.com',
          },
          {
            username: 'manjsha1@in.ibm.com',
          },
          {
            username: 'amarvenu@in.ibm.com',
          },
          {
            username: 'swarnankamaity@in.ibm.com',
          },
          {
            username: 'sandeeprama@in.ibm.com',
          },
          {
            username: 'artipardeshi@in.ibm.com',
          },
          {
            username: 'madwarai@in.ibm.com',
          },
          {
            username: 'neetyada@in.ibm.com',
          },
          {
            username: 'arati.prabhu@in.ibm.com',
          },
          {
            username: 'gotiwari@in.ibm.com',
          },
          {
            username: 'suresh.bose@in.ibm.com',
          },
          {
            username: 'thars111@in.ibm.com',
          },
          {
            username: 'anupri12@in.ibm.com',
          },
          {
            username: 'tbhanote@in.ibm.com',
          },
          {
            username: 'faruk.kadir@in.ibm.com',
          },
          {
            username: 'duttaman@in.ibm.com',
          },
          {
            username: 'shuvmukh@in.ibm.com',
          },
          {
            username: 'lpapinen@in.ibm.com',
          },
          {
            username: 'venkomm1@in.ibm.com',
          },
          {
            username: 'sunilreddy@in.ibm.com',
          },
          {
            username: 'sourakar@in.ibm.com',
          },
          {
            username: 'rebathla@in.ibm.com',
          },
          {
            username: 'gurusrin@in.ibm.com',
          },
          {
            username: 'krishnapoola@in.ibm.com',
          },
          {
            username: 'tanmdas3@in.ibm.com',
          },
          {
            username: 's.k.lahiri@in.ibm.com',
          },
          {
            username: 'shshruti@in.ibm.com',
          },
          {
            username: 'argardas@in.ibm.com',
          },
          {
            username: 'anichakr@in.ibm.com',
          },
          {
            username: 'shiasati@in.ibm.com',
          },
          {
            username: 'satpusti@in.ibm.com',
          },
          {
            username: 'styagi11@in.ibm.com',
          },
          {
            username: 'nomanwar@in.ibm.com',
          },
          {
            username: 'ssamalla@in.ibm.com',
          },
          {
            username: 'posunk14@in.ibm.com',
          },
          {
            username: 'viswanat@in.ibm.com',
          },
          {
            username: 'swaravin@in.ibm.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-IBM-APR19-W6',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-IBM-APR19-W6',
        programType: 'EXPRESS',
        updatedBy: 'bharathi.selvakumar',
        endDate: '2019-08-15T09:28:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'IBM',
        updatedOn: '2019-07-19T06:57:59.974Z',
        createdOn: '2019-04-19T06:53:17.365Z',
        modules: [
          {
            moduleName: 'COMMFE06',
            startDate: '2019-04-11T09:28:00.000Z',
            endDate: '2019-06-11T09:28:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'MWPRJV02',
            startDate: '2019-06-12T09:28:00.000Z',
            endDate: '2019-08-15T09:28:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'Apr19-W6',
        programScheduleTitle: 'Java-Express FSD for IBM APR 19 Wave 6',
        createdBy: 'SYSTEM',
        programName: 'PRGEXPRJV04',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE06',
            registrations: [],
          },
          {
            moduleName: 'MWPRJV02',
            registrations: [],
          },
        ],
        startDate: '2019-04-11T09:28:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'atsantra@in.ibm.com',
          },
          {
            username: 'prabhat.pachpore@in.ibm.com',
          },
          {
            username: 'mhonnapp@in.ibm.com',
          },
          {
            username: 'syarramala@in.ibm.com',
          },
          {
            username: 'yashwanth.v@in.ibm.com',
          },
          {
            username: 'nehamish@in.ibm.com',
          },
          {
            username: 'apunitha@in.ibm.com',
          },
          {
            username: 'deepsing@in.ibm.com',
          },
          {
            username: 'sireesham@in.ibm.com',
          },
          {
            username: 'shashivd@in.ibm.com',
          },
          {
            username: 'murali.chagarlamudi@in.ibm.com',
          },
          {
            username: 'jimi.soni@in.ibm.com',
          },
          {
            username: 'kobhadra@in.ibm.com',
          },
          {
            username: 'sramachl@in.ibm.com',
          },
          {
            username: 'jyotsah1@in.ibm.com',
          },
          {
            username: 'visidaga@in.ibm.com',
          },
          {
            username: 'saumti19@in.ibm.com',
          },
          {
            username: 'sangatbh@in.ibm.com',
          },
          {
            username: 'sbishal1@in.ibm.com',
          },
          {
            username: 'banesahe@in.ibm.com',
          },
          {
            username: 'anusen22@in.ibm.com',
          },
          {
            username: 'pancsaha@in.ibm.com',
          },
          {
            username: 'karkadam@in.ibm.com',
          },
          {
            username: 'rajku042@in.ibm.com',
          },
          {
            username: 'prakash.patil@in.ibm.com',
          },
          {
            username: 'ravi.votti@in.ibm.com',
          },
          {
            username: 'arikotal@in.ibm.com',
          },
          {
            username: 'prabhowm@in.ibm.com',
          },
          {
            username: 'rugehlo1@in.ibm.com',
          },
          {
            username: 'kaustpau@in.ibm.com',
          },
          {
            username: 'sateesh.ganga@in.ibm.com',
          },
          {
            username: 'amitroy8@in.ibm.com',
          },
          {
            username: 'md.aurangjeb@in.ibm.com',
          },
          {
            username: 'kuldjosh@in.ibm.com',
          },
          {
            username: 'nirav.parmar@in.ibm.com',
          },
          {
            username: 'padmamr2@in.ibm.com',
          },
          {
            username: 'pridatta@in.ibm.com',
          },
          {
            username: 'javidmk1@in.ibm.com',
          },
          {
            username: 'nareshkumar@in.ibm.com',
          },
          {
            username: 'amuthya1@in.ibm.com',
          },
          {
            username: 'savyadav@in.ibm.com',
          },
          {
            username: 'tthankur@in.ibm.com',
          },
          {
            username: 'purushottam.shegekar@in.ibm.com',
          },
          {
            username: 'sandsha4@in.ibm.com',
          },
          {
            username: 'negupta1@in.ibm.com',
          },
          {
            username: 'raghv213@in.ibm.com',
          },
          {
            username: 'bhagrupa@in.ibm.com',
          },
          {
            username: 'sankris7@in.ibm.com',
          },
          {
            username: 'lbalabad@in.ibm.com',
          },
          {
            username: 'shashrad@in.ibm.com',
          },
          {
            username: 'surkalra@in.ibm.com',
          },
          {
            username: 'nidhi.bansal@in.ibm.com',
          },
          {
            username: 'shikhar1@in.ibm.com',
          },
          {
            username: 'vijbkuma@in.ibm.com',
          },
          {
            username: 'ashwani.verma@in.ibm.com',
          },
          {
            username: 'prablo09@in.ibm.com',
          },
          {
            username: 'subha.varatharajan@in.ibm.com',
          },
          {
            username: 'bjaiswar@in.ibm.com',
          },
          {
            username: 'sreensam@in.ibm.com',
          },
          {
            username: 'andevara@in.ibm.com',
          },
          {
            username: 'roku0173@in.ibm.com',
          },
          {
            username: 'subjha28@in.ibm.com',
          },
          {
            username: 'shwetsh5@in.ibm.com',
          },
          {
            username: 'aparsana@in.ibm.com',
          },
          {
            username: 'pgoldeen@in.ibm.com',
          },
          {
            username: 'viswanat@in.ibm.com',
          },
          {
            username: 'posunk14@in.ibm.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGCOMPJV03-COMPLETE-COGNIZANT-MAY2019',
      _score: 1.0,
      _ignored: ['description.keyword'],
      _source: {
        scheduleName: 'PRGCOMPJV03-COMPLETE-COGNIZANT-MAY2019',
        programType: 'COMPLETE',
        updatedBy: 'shivakami.v',
        endDate: '2019-10-22T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description:
          'Learn and develop cross-platform applications, using JAVA programming language, Understand application of data structure using JAVA, Understand Spring boot architecture to build RESTful web services, Netflix OSS powered Microservices, using Sprint Boot framework',
        organisation: 'COGNIZANT',
        updatedOn: '2019-06-12T11:32:01.572Z',
        createdOn: '2019-06-07T05:41:14.519Z',
        modules: [
          {
            moduleName: 'COMMFE07',
            startDate: '2019-05-21T00:00:00.000Z',
            endDate: '2019-10-22T00:00:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'COMPJV02',
            startDate: '2019-05-21T00:00:00.000Z',
            endDate: '2019-10-22T00:00:00.000Z',
            subject: 'java',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'EXPRJV02',
            startDate: '2019-05-21T00:00:00.000Z',
            endDate: '2019-10-22T00:00:00.000Z',
            subject: 'spring',
            sequence: 3,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'May2019',
        programScheduleTitle: 'Java-Complete FSD',
        createdBy: 'Shivakami.v',
        programName: 'PRGCOMPJV03',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE07',
            registrations: [],
          },
          {
            moduleName: 'COMPJV02',
            registrations: [],
          },
          {
            moduleName: 'EXPRJV02',
            registrations: [],
          },
        ],
        startDate: '2019-05-21T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'abhisek.chakraborty3@cognizant.com',
          },
          {
            username: 'ajit-6.kumar-6@cognizant.com',
          },
          {
            username: 'b.thamizhazhagan@cognizant.com',
          },
          {
            username: 'gayatri.choudhary@cognizant.com',
          },
          {
            username: 'jithin.judepaul@cognizant.com',
          },
          {
            username: 'surabhikantilal.jogee@cognizant.com',
          },
          {
            username: 'sureshkumar.maruthamuthu@cognizant.com',
          },
          {
            username: 'sushmita.saha@cognizant.com',
          },
          {
            username: 'swapnilshivkumar.kole@cognizant.com',
          },
          {
            username: 'chaitanya.varanasi@cognizant.com',
          },
          {
            username: 'm.naresh@cognizant.com',
          },
          {
            username: 'manoharan.govindaraj@cognizant.com',
          },
          {
            username: 'vijaya.remala@cognizant.com',
          },
          {
            username: 'karthik.p3@cognizant.com',
          },
          {
            username: 'kavyadevi.muthu@cognizant.com',
          },
          {
            username: 'ramakrishna.kv@cognizant.com',
          },
          {
            username: 'saboor.alam@cognizant.com',
          },
          {
            username: 'sravankumar.kilari@cognizant.com',
          },
          {
            username: 'srinivasa.r2@cognizant.com',
          },
          {
            username: 'prasun.chakraborty@cognizant.com',
          },
          {
            username: 'sarvagya.sharma@cognizant.com',
          },
          {
            username: 'ajay.p@cognizant.com',
          },
          {
            username: 'nisargdev.yagnik@cognizant.com',
          },
          {
            username: 'shantanu.sadar@cognizant.com',
          },
          {
            username: 'suchita.powar@cognizant.com',
          },
          {
            username: 'swetha.julukuntla@cognizant.com',
          },
          {
            username: 'anshul.mahajan@cognizant.com',
          },
          {
            username: 'anand.suyambu@cognizant.com',
          },
          {
            username: 'bodda.durgateja@cognizant.com',
          },
          {
            username: 'chitra-3.r-3@cognizant.com',
          },
          {
            username: 'muthucheliyan.venkatesan@cognizant.com',
          },
          {
            username: 'nirmalkumar.m@cognizant.com',
          },
          {
            username: 'pearlin.christabel@cognizant.com',
          },
          {
            username: 'sreeharsha.kotturu@cognizant.com',
          },
          {
            username: 'sreenivasulu.g@cognizant.com',
          },
          {
            username: 'varusaimohamed.s@cognizant.com',
          },
          {
            username: 'gajanan.nilekar@cognizant.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV03-EXPRESS-COGNIZANT-MAY2019',
      _score: 1.0,
      _ignored: ['description.keyword'],
      _source: {
        scheduleName: 'PRGEXPRJV03-EXPRESS-COGNIZANT-MAY2019',
        programType: 'EXPRESS',
        updatedBy: 'shivakami.v',
        endDate: '2019-09-10T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description:
          'Learn and develop cross-platform applications, using JAVA programming language, Understand application of data structure using JAVA, Understand Spring boot architecture to build RESTful web services, Netflix OSS powered Microservices, using Sprint Boot framework',
        organisation: 'COGNIZANT',
        updatedOn: '2019-06-12T11:43:10.351Z',
        createdOn: '2019-06-07T07:02:31.119Z',
        modules: [
          {
            moduleName: 'COMMFE07',
            startDate: '2019-05-21T00:00:00.000Z',
            endDate: '2019-09-10T00:00:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'EXPRJV02',
            startDate: '2019-05-21T00:00:00.000Z',
            endDate: '2019-09-10T00:00:00.000Z',
            subject: 'spring',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'May2019',
        programScheduleTitle: 'Java - Express FSD',
        createdBy: 'Shivakami.v',
        programName: 'PRGEXPRJV03',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE07',
            registrations: [],
          },
          {
            moduleName: 'EXPRJV02',
            registrations: [],
          },
        ],
        startDate: '2019-05-21T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'anil.divse@cognizant.com',
          },
          {
            username: 'bharani.venugopal@cognizant.com',
          },
          {
            username: 'harshith.s@cognizant.com',
          },
          {
            username: 'namami.joshi@cognizant.com',
          },
          {
            username: 'neeraj.srivastava@cognizant.com',
          },
          {
            username: 'sathish.rengan@cognizant.com',
          },
          {
            username: 'somina.augustine@cognizant.com',
          },
          {
            username: 'vasanthkumar.chellamuthu@cognizant.com',
          },
          {
            username: 'chaitanya.varanasi@cognizant.com',
          },
          {
            username: 'karthik.p3@cognizant.com',
          },
          {
            username: 'ramakrishna.kv@cognizant.com',
          },
          {
            username: 'prasun.chakraborty@cognizant.com',
          },
          {
            username: 'sarvagya.sharma@cognizant.com',
          },
          {
            username: 'ajay.p@cognizant.com',
          },
          {
            username: 'shantanu.sadar@cognizant.com',
          },
          {
            username: 'suchita.powar@cognizant.com',
          },
          {
            username: 'swetha.julukuntla@cognizant.com',
          },
          {
            username: 'anand.suyambu@cognizant.com',
          },
          {
            username: 'bodda.durgateja@cognizant.com',
          },
          {
            username: 'chitra-3.r-3@cognizant.com',
          },
          {
            username: 'muthucheliyan.venkatesan@cognizant.com',
          },
          {
            username: 'nirmalkumar.m@cognizant.com',
          },
          {
            username: 'pearlin.christabel@cognizant.com',
          },
          {
            username: 'sreeharsha.kotturu@cognizant.com',
          },
          {
            username: 'sreenivasulu.g@cognizant.com',
          },
          {
            username: 'varusaimohamed.s@cognizant.com',
          },
          {
            username: 'gajanan.nilekar@cognizant.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGCOMPDN01-COMPLETE-COGNIZANT-MAY2019',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGCOMPDN01-COMPLETE-COGNIZANT-MAY2019',
        programType: 'COMPLETE',
        updatedBy: 'shivakami.v',
        endDate: '2019-10-04T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description:
          'Learn C Sharp and understand ASP Dot Net core architecture and learn to build cross - platform RESTful web services, design a Microservices using Microsoft technologies',
        organisation: 'COGNIZANT',
        updatedOn: '2019-06-12T10:11:53.286Z',
        createdOn: '2019-06-12T10:09:51.330Z',
        modules: [
          {
            moduleName: 'COMMFE07',
            startDate: '2019-05-03T00:00:00.000Z',
            endDate: '2019-10-04T00:00:00.000Z',
            subject: 'angularjs',
            sequence: 1,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'COMPDN01',
            startDate: '2019-05-03T00:00:00.000Z',
            endDate: '2019-10-04T00:00:00.000Z',
            subject: 'C#-dotnet basics',
            sequence: 2,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
          {
            moduleName: 'EXPRDN01',
            startDate: '2019-05-03T00:00:00.000Z',
            endDate: '2019-10-04T00:00:00.000Z',
            subject: 'dotnetmvc',
            sequence: 3,
            autoManageScheduling: false,
            autoRegisterParticipants: false,
          },
        ],
        cohortName: 'May2019',
        programScheduleTitle: 'DOT NET - Complete FSD',
        createdBy: 'Shivakami.v',
        programName: 'PRGCOMPDN01',
        __v: 0,
        participantsLeft: [],
        moduleSchedules: [
          {
            moduleName: 'COMMFE07',
            registrations: [],
          },
          {
            moduleName: 'COMPDN01',
            registrations: [],
          },
          {
            moduleName: 'EXPRDN01',
            registrations: [],
          },
        ],
        startDate: '2019-05-03T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'a.tryphena.sharon@cognizant.com',
          },
          {
            username: 'abdul.aleemzaheerikbal@cognizant.com',
          },
          {
            username: 'arunstany.aruldhas@cognizant.com',
          },
          {
            username: 'mahalakshmi.raju@cognizant.com',
          },
          {
            username: 'rekha.golkonda@cognizant.com',
          },
          {
            username: 'shanmuga.baskar@cognizant.com',
          },
          {
            username: 'solaikannan.r@cognizant.com',
          },
          {
            username: 'sureshkannan.g@cognizant.com',
          },
          {
            username: 'senthilnathan-2.s-2@cognizant.com',
          },
          {
            username: 'bhargav.k@cognizant.com',
          },
          {
            username: 'saleembasha.shaik@cognizant.com',
          },
          {
            username: 'nithin.ganeshkhumar@cognizant.com',
          },
        ],
        programMedia: [],
      },
    },
    {
      _index: 'programschedules',
      _type: '_doc',
      _id: 'PRGEXPRJV04-EXPRESS-CAPGEMINI-JULY2019',
      _score: 1.0,
      _source: {
        scheduleName: 'PRGEXPRJV04-EXPRESS-CAPGEMINI-JULY2019',
        programType: 'EXPRESS',
        updatedBy: 'anthony.gomes',
        endDate: '2019-11-07T00:00:00.000Z',
        deliveryModel: 'REMOTE',
        description: 'Java Express Program for FSD',
        organisation: 'CAPGEMINI',
        updatedOn: '2019-08-28T12:36:59.526Z',
        createdOn: '2019-07-23T10:42:04.279Z',
        modules: [
          {
            autoManageScheduling: true,
            autoRegisterParticipants: true,
            moduleName: 'COMMFE06',
            startDate: '2019-07-25T00:00:00.000Z',
            endDate: '2019-11-07T00:00:00.000Z',
            sequence: 1,
            subject: 'angularjs',
          },
          {
            autoManageScheduling: true,
            autoRegisterParticipants: true,
            moduleName: 'MWPRJV02',
            startDate: '2019-07-25T00:00:00.000Z',
            endDate: '2019-11-07T00:00:00.000Z',
            sequence: 2,
            subject: 'spring',
          },
        ],
        cohortName: 'July2019',
        programScheduleTitle: 'Java-Express FSD',
        createdBy: 'bharathi.selvakumar',
        programName: 'PRGEXPRJV04',
        __v: 0,
        moduleSchedules: [
          {
            registrations: [],
            moduleName: 'COMMFE06',
          },
          {
            registrations: [],
            moduleName: 'MWPRJV02',
          },
        ],
        participantsLeft: [],
        startDate: '2019-07-25T00:00:00.000Z',
        status: 'active',
        participants: [
          {
            username: 'arunendra.chaturvedi@capgemini.com',
          },
          {
            username: 'unmisha.s-naik@capgemini.com',
          },
          {
            username: 'raj.f.kumar@capgemini.com',
          },
          {
            username: 'heena.tejwani@capgemini.com',
          },
          {
            username: 'rohit.aggarwal@capgemini.com',
          },
          {
            username: 'ayan.a.biswas@capgemini.com',
          },
          {
            username: 'debasish.rakshit@capgemini.com',
          },
          {
            username: 'aishwarya.rathore@capgemini.com',
          },
          {
            username: 'pijush.roy@capgemini.com',
          },
          {
            username: 'abhishek.sarkar@capgemini.com',
          },
          {
            username: 'vennapusa.radha@capgemini.com',
          },
          {
            username: 'hareesh.devaki@capgemini.com',
          },
          {
            username: 'nisha.ramesh@capgemini.com',
          },
          {
            username: 'sneha.kar@capgemini.com',
          },
          {
            username: 'krittika.na@capgemini.com',
          },
          {
            username: 'chandini.sahu@capgemini.com',
          },
          {
            username: 'dasari.yogini@capgemini.com',
          },
          {
            username: 'ahan.saha@capgemini.com',
          },
          {
            username: 'vempati.soumya@capgemini.com',
          },
          {
            username: 'mounika-tulasi-mani-prasanna.ankani@capgemini.com',
          },
          {
            username: 'naivedya.mishra@capgemini.com',
          },
          {
            username: 'leela-venkata-sai-teja.sighakolli@capgemini.com',
          },
          {
            username: 'sagar.ingle@capgemini.com',
          },
          {
            username: 'surya.lingaiah@capgemini.com',
          },
          {
            username: 'priyanka.lal@capgemini.com',
          },
          {
            username: 'yograj.shekhawat@capgemini.com',
          },
          {
            username: 'mukesh.deshpande@capgemini.com',
          },
          {
            username: 'p-v.sasirekha@capgemini.com',
          },
          {
            username: 'onkar.deshpande@capgemini.com',
          },
          {
            username: 'shivakant.choudhary@capgemini.com',
          },
          {
            username: 'satyendra.singh@capgemini.com',
          },
          {
            username: 'vaishali.kulkarni@capgemini.com',
          },
          {
            username: 'pravin.a.pawar@capgemini.com',
          },
          {
            username: 'anil.b.patil@capgemini.com',
          },
          {
            username: 'yashaswini.m-s@capgemini.com',
          },
          {
            username: 'ankit.b.pandey@capgemini.com',
          },
        ],
        programMedia: [],
      },
    },
  ];

  // Filter for sort

  var opt: any[] = [];
  var keys = _.keys(hits[0]._source);
  _.each(keys, function (val) {
    opt.push({ label: val });
  });

  const [selectedOptions1, setSelected1] = useState([opt[0]]);
  const onChangeOfFilter = (selectedOptions1) => {
    // We should only get back either 0 or 1 options.
    setSelected1(selectedOptions1);
  };
  const onCreateOption = (searchValue = []) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Select the option.
    setSelected1([newOption]);
  };
  if (hits) {
    const getRandomColor = () => {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return (
        'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
      );
    };
    var programs = _.groupBy(hits, '_source.' + selectedOptions1[0].label);
    var labels = _.keys(programs);
    var niit_chartData: any = {
      labels,
      datasets: [],
    };
    console.log('Programs', programs);
    _.each(programs, function (val, key,i) {
      var pgm: number[] = [];
      _.each(val, function (v, k) {
        pgm.push(v._source.participants.length);
      });
      var set = { label: key, data: pgm, backgroundColor: getRandomColor() };
      niit_chartData.datasets.push(set);
    });
  }
  console.log('CHARTSET', niit_chartData);

  useEffect(() => {
    if (niit_chartDiv.current) {
      const ChartVis = createNiitChartVisualization(deps);
      visController.current = new ChartVis(niit_chartDiv.current, fireEvent);
    }
    return () => {
      visController.current?.destroy();
      visController.current = null;
    };
  }, [deps, fireEvent]);

  useEffect(() => {
    if (visController.current) {
      visController.current.render(visData).then(renderComplete);
    }
  }, [visData, renderComplete]);

  const updateChartSize = useCallback(
    () =>
      throttle(() => {
        if (visController.current) {
          visController.current.render(visData).then(renderComplete);
        }
      }, 300),
    [renderComplete, visData]
  );
  const [selectedOptions, setSelected] = useState([options1[0]]);

  const onChange = (selectedOptions: any) => {
    setSelected(selectedOptions);
    console.log('selected option', selectedOptions[0].label);
  };
  const project = () => {
    switch (selectedOptions[0].label) {
      case 'Bar':
        return <Bar options={options} data={niit_chartData} />;
      case 'Pie':
        return <Pie options={options} data={niit_chartData} />;
      case 'Polar':
        return <PolarArea options={options} data={niit_chartData} />;
      case 'Radar':
        return <Radar options={options} data={niit_chartData} />;
      case 'Line':
        return <Line options={options} data={niit_chartData} />;
      case 'Doughnut':
        return <Doughnut data={niit_chartData} />;
      case 'Bubble':
        return <Bubble options={options} data={niit_chartData} />;
      default:
        return <h1>No niit_chart is selected</h1>;
    }
  };
  // console.log('Selected program', _.keys(hits[0]._source))

  return (
    <EuiResizeObserver onResize={updateChartSize}>
      {(resizeRef) => (
        <div className="" ref={resizeRef}>
          <EuiFormRow label="Please selecte any one option to apply filter">
            <EuiComboBox
              aria-label="Accessible screen reader label"
              placeholder="Select a single option"
              singleSelection={{ asPlainText: true }}
              options={opt}
              selectedOptions={selectedOptions1}
              onChange={onChangeOfFilter}
              onCreateOption={onCreateOption}
              customOptionText="Add {searchValue} as your occupation"
            />
          </EuiFormRow>
          {/* <EuiComboBox
            aria-label="Accessible screen reader label"
            prepend="Chart type"
            placeholder="Select a single option"
            singleSelection={{ asPlainText: true }}
            options={options1}
            selectedOptions={selectedOptions}
            onChange={onChange}
          /> */}
          <div>{project()}</div>
        </div>
      )}
    </EuiResizeObserver>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { ChartVisComponent as default };
