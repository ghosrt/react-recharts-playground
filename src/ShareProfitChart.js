import React, { PureComponent, Fragment } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import CustomizedYearAxisTick from './CustomizedYearAxisTick';
import CustomizedMonthAxisTick from './CustomizedMonthAxisTick';
import CustomLegends from './CustomLegends';
import CustomTooltip from './CustomTooltip';

class ShareProfitChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderedData: [],
      page: 1,
      maxPage: 1,
    };
  }

  componentDidMount() {
    this.setState({
      renderedData: this.props.data.slice(0, this.props.data.length / 2),
      page: 1,
      maxPage: this.props.data.length / 12,
    });
  }

  handleClick(direction) {
    if (direction === 'prev') {
      this.setState({
        page: this.state.page - 1,
        renderedData: this.getTargetPageData(
          this.state.page,
          this.state.page - 1,
          12,
          this.props.data
        ),
      });
    } else {
      this.setState({
        page: this.state.page + 1,
        renderedData: this.getTargetPageData(
          this.state.page,
          this.state.page + 1,
          12,
          this.props.data
        ),
      });
    }
  }

  getTargetPageData(currentPage, newPage, pageSize, totalData) {
    const totalPages = totalData.length / pageSize;

    // already reached last page, will only return the last page data.
    if (currentPage === totalPages / pageSize && newPage > totalPages) {
      return totalData.slice(currentPage - 1 * pageSize - 1, totalData.length);
    }
    // already reached first page, will only return the first page data.
    if (currentPage === 1 && newPage < 1) {
      return totalData.slice(0, currentPage * pageSize - 1);
    }

    // get new target start/end data indexes.
    const targetStartIndex = (newPage - 1) * pageSize;
    const targetEndIndex = newPage * pageSize;

    return totalData.slice(targetStartIndex, targetEndIndex);
  }

  render() {
    const { chartTitle } = this.props;
    const acqColor = 'rgba(255, 99, 132, 0.5)';
    const estColor = 'rgba(53, 162, 235, 0.5)';
    const acqDataName = '取得額';
    const estDataName = '評価額';

    return (
      <Fragment>
        <h1 className='text-left'>{chartTitle}</h1>
        <br />
        <div className='w-full flex flex-row'>
          <div className='w-1/5 h-3/4'>
            <button
              className='black-text text-2xl text-center'
              onClick={() => {
                this.handleClick('prev');
              }}
            >
              ←
            </button>
          </div>
          <div
            className='barChart'
            style={{ width: '100%', minHeight: '1000px' }}
          >
            <ResponsiveContainer height='70%'>
              <BarChart
                width={1024}
                height={768}
                data={this.state.renderedData}
                barGap={0}
                connectNulls={true}
                className='w-3/5'
              >
                <Legend
                  align='left'
                  verticalAlign='top'
                  wrapperStyle={{ paddingTop: '10px', paddingBottom: '20px' }}
                  // content={<CustomLegends />}
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
                  border={null}
                  cursor={{ fillOpacity: '0.4' }}
                  className='rounded-lg'
                  content={<CustomTooltip />}
                />
                <Bar dataKey='acqValue' fill={acqColor} name={acqDataName} />
                <Bar dataKey='estValue' fill={estColor} name={estDataName} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='w-1/5 h-3/4'>
            {' '}
            <button
              className='black-text text-2xl text-center'
              onClick={() => {
                this.handleClick('next');
              }}
            >
              →
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShareProfitChart;
