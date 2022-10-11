import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const StepPage = () => {

  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState([1,2,3,4,5,6,7,8,9,10])//hard code for testing. Will need to be steps.length after api call
  const [curIndex, setCurIndex] = useState(0)

  const {titleId} = useParams() // used for fetching steps in api call 

  const updateStepIndex = (decrement = false)=>{
    if(!decrement && curIndex < steps.length -1){ //make sure we dont go past the last step
      setCurIndex(curIndex+1)
    }else if(decrement && curIndex >0){
      setCurIndex(curIndex -1)
    }else{
      console.log('Out of range')
      //could use this to handle toast, alert, or something to indicate out of range/end
    }
  }

  return (
    <div>
      <div>Title</div>
      <div>Text Area</div>
      <div>Control Component</div>
      <div>Buttons</div>
      <div>Modal</div>
    </div>
  )
}

export default StepPage
