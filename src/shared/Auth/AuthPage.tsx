import LoginContainer from '@/features/Login/containers';
import RegisterContainer from '@/features/Register/containers';
import { LOGIN_PATH } from '@/root/routeConstants';
import { useLocation } from 'react-router';
import AuthLayout from './AuthLayout';

const AuthPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getAuthComponent = (currentPath: string) => {
    if (currentPath === LOGIN_PATH) {
      return <LoginContainer />;
    } else if (currentPath.startsWith('/signup/')) {
      return <RegisterContainer />;
    } else {
      return <LoginContainer />;
    }
  };

  return <AuthLayout>{getAuthComponent(currentPath)}</AuthLayout>;
};

export default AuthPage;
