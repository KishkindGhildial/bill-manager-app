import React from 'react';
import Container from '../Container';
import Text from '../Text';

const Input = ({
  name,
  type,
  value,
  onChange,
  label,
  errorMsg,
  modalType = null,
  selectedMonth = '',
}) => {
  if (type === 'date') {
    debugger;
  }

  return (
    <Container className="inputContainer">
      <label htmlFor={name}>{label}</label>

      {type === 'date' && modalType === 'edit' ? (
        <input
          id={name}
          name={name}
          placeholder={name}
          type={type}
          value={value}
          onChange={e => {
            const newMonth = e.target.value.split('-')[1];
            const currentMonth = value.split('-')[1];
            if (newMonth === currentMonth) {
              onChange(e);
            }
          }}
          min={`2020-${selectedMonth}-01`}
          max={`2020-${selectedMonth}-31`}
        />
      ) : type === 'date' ? (
        <input
          id={name}
          name={name}
          placeholder={name}
          type={type}
          value={value}
          onChange={e => {
            onChange(e);
          }}
          min="2020-01-01"
          max="2020-12-31"
        />
      ) : (
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
      )}

      {!!errorMsg ? <Text className="errorMsg">{errorMsg}</Text> : null}
    </Container>
  );
};

export default Input;
