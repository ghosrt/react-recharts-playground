import React, { Fragment } from 'react';
import { Rectangle } from 'recharts';

const CustomTooltipCursor = (props) => {
  const { x, y, width, height, top } = props;
  return (
    <Fragment>
      <Rectangle
        fill='gray'
        fillOpacity='0.4'
        x={x}
        y={y}
        width={width}
        height={height}
      />
      <line
        x1={x + width / 2}
        y1={top}
        x2={x + width / 2}
        y2={top + height}
        stroke='gray'
        strokeWidth='1'
        strokeDasharray='3, 3'
        strokeOpacity='0.4'
      />
    </Fragment>
  );
};

export default CustomTooltipCursor;
