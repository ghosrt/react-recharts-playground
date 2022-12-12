const formatter = (label) => {
  return label.replace('#', '').replace('.', '').replace('_', '');
};

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
      <div className='custom-tooltip bg-slate-50 p-2'>
        <p className='label text-left'>{`${idFormatter(label)}`}</p>
        {payload.length > 0 && (
          <p className='label'>{`${payload[0].name} : ${payload[0].value}`}</p>
        )}
        {payload.length > 1 && (
          <p className='label'>{`${payload[1].name} : ${payload[1].value}`}</p>
        )}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
