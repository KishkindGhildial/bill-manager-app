import React from 'react';
import './Header.css';
import Container from '../Container';
import Heading from '../Heading';

const Header = () => {
  return (
    <Container className="nav">
      <Heading type="h1" className="Home">
        Bill Manager
      </Heading>
    </Container>
  );
};

export default Header;
