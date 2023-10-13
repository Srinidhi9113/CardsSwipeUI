import React from 'react'

export default function Message(props) {
  return (
    <div className='flex flex-row place-content-between mt-28'>
      <div className='w-4/6'>Hey Jude, you have <span className='font-bold'>{props.idx} more questions</span> more to answer for your profile to be optimised. Continue where you left off?</div>
      <button className='text-white bg-[#4557F6] p-2 pl-5 pr-5 rounded-md grow-0 mb-6 hover:shadow-md'>Continue</button>
    </div>
  )
}
