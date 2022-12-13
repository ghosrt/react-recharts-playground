import React, { Fragment } from 'react';

const idFormatter = (label) => {
  return (
    label.substring(0, 4) +
    ' 年 ' +
    label.substring(4, 6).replace('0', '') +
    ' 月'
  );
};

const moneyFormatter = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='relative drop-shadow-xl rounded-lg'>
        <div class='absolute top-5 -left-2 z-10 border-solid border-r-gray-300 border-r-8 border-y-transparent border-y-8 border-l-0'></div>
        <div className='custom-tooltip bg-slate-50 p-2 border-solid border-r-gray-400'>
          <p className='label text-left text-sm mb-1 text-yellow-600'>{`${idFormatter(
            label
          )}`}</p>
          {payload.length > 0 && (
            <Fragment>
              <p className='label text-left text-sm text-gray-400'>
                <span className='mr-1'>{payload[1].name}</span>
                <span>（評価損益）</span>
              </p>
              <p className='value text-left'>
                <span className='mr-1 text-2xl font-semibold'>
                  {moneyFormatter(payload[0].value)}
                </span>
                <span className='mr-1 text-sm'>円</span>
                <span className='text-sm text-lime-400'>
                  ({payload[1].payload.estDiff > 0 ? '+' : '-'}
                  {moneyFormatter(payload[0].payload.estDiff)})
                </span>
              </p>
            </Fragment>
          )}
          {payload.length > 1 && (
            <Fragment>
              <p className='label text-left text-sm text-gray-400'>
                <span className='mr-1'>前日終値（平均取得単価）</span>
              </p>
              <p className='value text-left'>
                <span className='mr-1 text-2xl font-semibold'>
                  {moneyFormatter(payload[1].value)}
                </span>
                <span className='mr-1 text-sm'>円</span>
                <span className='text-sm text-lime-400'>
                  ({payload[1].payload.estDiff > 0 ? '+' : '-'}
                  {moneyFormatter(payload[0].payload.estDiff)})
                </span>
              </p>
            </Fragment>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
