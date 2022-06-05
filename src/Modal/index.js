import React from 'react';
import Container from '../components/Container';
import CrossButton from '../components/CrossButton';
import Form from '../components/Form';

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
