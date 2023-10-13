import React, { useState } from 'react'
import QuestionSphere from './sphere'
import ProgressBar from './progressbar'

export default function QuestionProgress(props) {
    const qStatus = props.qStatus
  return (
    <div className='flex flex-row flex-shrink-0 justify-center items-center'>
      <QuestionSphere idx="1" status={qStatus[0].status} name={qStatus[0].name}/>
      <ProgressBar status={qStatus[0].status}/>
      <QuestionSphere idx="2" status={qStatus[1].status} name={qStatus[1].name}/>
      <ProgressBar status={qStatus[1].status}/>
      <QuestionSphere idx="3" status={qStatus[2].status} name={qStatus[2].name}/>
      <ProgressBar status={qStatus[2].status}/>
      <QuestionSphere idx="4" status={qStatus[3].status} name={qStatus[3].name}/>
      <ProgressBar status={qStatus[3].status}/>
      <QuestionSphere idx="5" status={qStatus[4].status} name={qStatus[4].name}/>
      <ProgressBar status={qStatus[4].status}/>
      <QuestionSphere idx="6" status={qStatus[5].status} name={qStatus[5].name}/>
      <ProgressBar status={qStatus[5].status}/>
      <QuestionSphere idx="7" status={qStatus[6].status} name={qStatus[6].name}/>
    </div>
  )
}
