import React, { useContext, useState } from 'react';
import './index.css';

function TimeFrame() {
  const [active, setActive] = useState('12H');
  const handleButtonClick = (value) => {
    setActive(value);
  };

  const data = ['12H', '1D', '1W', '1M', '1Y']

  return (
    <div className='container'>
      <div className='wrapper'>
        {data.map((timeFrame) => (
          <input
            key={timeFrame}
            style={{
              backgroundColor: active === timeFrame ? 'blue' : '',
              color: active === timeFrame ? 'white' : 'black'
            }}
            onClick={() => handleButtonClick(timeFrame)}
            type="submit"
            value={timeFrame}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeFrame;
