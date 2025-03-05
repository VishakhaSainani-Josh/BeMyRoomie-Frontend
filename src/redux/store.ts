import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@/features/Login/loginSlice';
import { registerApi } from '@/features/Register/api';
import { viewPropertiesApi } from '@/features/Properties/ViewProperties/api';
import { listerPropertyApi } from '@/features/Properties/ListerProperties/api';
import { loginApi } from '@/features/Login/api';
import { userApi } from '@/features/User/api';
import { interestApi } from '@/features/Interests/api';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [loginApi.reducerPath]: loginApi.reducer,

    [registerApi.reducerPath]: registerApi.reducer,

    [viewPropertiesApi.reducerPath]: viewPropertiesApi.reducer,

    [listerPropertyApi.reducerPath]: listerPropertyApi.reducer,

    [userApi.reducerPath]: userApi.reducer,

    [interestApi.reducerPath]:interestApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      loginApi.middleware,
      registerApi.middleware,
      viewPropertiesApi.middleware,
      listerPropertyApi.middleware,
      userApi.middleware,
      interestApi.middleware
    ])
});
