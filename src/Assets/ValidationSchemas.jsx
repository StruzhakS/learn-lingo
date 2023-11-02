import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'The password must be at least 8 characters long')
    .max(50, 'Too Long!')
    .required('Password is required'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'The password must be at least 8 characters long')
    .max(50, 'Too Long!')
    .required('Password is required'),
});
