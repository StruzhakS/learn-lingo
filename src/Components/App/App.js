import './App.css';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import StatisticSection from '../StatisticSection/StatisticSection';
import { Container } from './App.styled';
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';
import React, { useState } from 'react';
import Modal from 'react-modal';

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
        <HeroSection />
        <StatisticSection />
      </main>
      <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <RegisterModal modalIsOpen={registerModalIsOpen} closeModal={closeRegisterModal} />
    </Container>
  );
}

export default App;
