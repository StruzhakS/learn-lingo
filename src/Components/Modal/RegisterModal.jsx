import React from 'react';
import {
  RegisterForm,
  RegisterModalWindow,
  RegisterSubTitle,
  RegisterTitle,
} from './RegisterModal.styled';
import {
  CloseLoginModalBtn,
  ErrorLoginMessage,
  InputLoginModalField,
  LoginBtn,
} from './LoginModal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { Formik } from 'formik';
import { registerSchema } from '../../Assets/ValidationSchemas';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterModal = ({ modalIsOpen, closeModal }) => {
  const handleSubmit = values => {
    console.log(values);
    closeModal();
  };

  return (
    modalIsOpen && (
      <RegisterModalWindow
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <CloseLoginModalBtn onClick={closeModal}>
          <AiOutlineClose />
        </CloseLoginModalBtn>
        <RegisterTitle>Registration</RegisterTitle>
        <RegisterSubTitle>
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information
        </RegisterSubTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <RegisterForm>
                <ErrorLoginMessage component="div" name="name" />
                <ErrorLoginMessage component="span" name="email" />
                <ErrorLoginMessage component="div" name="password" />
                <InputLoginModalField
                  type="text"
                  label="name"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                />
                <InputLoginModalField
                  type="email"
                  name="email"
                  label="email"
                  autoComplete="off"
                  placeholder="Email"
                />
                <InputLoginModalField
                  type="text"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <LoginBtn type="submit" disabled={isSubmitting}>
                  Sign Up
                </LoginBtn>
              </RegisterForm>
            );
          }}
        </Formik>
      </RegisterModalWindow>
    )
  );
};
export default RegisterModal;
