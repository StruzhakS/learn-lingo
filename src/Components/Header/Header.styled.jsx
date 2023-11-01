import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  margin-bottom: 20px;
`;

export const Navigation = styled.nav`
  width: 138px;
  display: flex;
  gap: 28px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  gap: 8px;
  letter-spacing: -0.4px;
  text-decoration: none;
  color: inherit;
`;

export const Authentication = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  height: 48px;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    color: orange;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
`;

export const RegistrationBtn = styled.button`
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: none;
  background-color: #121417;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
`;
