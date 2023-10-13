import React from 'react'

export default function Timer() {
  return (
    <div className='basis-4/12 border-2 border-gray-400 p-10 rounded-md flex flex-col justify-center px-10 items-center'>
      <svg className='w-56 h-56'>
        <circle style={{
            cx:'50px',
            cy:'50px',
            r: '40px',
            strokeWidth: '10px',
            fill:'transparent',
            stroke:'#BDC3FB'
        }}/>
        <circle/>
        <circle style={{
            cx:'50px',
            cy:'50px',
            r: '40px',
            strokeWidth: '10px',
            fill:'transparent',
            stroke:'#4557F6'
        }}>

        </circle>
      </svg>
    </div>
  )
}
