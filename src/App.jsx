import React from 'react'
import LineChart from './components/LineChart'
import LineJson from './JSON/LineJson12.json'
import LineJson1D from './JSON/LineJson1d.json'
import LineJson1W from './JSON/LineJson1w.json'
import LineJson1M from './JSON/LineJson1m.json'
import LineJson1Y from './JSON/LineJson1y.json'
import './App.css'
import TimeFrame from './components/TimeFrame'
function App() {
  const data = [
    {
      time: '12H',
      data: LineJson
    },
    {
      time: '1D',
      data: LineJson1D},
    {
      time: '1W',
      data: LineJson1W},
    {
      time: '1M',
      data: LineJson1M},
    {
      time: '1Y',
      data: LineJson1Y}
  ]
  return (
    <div className='container'>
      <div className='TimeFrame'>
        <TimeFrame></TimeFrame>
      </div>
      <div className='LineChartContainer'>
        {data.map((ele, index) => {
          return <LineChart key={index} data={ele} />
        })}
      </div>
    </div>
  )
}

export default App