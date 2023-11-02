import styled from 'styled-components';
import Modal from 'react-modal';
import { ErrorMessage, Field, Form } from 'formik';

export const LoginTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const LoginSubTitle = styled.p`
  margin-bottom: 40px;
  line-height: 1.38;
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const LoginModalWindow = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 566px;
  height: 506px;
  background-color: white;
  border-radius: 30px;
  padding: 64px;
`;

export const LabelModal = styled.label`
  display: block;
`;

export const CloseLoginModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  outline: none;
  font-size: 28px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: rotate(90deg);
  }
`;

export const InputLoginModalField = styled(Field)`
  padding: 16px 18px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  color: rgba(18, 20, 23, 0.8);
  /* margin-bottom: 8px; */

  ::placeholder {
    color: inherit;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  width: 438px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f4c550;
  border: none;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: #ffdc86;
    scale: 1.02;
  }
`;

export const ErrorLoginMessage = styled(ErrorMessage)`
  color: red;
  margin-left: 25px;
  font-size: 12px;
`;
