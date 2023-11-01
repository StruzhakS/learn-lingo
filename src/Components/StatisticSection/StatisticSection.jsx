import React from 'react';
import { StatSection, StatisticList } from './StatisticSection.styled';

const StatisticSection = () => {
  return (
    <StatSection>
      <StatisticList>
        <li>32,000+ Experienced tutors</li>
        <li>300,000+ 5-star tutor reviews</li>
        <li>120+ Subjects taught</li>
        <li>200+ Tutor nationalities</li>
      </StatisticList>
    </StatSection>
  );
};

export default StatisticSection;
