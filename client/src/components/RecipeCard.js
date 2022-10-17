import React from 'react'
import { Row, Col } from 'reactstrap'

const RecipeCard = ({recipe:{image, title}}) => {
    const displayTitle = title.length >18 ? `${title.slice(0,18)}...`:title
  return (
    <div className='card-container'>
     
        <img className='card-img' src={`http://localhost:5001/${image}`} alt={title} />
        <div className='card-title'>
            <div>{displayTitle}</div>
            <div>description</div>
        </div>
        
          
       
    </div>
   
  )
}

export default RecipeCard
