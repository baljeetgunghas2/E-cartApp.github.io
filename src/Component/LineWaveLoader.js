import React from 'react'
import { LineWave } from 'react-loader-spinner'
import './css/main.css'
function LineWaveLoader() {
  return (
    <>
            <div className='overlay' ></div>
            <div className='loader'>
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor="white"
                middleLineColor="white"
                lastLineColor="white"
            />
            </div>
    </>
  )
}

export default LineWaveLoader