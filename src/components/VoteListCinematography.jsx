import VoteItem from "./VoteItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import { v4 as uuidv4 } from 'uuid';

function VoteListDirector() {
  const {cinematography} = useContext(FeedbackContext)
  

  if(!cinematography || cinematography.length === 1){
    return <p>No Vote Yet</p>
  }
  
  return (
    <div className="feedback-list">  
    <AnimatePresence>
      {cinematography.slice(1).map((item, idx)=>(
        <motion.div key={uuidv4()} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
          <VoteItem key={idx} item={item} type={'cinematography'}/>
        </motion.div>        
      ))}
    </AnimatePresence>
    </div>
  )
}

export default VoteListDirector