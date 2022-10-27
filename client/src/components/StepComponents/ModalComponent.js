import React, { useState } from 'react';
import Button from '../Button'
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

function ModalComponent({ image, ingredients, allIngredients, modalNum, }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
 
  return (
    <>
      <div>
        <Row className="text-center" xs="3">
          <Col className="modalButtonRow">
            {/* This was adding a 4th button to the UI, kept it for possible future use???? */}
            <Button
              className="roundButton"
              type="button"
              onClick={toggle}
              value="image"
              title="Image"
            />
          </Col>
        </Row>
      </div>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Modal 1 Header</ModalHeader>
        <ModalBody>
          {/* needs condtional to render correct body           */}
        </ModalBody>
        <ModalFooter>
          <Button
            className="modalButton"
            type="button"
            onClick={toggle}
            value="modalBtn1a"
            title="TBDModal1"
          />         
          {' '}
          <Button
            className="modalButton"
            type="button"
            onClick={toggle}
            value="modalBtn1b"
            title="Close"
          />
        </ModalFooter>
      </Modal>
    </>
  )

}

export default ModalComponent;