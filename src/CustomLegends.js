import React, { Fragment } from 'react';

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className='inline-flex'>
      {payload.map((entry, color, index) => (
        <Fragment>
          {/* <span className='w-1 h-1' style={{ backgroundColor: color }}></span> */}
          <rect
            width={50}
            height={50}
            fill={true}
            style={{ fill: color }}
            rx={10}
            ry={10}
          />
          <li key={`item-${index}`}>{entry.value}</li>
        </Fragment>
      ))}
    </ul>
  );
};

export default renderLegend;
