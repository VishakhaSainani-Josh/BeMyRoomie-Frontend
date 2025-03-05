import {  baseQuery } from '@/apiConfig/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { LOGIN_ENDPOINTS } from '@/utils/constants/apiEndpointConstants';
const { LOGIN } = LOGIN_ENDPOINTS;

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: baseQuery(),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: newUser => ({
        url: LOGIN,
        method: 'POST',
        body: newUser
      })
    }),
  })
});

export const { useLoginUserMutation } = loginApi;
