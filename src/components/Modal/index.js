import React from 'react';
import Container from '../Container';
import CrossButton from '../CrossButton';
import Form from '../Form';
import Chart from '../Chart';

const Modal = ({
  handleHideModal,
  setBillList,
  modalState,
  selectedMonth,
  billList,
}) => {
  return (
    <Container className="modal">
      <CrossButton handleHideModal={handleHideModal} />
      <Container className="modalContent">
        {modalState.type === 'add' || modalState.type === 'edit' ? (
          <Form
            setBillList={setBillList}
            modalState={modalState}
            selectedMonth={selectedMonth}
            handleHideModal={handleHideModal}
          />
        ) : (
          <Chart billList={billList} selectedMonth={selectedMonth} />
        )}
      </Container>
    </Container>
  );
};

export default Modal;
