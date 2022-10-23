import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import { useParams } from 'react-router-dom'
import ControlsComponent from './ControlsComponent'
import ModalComponent from './ModalComponent'

const StepPage = () => {

  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState([1,2,3,4,5,6,7,8,9,10])//hard code for testing. Will need to be steps.length after api call
  const [curIndex, setCurIndex] = useState(0)

  const {titleId} = useParams() // used for fetching steps in api call 

  // Placeholders for API calls
  let dummyImage = "https://www.realsimple.com/thmb/XYXri0v7gA-REe_OZFNwPS98qxw=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-pork-cuts-types-guide-1-2000-ffcac76d0b1c42ccb9a86d5e32f3aa38.jpg"
  let dummyIng = ['ing1', 'ing2', 'ing3', 'ing4',]
  let dummyAllIng = ['Aing1', 'Aing2', 'Aing3', 'Aing4','Aing5', 'Aing6', 'Aing7', 'Aing8',]

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
    <Container>
      {/* for testing controls component */}
      <div>{curIndex}</div>
      <div>Title</div>
      <div>Text Area</div>
      
      <ControlsComponent updateStepIndex={updateStepIndex}/> 
      <ModalComponent image={dummyImage} ingredients={dummyIng} allIngredients={dummyAllIng} />
    </Container>
  )
}

export default StepPage
