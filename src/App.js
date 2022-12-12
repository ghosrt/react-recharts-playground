import React from 'react';
import './App.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import CustomizedYearAxisTick from './CustomizedYearAxisTick';
import CustomizedMonthAxisTick from './CustomizedMonthAxisTick';
import CustomTooltip from './CustomTooltip';

const data = [
  {
    id: '202112',
    month: '12',
    year: '2021',
    estValue: 4000,
    acqValue: 2400,
    amt: 2400,
  },
  {
    id: '202201',
    month: '1',
    year: '#2022.',
    estValue: 3000,
    acqValue: 1398,
    amt: 2210,
  },
  {
    id: '202202',
    month: '2_',
    year: '2022',
    estValue: 2000,
    acqValue: 9800,
    amt: 2290,
  },
  {
    id: '202203',
    month: '3_',
    year: '2022',
    estValue: 2780,
    acqValue: 3908,
    amt: 2000,
  },
  {
    id: '202204',
    month: '4',
    year: '2022',
    estValue: 1890,
    acqValue: 4800,
    amt: 2181,
  },
  {
    id: '202205',
    month: '5',
    year: '2022',
    estValue: 2390,
    acqValue: 3800,
    amt: 2500,
  },
  {
    id: '202206',
    month: '6',
    year: '2022',
    estValue: 3490,
    acqValue: 4300,
    amt: 2100,
  },
  {
    id: '202207',
    month: '7_',
    year: '2022',
    estValue: 2780,
    acqValue: 3908,
    amt: 2000,
  },
  {
    id: '202208',
    month: '8_.',
    year: '2022',
    estValue: 1890,
    acqValue: 4800,
    amt: 2181,
  },
  {
    id: '202209',
    month: '9',
    year: '2022',
    estValue: 2390,
    acqValue: 3800,
    amt: 2500,
  },
  {
    id: '202210',
    month: '10',
    year: '2022',
    estValue: 3490,
    acqValue: 4300,
    amt: 2100,
  },
];

function App() {
  return (
    <div className='App container mx-auto pt-2'>
      <h1 className='text-left'>資産推移</h1>
      <div className='barChart'>
        <BarChart
          width={1024}
          height={768}
          data={data}
          barGap={0}
          connectNulls={true}
        >
          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '20px' }}
          />
          <CartesianGrid
            strokeWidth={1}
            strokeDasharray='3 0 0'
            vertical={false}
          />
          <XAxis dataKey='id' xAxisId={0} hide='true' />
          <XAxis
            dataKey='year'
            xAxisId={1}
            interval='preserveStart'
            tick={<CustomizedYearAxisTick />}
          />
          <XAxis
            dataKey='month'
            xAxisId={2}
            axisLine={false}
            tickLine={false}
            height={64}
            tick={<CustomizedMonthAxisTick appender=' 月' />}
          />
          <YAxis />
          <Tooltip
            cursor={{ fillOpacity: '0.4' }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey='acqValue'
            fill='rgba(255, 99, 132, 0.5)'
            name='取得額'
          />
          <Bar
            dataKey='estValue'
            fill='rgba(53, 162, 235, 0.5)'
            name='評価額'
          />
        </BarChart>
      </div>
    </div>
  );
}

export default App;
