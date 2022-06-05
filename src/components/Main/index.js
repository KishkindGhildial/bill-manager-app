import React from 'react';
import './Main.css';
import bills from '../../billData';
import { useState } from 'react';
import { useEffect } from 'react';
import TableData from '../TableData';
import Container from '../Container';
import TableHeading from '../TableHeading';
import BillFilter from '../BillFilter';
import Modal from '../../Modal';

const Main = () => {
  const [billList, setBillList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState({
    month: 1,
    category: '',
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

  const handleShowModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleCategoryChange = cat => {
    setFilter(prevState => ({
      ...prevState,
      ...{ month: '', category: cat },
    }));
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
        {showModal ? (
          <Modal handleShowModal={handleShowModal} setBillList={setBillList} />
        ) : null}
        <Container className="dataCenter">
          <BillFilter
            selectedMonth={filter.month}
            selectedCategory={filter.category}
            handleMonthChange={handleMonthChange}
            handleCategoryChange={handleCategoryChange}
            handleShowModal={handleShowModal}
          />
          <TableHeading class="heading" />
          {billList.map(billData => (
            <TableData billData={billData} keyID={billData.id} />
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Main;
