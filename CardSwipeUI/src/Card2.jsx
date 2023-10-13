import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

import { useState,useEffect } from 'react'

const CardVariants = {
    entry:{
        x:0,
        transition:{
            delay:0.5,
        }
    },
    hidden:{
        x:"-100vw"
    },
    exit:{
        x:"100vw",
        transition:{
            delay:0.5,
            stiffness:1
        }
    }

}

const contentList = [
    {
        img:"",
        name:"FirstName1 LastName"
    },
    {
        img:"",
        name:"FirstName1 LastName"
    },
    {
        img:"",
        name:"FirstName1 LastName"
    }
]

export default function MentorCard() {
    const [index,setIndex] = useState(0)
    useEffect(()=>{
      const timer = setInterval(()=>{
    setIndex((prev)=> prev+1==contentList.length?0:prev+1)
    },3000)
    return () => clearInterval(timer);
})
  return (
    <div className='flex flex-row justify-center overflow-hidden min-h-full w-full'>
    <AnimatePresence mode="wait">
      <motion.div className='flex flex-col bg-white bg-opacity-70 h-80 w-80 text-center items-center justify-evenly'
      variants={CardVariants}
      key={index}
      initial="hidden"
      animate="entry"
      exit="exit"
      >
        <div className='bg-[#101010] h-56 w-56'>
            <img></img>
        </div>
      <div className='text-2xl font-Teko font-normal'>{contentList[index].name}</div>
    </motion.div>
    </AnimatePresence>
    </div>
  )
}
