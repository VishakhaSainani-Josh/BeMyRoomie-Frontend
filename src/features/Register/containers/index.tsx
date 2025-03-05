import { useNavigate, useParams } from 'react-router';
import { ErrorType, IRegisterData, UserRole } from '@/shared/types/types';
import RegisterForm from '../components';
import { useEffect } from 'react';
import { useRegisterFinderMutation, useRegisterListerMutation } from '../api';
import { FormikProps, useFormik } from 'formik';
import { toast } from 'react-toastify';

const RegisterContainer = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role || !Object.keys(UserRole).includes(role)) {
      navigate('/');
    }
  }, [role, navigate]);

  const [registerFinder] = useRegisterFinderMutation();
  const [registerLister] = useRegisterListerMutation();

  const formik: FormikProps<IRegisterData> = useFormik<IRegisterData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: 0,
      gender: '',
      required_vacancy: 0
    },
    onSubmit: values => handleSubmit(values),
  });

  const handleSubmit = async (values: IRegisterData) => {
    let response;

    try {
      if (role == 'finder') {
        response = await registerFinder(values).unwrap();
      } else if (role == 'lister') {
        response = await registerLister(values).unwrap();
      }
      toast.success(response.message);
      navigate('/login')
    } catch (err:unknown) {
      //handle error status yaha pe baadmai
      console.log("Registercontainer",err)
      const error=err as ErrorType
      toast.error(error?.data?.message);
    }
  };

  return <RegisterForm role={role as UserRole} formik={formik} />;
};

export default RegisterContainer;
