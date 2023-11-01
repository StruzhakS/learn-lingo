import styled from 'styled-components';

export const HeroWrapper = styled.section`
  display: flex;
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
  max-width: 548px;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  margin: 0;
  margin-bottom: 32px;
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

export const GetStartedBtn = styled.button`
  display: inline-flex;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f4c550;
  border: none;
  outline: none;
  cursor: pointer;
`;
