import React from 'react'
import {Row, Col, Button, ButtonGroup} from 'reactstrap'

const ControlsComponent = () => {
  return (
      <Col md={10} xs={12}>
            <button className='button'>Prev</button>
            <button className='button'>Next</button>
      </Col>
  )
}

export default ControlsComponent
