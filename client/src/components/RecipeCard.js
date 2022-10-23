import React from 'react'
import { Row, Col } from 'reactstrap'

const RecipeCard = ({recipe:{image, title, description, id}, nav}) => {
    const displayTitle = title.length >18 ? `${title.slice(0,18)}...`:title
  return (
    <Row className='card-container' onClick={()=>nav(id)}>
        <Col xs={3} className='p-0'><img className='card-img' src={`http://localhost:5001/${image}`} alt={title} />
        </Col>
        <Col xs={9} className='card-description'>
            <div className='card-title'>{displayTitle}</div>
            <div>{description}</div>
        </Col> 
    </Row>
   
  )
}

export default RecipeCard
