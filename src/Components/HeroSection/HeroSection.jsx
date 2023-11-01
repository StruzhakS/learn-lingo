import React from 'react';
import heroImg from '../../image/blockheroImg.jpg';
import {
  HeroWrapper,
  GetStarted,
  HeroText,
  HeroParagraph,
  GetStartedBtn,
  ItalicSpan,
} from './HeroSection.styled';

const HeroSection = () => {
  return (
    <HeroWrapper>
      <GetStarted>
        <HeroText>
          Unlock your potential with the best <ItalicSpan>language</ItalicSpan> tutors
        </HeroText>
        <HeroParagraph>
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
          proficiency to new heights by connecting with highly qualified and experienced tutors.
        </HeroParagraph>
        <GetStartedBtn type="button">Get started</GetStartedBtn>
      </GetStarted>
      <div>
        <img src={heroImg} alt="woman and macbook" />
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
