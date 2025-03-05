import { removeUserInfo } from '@/utils/helpers/helper';
import LandingPage from '../component';

const LandingPageContainer = () => {
  removeUserInfo();
  return <LandingPage />;
};

export default LandingPageContainer;
