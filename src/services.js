import axios from 'axios';

axios.defaults.baseURL = 'https://learnlingo-cc890-default-rtdb.firebaseio.com/';

export const getAllTeachers = async () => {
  const { data } = await axios('teachers.json');
  return data;
};
