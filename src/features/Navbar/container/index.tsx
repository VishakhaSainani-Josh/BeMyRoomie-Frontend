import { getUserInfo } from '@/utils/helpers/helper';
import Navbar from '../components/Navbar';

const NavbarContainer = () => {
  const user = getUserInfo();
  return <Navbar user={user} />;
};

export default NavbarContainer;
