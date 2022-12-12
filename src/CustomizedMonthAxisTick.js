/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
class CustomizedMonthAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload, appender } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor='middle' fill='#666'>
          {payload.value.replace('_', '')}
          {appender}
        </text>
        {payload.value.indexOf('_') > 0 && (
          <line
            x1='-15'
            y1='24'
            x2='15'
            y2='24'
            stroke='orange'
            stroke-width='3'
            stroke-linecap='round'
          ></line>
        )}
      </g>
    );
  }
}

export default CustomizedMonthAxisTick;
