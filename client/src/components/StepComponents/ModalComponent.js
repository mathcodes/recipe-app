import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

function ModalComponent( {image, ingredients} ) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggle1 = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);

  let IngrArray = ingredients.map((ingredient, index) => (
     
        <li>{index} : {ingredient}</li>
  ))

  return (
    <>
      <div>
        <Row className="text-center" xs="3">
          <Col className="modalButtonRow">
            <Button
              className="roundButtonSm"
              onClick={toggle1}
            >
              Modal1
            </Button>
          </Col>
          <Col>
            <Button
              className="roundButtonSm"
              onClick={toggle2}
            >

              Modal2
            </Button>
          </Col>
          <Col>
            <Button
              className="roundButtonSm"
              onClick={toggle3}
            >
              Modal3
            </Button>
          </Col>
        </Row>

        {/* FIRST MODAL */}
        <Modal isOpen={modal} toggle={toggle1}>
          <ModalHeader toggle={toggle1}>Modal 1</ModalHeader>
          <ModalBody>
            <ul>
            {IngrArray}
            </ul>
         
       

          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle1}>
              Modal 1
            </Button>{' '}
            <Button onClick={toggle1}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
          
          {/* Second Modal - IMAGE*/}
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Modal 2</ModalHeader>
          <ModalBody>
            <img src={image} alt="dummyImage" width="80%" textAlign="center"/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle2}>
              Modal 2
            </Button>{' '}
            <Button onClick={toggle2}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        
        <Modal isOpen={modal3} toggle={toggle3}>
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody> */}
          <ModalFooter>
            <Button onClick={toggle3}>
              Modal 3
            </Button>{' '}
            <Button onClick={toggle3}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        
      </div>
    </>
  );
}

export default ModalComponent;