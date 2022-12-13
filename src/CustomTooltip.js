import React, { Fragment } from 'react';

const idFormatter = (label) => {
  return (
    label.substring(0, 4) +
    ' 年 ' +
    label.substring(4, 6).replace('0', '') +
    ' 月'
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='relative drop-shadow-xl'>
        <div class='absolute top-5 -left-2 z-10 border-solid border-r-gray-400 border-r-8 border-y-transparent border-y-8 border-l-0'></div>
        <div className='custom-tooltip bg-slate-50 p-2 border-solid border-r-gray-400'>
          <p className='label text-left text-sm'>{`${idFormatter(label)}`}</p>
          {payload.length > 0 && (
            <Fragment>
              <p className='label text-left'>{payload[0].name}</p>
              <p className='value text-left'>{payload[0].value}</p>
            </Fragment>
          )}
          {payload.length > 1 && (
            <Fragment>
              <p className='label text-left'>{payload[1].name}</p>
              <p className='value text-left'>{payload[1].value}</p>
            </Fragment>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
