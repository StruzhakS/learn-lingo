import React from 'react';
import { TeacherItem } from './TeacherCard.styled';

const TeacherCard = ({ item, index }) => {
  console.log(item);
  return (
    <TeacherItem>
      <div>
        <img src={item.avatar_url} alt={`avatar ${item.name} `} width="80" height="80" />
      </div>
      <div>
        <p>languages</p>
        <h2>{item.name}</h2>
        <p>
          <span>Speak:</span> {item.languages.join(', ')}
        </p>
        <p>
          <span>Lesson info:</span> {item.lesson_info}
        </p>
        <p>
          <span>Conditions:</span> {item.conditions}
        </p>
        {item.levels.map((level, idx) => (
          <input key={idx} type="radio" id={level} name={level} value={idx} checked />
        ))}
      </div>
    </TeacherItem>
  );
};

export default TeacherCard;
