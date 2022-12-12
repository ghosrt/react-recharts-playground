/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
class CustomizedMonthAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload, appender } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor='middle'
          fill='#666'
          fontWeight={'bold'}
        >
          {payload.value.replace('_', '').replace('.', '')}
          {appender}
        </text>
        {payload.value.indexOf('_') > -1 && (
          <line
            x1='-15'
            y1='24'
            x2='15'
            y2='24'
            stroke='orange'
            strokeWidth='3'
            strokeLinecap='round'
          ></line>
        )}
        {payload.value.indexOf('.') > -1 && (
          <circle cx='25' cy='0' r='3' fill='red' />
        )}
      </g>
    );
  }
}

export default CustomizedMonthAxisTick;
