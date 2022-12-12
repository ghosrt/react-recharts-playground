const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload.length);
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip bg-slate-50 p-2'>
        <p className='label text-left'>{`${label}`}</p>
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
