import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
`;

export const GetStarted = styled.div`
  border-radius: 30px;
  background: #f8f8f8;
  padding: 98px 64px;
  height: 531px;
`;

export const HeroText = styled.h1`
  @media (max-width: 1439px) {
    max-width: 548px;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.17;
    letter-spacing: -0.96px;
    margin: 0;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const ItalicSpan = styled.span`
  font-style: italic;
`;

export const HeroParagraph = styled.p`
  max-width: 471px;
  letter-spacing: -0.32px;
  line-height: 1.32;
  margin-bottom: 64px;
`;

const fade = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const GetStartedBtn = styled(Link)`
  animation: ${fade} 2s linear infinite alternate-reverse;

  display: inline-flex;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f4c550;
  border: none;
  outline: none;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  cursor: pointer;

  :hover {
    scale: 1.02;
    animation: none;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 568px;
`;
