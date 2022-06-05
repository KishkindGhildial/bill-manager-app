import React from 'react';
import Container from '../Container';
import CrossButton from '../CrossButton';
import Form from '../Form';

const Modal = ({ handleShowModal, setBillList }) => {
  return (
    <Container className="modal">
      <CrossButton handleShowModal={handleShowModal} />
      <Container className="modalContent">
        <Form setBillList={setBillList} />
      </Container>
    </Container>
  );
};

export default Modal;
