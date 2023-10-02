import { motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react'

const CardVariant = {
  hidden:{
    y:200,
    opacity:0
  },
  visible:{
    y:0,
    x:0,
    opacity:1,
    transition:{
      duration:0.8
    }
  },
  exit:{
    y:[0,-100,150],
    x:[0,-100],
    rotate:[0,-15],
    opacity:[1,0.5,0],
    transition:{
      duration:0.6,
      ease:"easeInOut"
    }
  }
}

const contentVariant = {
  hidden:{
    y:100,
    opacity:0
  },
  visible:{
    y:0,
    x:0,
    opacity:1,
    transition:{
      duration:0.8
    }
  },
  exit:{
    y:-100,
    opacity:0,
    transition:{
      duration:0.8
    }
  }
}

const contentList = [{img:"Hello1",content:"Hello there this is content 1"},{img:"Hello2",content:"Hello there this is content 2"},{img:"Hello3",content:"Hello there this is content 3"}]
export default function Card() {
  const [index,setIndex] = useState(0)
  useEffect(()=>{
    const timer = setInterval(()=>{
  setIndex((prev)=> prev+1==contentList.length?0:prev+1)
},2000)
return () => clearInterval(timer);
  })
  return (
    <>
    <AnimatePresence mode="wait">
    <motion.div className='flex flex-col bg-white bg-opacity-70 h-72 w-72 rounded-lg text-center justify-evenly text-3xl'
    key={index}
    variants={CardVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      {contentList[index].img}
    </motion.div>
    </AnimatePresence>
    <AnimatePresence mode="wait">
    <motion.div className='bg-white bg-opacity-70 h-96 w-2/3 ml-5 rounded-xl flex flex-col justify-center items-center text-lg'
    key={index}
    variants={contentVariant}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      {contentList[index].content}
    </motion.div>
    </AnimatePresence>
    </>
  )
}
