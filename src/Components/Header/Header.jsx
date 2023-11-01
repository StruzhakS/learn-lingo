import React from 'react';
import logoUkraine from '../../image/ukraineLogo.png';
import loginImg from '../../image/log-in-01loginBtn.png';
import {
  HeaderBox,
  LogoLink,
  Navigation,
  NavigationLink,
  LoginBtn,
  Authentication,
  RegistrationBtn,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <LogoLink>
        <img src={logoUkraine} alt="flags of Ukraine" />
        LearnLingo
      </LogoLink>

      <Navigation>
        <NavigationLink to={'/'}>Home</NavigationLink>
        <NavigationLink to={'/teachers'}>Teachers</NavigationLink>
      </Navigation>

      <Authentication>
        <LoginBtn type="button">
          <img src={loginImg} alt="Login" /> Log in
        </LoginBtn>
        <RegistrationBtn type="button">Registration</RegistrationBtn>
      </Authentication>
    </HeaderBox>
  );
};

export default Header;
