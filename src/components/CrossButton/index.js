import React from 'react';
import Container from '../Container';
import crossButton from '../../assets/crossButton.png';

const CrossButton = ({ handleHideModal }) => {
  return (
    <Container className="crossButton">
      <img className="cbutton" src={crossButton} onClick={handleHideModal} />
    </Container>
  );
};

export default CrossButton;
