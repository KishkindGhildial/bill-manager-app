import React from 'react';
import './Main.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableData from '../TableData';
import Container from '../Container';
import TableHeading from '../TableHeading';
import BillFilter from '../BillFilter';
import Modal from '../Modal';
import BillTable from '../BillTable';

import { deleteBill } from '../../actions/billDataActions';

const Main = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    month: 1,
    category: '',
  });
  const bills = useSelector(state => state.billData);
  const billTableData = useSelector(state => state.billData[filter.month]);
  const [billList, setBillList] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    id: null,
  });

  const fetchMonthlyBills = () => {
    try {
      const data = bills[filter.month];
      setBillList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBillsByCategory = () => {
    try {
      const data = [];
      for (const month in bills) {
        for (const bill in bills[month]) {
          const cat = bills[month][bill].category;
          if (cat === filter.category) {
            data.push(bills[month][bill]);
          }
        }
      }
      setBillList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMonthChange = monthID => {
    setFilter(prevState => ({
      ...prevState,
      ...{ month: monthID, category: '' },
    }));
  };

  const handleShowModal = (type, id = null) => {
    setModalState({ isOpen: true, type: type, id: id });
  };

  const handleHideModal = () => {
    setModalState({ isOpen: false, type: null, id: null });
  };

  const handleCategoryChange = cat => {
    setFilter(prevState => ({
      ...prevState,
      ...{ month: '', category: cat },
    }));
  };

  const handleEditClick = id => {
    handleShowModal('edit', id);
  };

  const handleDeleteClick = id => {
    dispatch(deleteBill(id));
  };

  useEffect(() => {
    if (filter.month !== '') {
      fetchMonthlyBills();
    }
  }, [filter.month]);

  useEffect(() => {
    if (filter.category !== '') {
      fetchBillsByCategory();
    }
  }, [filter.category]);

  useEffect(() => {
    fetchMonthlyBills();
  }, []);

  return (
    <>
      <Container className="main">
        {modalState.isOpen ? (
          <Modal
            handleHideModal={handleHideModal}
            setBillList={setBillList}
            modalState={modalState}
            selectedMonth={filter.month}
            billList={billTableData}
          />
        ) : null}
        <Container className="dataCenter">
          <BillFilter
            selectedMonth={filter.month}
            selectedCategory={filter.category}
            handleMonthChange={handleMonthChange}
            handleCategoryChange={handleCategoryChange}
            handleShowModal={handleShowModal}
            billsList={billTableData}
          />
          <TableHeading class="heading" />
          <BillTable
            billList={billTableData}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </Container>
      </Container>
    </>
  );
};

export default Main;
