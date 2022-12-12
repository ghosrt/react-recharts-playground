/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
class CustomizedYearAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        {payload.value.indexOf('#') > -1 && (
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor='middle'
            fill='#666'
            fillOpacity={0.7}
          >
            {payload.value.replace('.', '').replace('#', '')}
          </text>
        )}
        {payload.value.indexOf('.') > -1 && (
          <circle cx='25' cy='0' r='3' fill='red' />
        )}
      </g>
    );
  }
}

export default CustomizedYearAxisTick;
