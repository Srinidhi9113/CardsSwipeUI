import React from 'react'

export default function ProgressBar(props) {
  return (
    <div className='h-[2.5px] w-24 bg-[#BDC3FB]'>
      <div className='h-[2.5px] bg-[#4557F6]' style={{width:`${props.status}%`}}>

      </div>
    </div>
  )
}
