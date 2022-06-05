import React from 'react';
import Container from '../Container';
import Text from '../Text';

const Input = ({ name, type, value, onChange, label, errorMsg }) => {
  return (
    <Container className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={name}
        type={type}
        value={value}
        onChange={e => {
          onChange(e);
        }}
      />
      {!!errorMsg ? <Text className="errorMsg">{errorMsg}</Text> : null}
    </Container>
  );
};

export default Input;
