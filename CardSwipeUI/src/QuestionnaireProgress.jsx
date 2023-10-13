import React,{useState} from 'react'
import QuestionProgress from './components/questionprogress'
import Message from './components/message'

export default function QuestionnaireProgress() {
    const [qStatus,setQStatus] = useState([
        {status:100,name:"Profile"},
        {status:100,name:"Contact"},
        {status:100,name:"Headline"},
        {status:100,name:"About"},
        {status:50,name:"Previous Work Experience"},
        {status:0,name:"Current Work Experience"},
        {status:0,name:"Skills"}    
    ])
  return (
    <div className='border-gray-400 border-2 w-full rounded-lg p-5'>
      <QuestionProgress qStatus={qStatus}/>
      <Message idx={8}/>
    </div>
  )
}
