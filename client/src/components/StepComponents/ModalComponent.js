import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

function ModalComponent( {shown, setShown} ) {
  const close = ()=> setShown({title:'',contents:''})
  return (
    <>
      <div>
        <Modal isOpen={shown.title} toggle={close}>
          {/* Header still needs styled and chevron added after icon lib is decided on */}
          <div className='modalHeader'>
            {shown.title} 
            <span style={{cursor:'pointer'}} onClick={close}>X</span>
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