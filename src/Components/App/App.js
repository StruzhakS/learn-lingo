import './App.css';
import Header from '../Header/Header';
import { Container } from './App.styled';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import TeacherPage from '../../Pages/TeacherPage/TeacherPage';
import Homepage from '../HomePage/Homepage';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openRegisterModal() {
    setRegisterIsOpen(true);
  }

  function closeRegisterModal() {
    setRegisterIsOpen(false);
  }
  return (
    <Container>
      <Header openModal={openModal} openRegisterModal={openRegisterModal} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/teachers" element={<TeacherPage />} />
        </Routes>
      </main>
      <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <RegisterModal modalIsOpen={registerModalIsOpen} closeModal={closeRegisterModal} />
    </Container>
  );
}

export default App;
