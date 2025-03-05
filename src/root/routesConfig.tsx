import { ReactNode } from 'react';
import { LOGIN_PATH, SIGNUP_PATH } from './routeConstants';
import AuthPage from '@/shared/Auth/AuthPage';
import NotFoundPage from '@/shared/NotFound/NotFoundPage';
import LandingPageContainer from '@/features/LandingPage/container';
import PropertyDetailsContainer from '@/features/Properties/ViewProperties/container/PropertyDetailsContainer';
import ListerPropertyContainer from '@/features/Properties/ListerProperties/container';
import ViewPropertiesContainer from '@/features/Properties/ViewProperties/container';
import UpdatePropertyContainer from '@/features/Properties/ListerProperties/container/UpdatePropertyContainer';
import PreferenceContainer from '@/features/User/container/PreferenceContainer';
import { UpdateProfileContainer } from '@/features/User/container/UpdateProfileContainer';
import ViewInterestedPropertiesContainer from '@/features/Interests/container/ViewInterestedPropertiesContainer';
import UserContainer from '@/features/User/container';
import InterestsContainer from '@/features/Interests/container';

export interface RoutesType {
  path: string;
  element: ReactNode;
  isProtected: boolean;
  includeLayout: boolean;
}

export const routes: RoutesType[] = [
  {
    path: '/',
    element: <LandingPageContainer />,
    isProtected: false,
    includeLayout: false
  },
  {
    path: LOGIN_PATH,
    element: <AuthPage />,
    isProtected: false,
    includeLayout: false
  },
  {
    path: SIGNUP_PATH,
    element: <AuthPage />,
    isProtected: false,
    includeLayout: false
  },
  {
    path: '/properties?owner=true',
    element: <ViewPropertiesContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/properties',
    element: <ViewPropertiesContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '*',
    element: <NotFoundPage />,
    isProtected: false,
    includeLayout: false
  },
  {
    path: '/properties/:property_id/edit',
    element: <UpdatePropertyContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/properties/:property_id',
    element: <PropertyDetailsContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/property',
    element: <ListerPropertyContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/preferences',
    element: <PreferenceContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/profile',
    element: <UserContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/profile/edit',
    element: <UpdateProfileContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/properties/interests/:property_id',
    element: <InterestsContainer />,
    isProtected: true,
    includeLayout: true
  },
  {
    path: '/interests/properties',
    element: <ViewInterestedPropertiesContainer />,
    isProtected: true,
    includeLayout: true
  }
];
