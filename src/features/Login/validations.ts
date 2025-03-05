import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters at minimum')
    .required('Password is required')
});
