import { useFormik } from 'formik';
import LoginForm from '../components';
import { LoginSchema } from '../validations';
import { useLoginUserMutation } from '../api';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../loginSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ILoginData } from '@/shared/types/types';

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => handleSubmit(values),
    validationSchema: LoginSchema
  });

  const handleSubmit = async (values: ILoginData) => {
    try {
      const response = await loginUser(values).unwrap();
      console.log('Login successful:', response);
      toast.success('Login successful');

      if (response.data.token) {
        console.log('userid new login', response.token);
        dispatch(
          setCredentials({
            token: response.data.token,
            userId: response.data.user.userId,
            role: response.data.user.role,
            name: response.data.user.name,
            email: response.data.user.email
          })
        );
      }

      navigate('/properties');
    } catch (err) {
      console.error('Login failed:', err);
      toast.error('Login failed! Please check your credentials.');
    }
  };

  return <LoginForm formik={formik} />;
};

export default LoginContainer;
