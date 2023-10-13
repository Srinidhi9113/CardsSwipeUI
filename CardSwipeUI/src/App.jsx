import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import QuestionnaireProgress from './QuestionnaireProgress'
import DashboardCard from './DashboardCard'



export default function App() {

  return (
    <div className='min-h-screen flex flex-col gap-20 justify-center items-center p-10  min-w-max'>
      {/* <QuestionnaireProgress/> */}
      <DashboardCard/>
    </div>
  )
}
