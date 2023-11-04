import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {
  CloseLoginModalBtn,
  ErrorLoginMessage,
  InputLoginModalField,
  LabelModal,
  LoginBtn,
  LoginForm,
  LoginModalWindow,
  LoginSubTitle,
  LoginTitle,
} from './LoginModal.styled';
import { Formik } from 'formik';
import { loginSchema } from '../../Assets/ValidationSchemas';

const LoginModal = ({ modalIsOpen, closeModal, afterOpenModal }) => {
  const handleSubmit = values => {
    console.log(values);
    closeModal();
  };

  return (
    modalIsOpen && (
      <LoginModalWindow
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <LoginTitle>Log in</LoginTitle>
        <LoginSubTitle>
          Welcome back! Please enter your credentials to access your account and continue your
          search for an teacher.
        </LoginSubTitle>
        <CloseLoginModalBtn onClick={closeModal}>
          <AiOutlineClose />
        </CloseLoginModalBtn>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <LoginForm>
                <LabelModal>
                  <InputLoginModalField
                    type="email"
                    name="email"
                    placeholder={'Email'}
                    autoComplete="off"
                  />
                  <ErrorLoginMessage name="email" component="div" />
                </LabelModal>
                <LabelModal>
                  <InputLoginModalField
                    type="password"
                    name="password"
                    placeholder={'Password'}
                    autoComplete="off"
                  />
                  <ErrorLoginMessage name="password" component="div" />
                </LabelModal>
                <LoginBtn type="submit" disabled={isSubmitting}>
                  Log In
                </LoginBtn>
              </LoginForm>
            );
          }}
        </Formik>
      </LoginModalWindow>
    )
  );
};

export default LoginModal;
