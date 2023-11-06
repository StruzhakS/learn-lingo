import React, { useEffect, useState } from 'react';
import {
  FilterBox,
  LabelOfFilter,
  OptionOfFIlter,
  SelectFilter,
  SelectOfFilter,
} from './TeacherPage.styled';
import { Formik } from 'formik';
import { languages, levels, prices } from '../../Components/Constans';
import TeacherCard from '../../Components/TeacherCard/TeacherCard';
import { getAllTeachers } from '../../services';

const TeacherPage = () => {
  const [teacherCards, setCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allTeachers = await getAllTeachers();
      setCard(allTeachers);
    };
    fetchData();
  }, []);

  return (
    <>
      <Formik>
        <FilterBox>
          <SelectFilter>
            <LabelOfFilter htmlFor="language-select">Languages</LabelOfFilter>
            <SelectOfFilter name="languages" id="language-select" values={languages}>
              {languages.map(el => (
                <OptionOfFIlter key={el} value={el}>
                  {el}
                </OptionOfFIlter>
              ))}
            </SelectOfFilter>
          </SelectFilter>
          <SelectFilter>
            <LabelOfFilter htmlFor="level"> Level of knowledge</LabelOfFilter>
            <SelectOfFilter name="level" id="level">
              {levels.map(({ value, option }) => (
                <OptionOfFIlter key={value} value={value}>
                  {option}
                </OptionOfFIlter>
              ))}
            </SelectOfFilter>
          </SelectFilter>
          <SelectFilter>
            <LabelOfFilter htmlFor="price">Price</LabelOfFilter>
            <SelectOfFilter name="price" id="price">
              {prices.map(({ value, option }) => (
                <OptionOfFIlter key={value} value={value}>
                  {option}
                </OptionOfFIlter>
              ))}
            </SelectOfFilter>
          </SelectFilter>
        </FilterBox>
      </Formik>
      <div>
        <ul>
          {teacherCards.map((el, idx) => (
            <TeacherCard key={idx} item={el} index={idx} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeacherPage;
