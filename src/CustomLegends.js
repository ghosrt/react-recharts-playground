import React, { Fragment } from 'react';

const renderLegend = (props, additionalData) => {
  const { payload } = props;

  return (
    <ul className='flex items-start'>
      {payload.map((entry, color, index) => (
        <div className='flex items-start'>
          <div
            className={`w-5 h-5 mx-1 my-0.5 bg-[${entry.color.toLowerCase()}] rounded-sm`}
            style={{ backgroundColor: entry.color }}
          ></div>

          <li key={`item-${index}`}>{entry.value}</li>
        </div>
      ))}
      {additionalData.length > 0 &&
        additionalData.map((entry, index) => (
          <div className='flex items-start'>
            <div
              className={`w-5 h-5 mx-1 my-0.5 bg-[${entry.color.toLowerCase()}] rounded-sm`}
              style={{ backgroundColor: entry.color }}
            ></div>

            <li key={`item-${index}`}>{entry.value}</li>
          </div>
        ))}
    </ul>
  );
};

export default renderLegend;
