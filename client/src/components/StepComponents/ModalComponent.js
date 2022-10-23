import React, { useState } from 'react';
import Button from '../Button'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

function ModalComponent({ image, ingredients, allIngredients }) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggle1 = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);

  let IngrArray = ingredients.map((ingredient, index) => {
    return <li>{index} : {ingredient}</li>
  });

  let AllIngrArray = allIngredients.map((ingredient, index) => {
    return <li>{index} : {ingredient}</li>
  });

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
          <Col className="modalButtonRow">
            <Button
              className="roundButton"
              type="button"
              onClick={toggle2}
              value="ingredients"
              title="Ingredients"
            />
          </Col>
          <Col className="modalButtonRow">
            <Button
              className="roundButton"
              type="button"
              onClick={toggle3}
              value="allIngredients"
              title="All Ingredients"
            />
          </Col>
        </Row>
      </div>

      {/* Modal 1 */}
      <Modal isOpen={modal} toggle={toggle1}>
        <ModalHeader>Modal 1 Header</ModalHeader>
        <ModalBody>
          <img src={image} alt="dummyImage" width="80%" textAlign="center" />
        </ModalBody>
        <ModalFooter>
          <Button
            className="modalButton"
            type="button"
            onClick={toggle1}
            value="modalBtn1a"
            title="TBDModal1"
          />         
          {' '}
          <Button
            className="modalButton"
            type="button"
            onClick={toggle1}
            value="modalBtn1b"
            title="Close"
          />
        </ModalFooter>
      </Modal>

      {/* Modal 2 */}
      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader>Modal 2 Header</ModalHeader>
        <ModalBody>
          {IngrArray}
        </ModalBody>
        <ModalFooter>
        <Button
            className="modalButton"
            type="button"
            onClick={toggle2}
            value="modalBtn2a"
            title="TBDModal2"
          />         
          {' '}
          <Button
            className="modalButton"
            type="button"
            onClick={toggle2}
            value="modalBtn2b"
            title="Close"
          />
        </ModalFooter>
      </Modal>

      {/* Modal 3 */}
      <Modal isOpen={modal3} toggle={toggle3}>
        <ModalHeader>Modal 3 Header</ModalHeader>
        <ModalBody>
          {AllIngrArray}
        </ModalBody>
        <ModalFooter>
        <Button
            className="modalButton"
            type="button"
            onClick={toggle3}
            value="modalBtn3a"
            title="TBDModal3"
          />         
          {' '}
          <Button
            className="modalButton"
            type="button"
            onClick={toggle3}
            value="modalBtn3b"
            title="Close"
          />
        </ModalFooter>
      </Modal>

    </>
  )

}

export default ModalComponent;