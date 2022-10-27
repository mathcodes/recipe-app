import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import ControlsComponent from './ControlsComponent'
import ModalComponent from './ModalComponent'
import Button from '../Button'

const StepPage = () => {

  const [steps, setSteps] = useState([1,2,3,4,5,6,7,8,9,10])//hard code for testing. Will need to be steps.length after api call
  const [curIndex, setCurIndex] = useState(0)
  const [shown, setShown] = useState({title:'',contents:''})

  const {titleId} = useParams() // used for fetching steps in api call 

  const dummyImage="https://www.realsimple.com/thmb/XYXri0v7gA-REe_OZFNwPS98qxw=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-pork-cuts-types-guide-1-2000-ffcac76d0b1c42ccb9a86d5e32f3aa38.jpg"
  const ingredients=['ing1', 'ing2', 'ing3']
  const allIngredients = ['all 1', 'all 2', 'all 3','all 4','all 5']


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

  const image = <img src={dummyImage} alt="dummyImage" width="80%" textAlign="center"/>
  const ingredientsToShow = <ul>{ingredients.map((ingredient,index)=><li key={ingredient+index}>{ingredient}</li>)}</ul>
  const allIngredientsToShow = <ul>{allIngredients.map((ingredient,index)=><li key={ingredient+index}>{ingredient}</li>)}</ul>

  return (
    <Container>
      {/* for testing controls component */}
      <div>{curIndex}</div>
      <div>Title</div>
      <div>Text Area</div>
     <Row>
      <ControlsComponent updateStepIndex={updateStepIndex}/> 
     </Row>

      <Row >
        <Col>
          <Button
          className="roundButton"
          type="button"
          onClick={() => 
            shown.title === 'Image'? setShown({title:'',contents:''}) :
             setShown({title:'Image', contents:image})}
          value="image"
          title="Image"
          />
        </Col>
        <Col>
          <Button
          className="roundButton"
          type="button"
          onClick={() =>
            shown.title === 'Ingredients'? setShown({title:'',contents:''}) :
            setShown({title:'Ingredients', contents:ingredientsToShow})}
          value="Ingredients"
          title="Ingredients"
          />
        </Col>
        <Col>
          <Button
          className="roundButton"
          type="button"
          onClick={() =>
            shown.title === 'Ingredients'? setShown({title:'',contents:''}) :
            setShown({title:'Ingredients', contents:allIngredientsToShow})}
          value="All Ingredients"
          title="All Ingredients"
          />
        </Col>
      </Row>
      <ModalComponent shown={shown} setShown={setShown}/>
    </Container>
  )
}

export default StepPage
