import React from 'react'
import DBMessage from './components/DBMessage'
import Timer from './components/Timer'

export default function DashboardCard() {
  return (
    <div className='flex flex-row w-full'>
      <DBMessage/>
      <Timer/>
    </div>
  )
}
