import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { FaChevronDown } from 'react-icons/fa';

function ModalComponent( {shown, setShown} ) {
  const close = ()=> setShown({title:'',contents:''})
  return (
    <>
      <div>
        <Modal isOpen={shown.title} toggle={close}>
          {/* Header still needs styled and chevron added after icon lib is decided on */}
          <div className='modalHeader' >
            <h3 className="modal-title text-center">{shown.title} </h3>
            <span className="position-absolute top-0 end-0" style={{cursor:'pointer'}} onClick={close}>
            <FaChevronDown />
            </span>
          </div>
          <ModalBody>  
            {shown.contents}
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}

export default ModalComponent;