import styled from 'styled-components';
import Modal from 'react-modal';
import { Form } from 'formik';

export const RegisterModalWindow = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 566px;
  height: 600px;
  background-color: white;
  border-radius: 30px;
  padding: 64px;
`;

export const RegisterTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const RegisterSubTitle = styled.p`
  line-height: 1.38;
  margin-bottom: 40px;
`;

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
