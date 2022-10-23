import React, { useState } from 'react';
import Button from '../Button';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

function ModalComponent({ image, ingredients }) {
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
              className="roundButton"
              type="button"
              onClick={toggle1}
              value="image"
              title="Image"
            />
          </Col>
          <Col>
            <Button
              className="roundButton"
              type="button"
              onClick={toggle2}
              value="ingredients"
              title="Ingredients"
            />
          </Col>
          <Col>
            <Button
              className="roundButton"
              type="button"
              onClick={toggle3}
              value="allIngredients"
              title="All Ingredients"
            />
          </Col>
        </Row>

        {/* FIRST MODAL */}
        <Modal isOpen={modal} toggle={toggle1}>
          <ModalHeader toggle={toggle1}>Modal 1</ModalHeader>
          <ModalBody>
            <ul>
              <img src={image} alt="dummyImage" width="80%" textAlign="center" />
            </ul>



          </ModalBody>
          <ModalFooter>
            <Button 
              onClick={toggle1}
              className="modalButton"
              value="modal1"
              title="Title1 TBD"
            >
              Modal 1
            </Button>{' '}
            <Button
              onClick={toggle1}
              className="modalButton"
              value="modal1"
              title="Cancel"
            />
          </ModalFooter>
        </Modal>

        {/* Second Modal - IMAGE*/}
        <Modal isOpen={modal2} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Modal 2</ModalHeader>
          <ModalBody>
            {IngrArray}
          </ModalBody>
          <ModalFooter>
          <Button
              onClick={toggle2}
              className="modalButton"
              value="modal2"
              title="Title2 TBD"
            />
            {' '}
            <Button
              onClick={toggle2}
              className="modalButton"
              value="modal2"
              title="Cancel"
            />
          </ModalFooter>
        </Modal>

        {/* Third Modal - Nothing Yet */}
        <Modal isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle2}>Modal 3</ModalHeader>
          <ModalBody>
            {IngrArray}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={toggle3}
              className="modalButton"
              value="modal2"
              title="Title3 TBD"
            />
            {' '}
            <Button
              onClick={toggle3}
              className="modalButton"
              value="modal3"
              title="Cancel"
            />
          </ModalFooter>
        </Modal>

      </div>
    </>
  );
}

export default ModalComponent;