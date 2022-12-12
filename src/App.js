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

const data = [
  {
    month: '12',
    year: '2021.',
    estValue: 4000,
    acqValue: 2400,
    amt: 2400,
  },
  {
    month: '1',
    year: '2021',
    estValue: 3000,
    acqValue: 1398,
    amt: 2210,
  },
  {
    month: '2',
    year: '2021',
    estValue: 2000,
    acqValue: 9800,
    amt: 2290,
  },
  {
    month: '3_',
    year: '2021',
    estValue: 2780,
    acqValue: 3908,
    amt: 2000,
  },
  {
    month: '4',
    year: '2021',
    estValue: 1890,
    acqValue: 4800,
    amt: 2181,
  },
  {
    month: '5',
    year: '2021',
    acqValue: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: '6',
    year: '2021',
    estValue: 3490,
    acqValue: 4300,
    amt: 2100,
  },
  {
    month: '7_',
    year: '2021',
    estValue: 2780,
    acqValue: 3908,
    amt: 2000,
  },
  {
    month: '8_',
    year: '2021.',
    estValue: 1890,
    acqValue: 4800,
    amt: 2181,
  },
  {
    month: '9',
    year: '2021',
    acqValue: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    month: '10',
    year: '2021',
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
          <XAxis
            dataKey='year'
            xAxisId={0}
            interval='preserveStart'
            tick={<CustomizedYearAxisTick />}
          />
          <XAxis
            dataKey='month'
            xAxisId={1}
            axisLine={false}
            tickLine={false}
            height={64}
            tick={<CustomizedMonthAxisTick appender=' 月' />}
          />
          <YAxis />
          <Tooltip cursor={{ fillOpacity: '0.4' }} />
          <Bar dataKey='acqValue' fill='#8884d8' name='取得額' />
          <Bar dataKey='estValue' fill='#ffc658' name='評価額' />
        </BarChart>
      </div>
    </div>
  );
}

export default App;
