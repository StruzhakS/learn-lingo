import React from 'react';
import {
  FilterBox,
  LabelOfFilter,
  OptionOfFIlter,
  SelectFilter,
  SelectOfFilter,
} from './TeacherPage.styled';

const TeacherPage = () => {
  return (
    <>
      <FilterBox style={{ display: 'flex', gap: '20px' }}>
        <SelectFilter style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <LabelOfFilter htmlFor="language-select">Languages</LabelOfFilter>
          <SelectOfFilter name="languages" id="language-select">
            {/* <OptionOfFIlter value="">Please choose an language</OptionOfFIlter> */}
            <OptionOfFIlter value="french">French</OptionOfFIlter>
            <OptionOfFIlter value="english">English</OptionOfFIlter>
            <OptionOfFIlter value="german">German</OptionOfFIlter>
            <OptionOfFIlter value="ukrainian">Ukrainian</OptionOfFIlter>
            <OptionOfFIlter value="polish">Polish</OptionOfFIlter>
          </SelectOfFilter>
        </SelectFilter>
        <SelectFilter style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <LabelOfFilter htmlFor="level"> Level of knowledge</LabelOfFilter>
          <SelectOfFilter name="level" id="level">
            {/* <OptionOfFIlter value="">Please choose an language</OptionOfFIlter> */}
            <OptionOfFIlter value="A1">A1 Beginner</OptionOfFIlter>
            <OptionOfFIlter value="A2">A2 Elementary</OptionOfFIlter>
            <OptionOfFIlter value="B1">B1 Intemediate</OptionOfFIlter>
            <OptionOfFIlter value="B2">B2 Upper-Intermediate</OptionOfFIlter>
          </SelectOfFilter>
        </SelectFilter>
        <SelectFilter style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <LabelOfFilter htmlFor="price">Price</LabelOfFilter>
          <SelectOfFilter name="price" id="price">
            {/* <OptionOfFIlter value="">Please choose an price</OptionOfFIlter> */}
            <OptionOfFIlter value="10">10</OptionOfFIlter>
            <OptionOfFIlter value="20">20</OptionOfFIlter>
            <OptionOfFIlter value="30">30</OptionOfFIlter>
            <OptionOfFIlter value="40">40</OptionOfFIlter>
          </SelectOfFilter>
        </SelectFilter>
      </FilterBox>
      <div>
        <ul></ul>
      </div>
    </>
  );
};

export default TeacherPage;
