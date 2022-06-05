import React from 'react';
import Container from '../Container';
import crossButton from '../../assets/crossButton.png';

const CrossButton = ({ handleShowModal }) => {
  return (
    <Container className="crossButton">
      <img className="cbutton" src={crossButton} onClick={handleShowModal} />
    </Container>
  );
};

export default CrossButton;
