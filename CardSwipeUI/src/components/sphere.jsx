import React from 'react'
import Tick from '../assets/Tick.svg'

export default function QuestionSphere(props) {
  return (
    <div>
    <div className='flex h-[35px] w-[35px] rounded-full border-2 border-[#4557F6] justify-center items-center text-sm' style={{backgroundColor: props.status>0?'#4557F6':'white',color:props.status>0?'white':'#4557F6',borderColor:props.status>0 && props.status<100 ?'white':'#4557F6'}}>
      {props.status==100 ?
        <img src={Tick} alt={props.idx} className='w-4'/> :
        props.idx  
    }
    </div>
    <div className='absolute mt-5 w-36 text-gray-500 font-medium text-center -translate-x-[40%]'>
      {props.name}
    </div>
    </div>
  )
}
